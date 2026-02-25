'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { getSupabase } from '@/lib/supabase'
import { useSearchParams } from 'next/navigation'
import CatalogCard from '@/components/CatalogCard'

function CatalogContent() {
  const [todasLasPropiedades, setTodasLasPropiedades] = useState<any[]>([])
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [openFilter, setOpenFilter] = useState<string | null>(null)

  // Lightbox State
  const [openLightbox, setOpenLightbox] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const searchParams = useSearchParams()
  const filterRef = useRef<HTMLDivElement>(null)

  // --- ESTADOS DE LOS FILTROS ---
  const [filtros, setFiltros] = useState({
    ubicaciones: [] as string[],
    precioMin: '',
    precioMax: '',
    tipos: [] as string[],
    recamaras: [] as number[],
    busqueda: ''
  })

  // Carga inicial de Supabase
  useEffect(() => {
    let isMounted = true

    const fetchPropiedades = async () => {
      try {
        const supabase = getSupabase()

        const { data, error } = await supabase
          .from('Propiedades')
          .select('*')

        if (error) {
          console.error('Error fetching propiedades:', error)
          return
        }

        if (data && isMounted) {
          setTodasLasPropiedades(data)
          setPropiedadesFiltradas(data)
        }
      } catch (err) {
        console.error('Supabase client error:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchPropiedades()

    return () => {
      isMounted = false
    }
  }, [])

  // Parse URL Params
  useEffect(() => {
    if (!searchParams) return

    const term = searchParams.get('term')
    const recs = searchParams.get('recamaras')?.split(',').map(Number)
    const minP = searchParams.get('minPrice')
    const maxP = searchParams.get('maxPrice')

    if (term || recs || minP || maxP) {
      setFiltros(prev => ({
        ...prev,
        busqueda: term || '',
        recamaras: recs || [],
        precioMin: minP || '',
        precioMax: maxP || ''
      }))
    }
  }, [searchParams])


  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setOpenFilter(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // --- LÓGICA DE FILTRADO ---
  useEffect(() => {
    let resultado = todasLasPropiedades

    // Filtro de Texto (Búsqueda)
    if (filtros.busqueda) {
      const term = filtros.busqueda.toLowerCase()
      resultado = resultado.filter(p =>
        (p.Titulo && p.Titulo.toLowerCase().includes(term)) ||
        (p.Ubicacion && p.Ubicacion.toLowerCase().includes(term)) ||
        (p.Tipo && p.Tipo.toLowerCase().includes(term))
      )
    }

    if (filtros.ubicaciones.length > 0) {
      resultado = resultado.filter(p => filtros.ubicaciones.includes(p.Ubicacion))
    }
    if (filtros.tipos.length > 0) {
      resultado = resultado.filter(p =>
        filtros.tipos.some(t => p.Tipo?.toLowerCase().includes(t.toLowerCase()))
      )
    }
    if (filtros.recamaras.length > 0) {
      resultado = resultado.filter(p => filtros.recamaras.includes(Number(p.Recamaras)))
    }
    if (filtros.precioMin !== '') {
      resultado = resultado.filter(p => p.Precio >= Number(filtros.precioMin))
    }
    if (filtros.precioMax !== '') {
      resultado = resultado.filter(p => p.Precio <= Number(filtros.precioMax))
    }

    setPropiedadesFiltradas(resultado)
  }, [filtros, todasLasPropiedades])

  const toggleSelection = (categoria: 'ubicaciones' | 'tipos' | 'recamaras', valor: any) => {
    setFiltros(prev => {
      const actual = prev[categoria] as any[]
      const nuevaLista = actual.includes(valor) ? actual.filter(i => i !== valor) : [...actual, valor]
      return { ...prev, [categoria]: nuevaLista }
    })
  }

  const limpiarFiltros = () => setFiltros({
    ubicaciones: [], precioMin: '', precioMax: '', tipos: [], recamaras: [], busqueda: ''
  })

  if (loading) return <div className="p-20 text-center font-serif text-slate-400 italic">Cargando Vive Elit...</div>

  return (
    <main className="min-h-screen bg-white">
      {/* BARRA DE FILTROS - Sticky ajustado al Nav de 80px */}
      <section
        className="border-b border-slate-100 bg-white sticky top-[80px] z-40 shadow-sm"
        ref={filterRef}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap gap-3 items-center">

          {/* Busqueda Texto */}
          <div className="relative flex-1 min-w-[200px] max-w-sm border-r border-slate-100 pr-4 mr-2">
            <input
              type="text"
              placeholder="Buscar por nombre, zona..."
              value={filtros.busqueda}
              onChange={(e) => setFiltros({ ...filtros, busqueda: e.target.value })}
              className="w-full text-sm font-medium text-slate-800 focus:outline-none placeholder-slate-400"
            />
          </div>

          {/* Ubicación */}
          <div className="relative">
            <button onClick={() => setOpenFilter(openFilter === 'ubicacion' ? null : 'ubicacion')}
              className={`px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all ${filtros.ubicaciones.length > 0 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'text-slate-600 hover:border-slate-900'}`}>
              Ubicación {filtros.ubicaciones.length > 0 && `(${filtros.ubicaciones.length})`} ▾
            </button>
            {openFilter === 'ubicacion' && (
              <div className="absolute top-14 left-0 w-64 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-50">
                {['Colima', 'Villa de Álvarez', 'Manzanillo'].map((loc) => (
                  <label key={loc} className="flex items-center gap-3 mb-4 cursor-pointer group">
                    <input type="checkbox" checked={filtros.ubicaciones.includes(loc)} onChange={() => toggleSelection('ubicaciones', loc)} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">{loc}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Tipo */}
          <div className="relative">
            <button onClick={() => setOpenFilter(openFilter === 'tipo' ? null : 'tipo')}
              className={`px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all ${filtros.tipos.length > 0 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'text-slate-600 hover:border-slate-900'}`}>
              Tipo ▾
            </button>
            {openFilter === 'tipo' && (
              <div className="absolute top-14 left-0 w-64 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-50">
                {['Casa', 'Departamento', 'Terreno'].map((t) => (
                  <label key={t} className="flex items-center gap-3 mb-4 cursor-pointer">
                    <input type="checkbox" checked={filtros.tipos.includes(t)} onChange={() => toggleSelection('tipos', t)} className="w-4 h-4 rounded border-slate-300 text-blue-600" />
                    <span className="text-sm text-slate-600 font-medium">{t}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Recámaras */}
          <div className="relative">
            <button onClick={() => setOpenFilter(openFilter === 'recamaras' ? null : 'recamaras')}
              className={`px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all ${filtros.recamaras.length > 0 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'text-slate-600 hover:border-slate-900'}`}>
              Recámaras ▾
            </button>
            {openFilter === 'recamaras' && (
              <div className="absolute top-14 left-0 w-64 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-50">
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button key={num} onClick={() => toggleSelection('recamaras', num)}
                      className={`h-10 rounded-xl border text-xs font-bold transition-all ${filtros.recamaras.includes(num) ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 hover:border-slate-300'}`}>
                      {num === 4 ? '4+' : num}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Presupuesto */}
          <div className="relative">
            <button onClick={() => setOpenFilter(openFilter === 'precio' ? null : 'precio')}
              className="px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:border-slate-900">
              Presupuesto ▾
            </button>
            {openFilter === 'precio' && (
              <div className="absolute top-14 left-0 w-80 bg-white shadow-2xl rounded-2xl p-8 border border-slate-100 z-50">
                <div className="flex gap-4 items-center">
                  <div className="flex-1 text-center">
                    <label className="text-[8px] font-bold text-slate-400 uppercase mb-1 block">Desde</label>
                    <input type="number" value={filtros.precioMin} onChange={(e) => setFiltros({ ...filtros, precioMin: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <label className="text-[8px] font-bold text-slate-400 uppercase mb-1 block">Hasta</label>
                    <input type="number" value={filtros.precioMax} onChange={(e) => setFiltros({ ...filtros, precioMax: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={limpiarFiltros} className="px-5 py-2.5 ml-auto rounded-full bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
            Limpiar Filtros
          </button>
        </div>
      </section>

      {/* LIGHTBOX */}
      {openLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/[0.85] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setOpenLightbox(false)}
        >
          <button
            onClick={() => setOpenLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-white/80 p-2 z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImages[lightboxIndex]}
              alt="Galería"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />

            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(prev => prev === 0 ? lightboxImages.length - 1 : prev - 1);
                  }}
                  className="absolute left-0 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(prev => prev === lightboxImages.length - 1 ? 0 : prev + 1);
                  }}
                  className="absolute right-0 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {lightboxImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${idx === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CATÁLOGO */}
      <section className="max-w-7xl mx-auto p-8 pt-12">
        <p className="mb-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] border-b pb-4">Mostrando {propiedadesFiltradas.length} resultados</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {propiedadesFiltradas.map((p, i) => (
            <CatalogCard
              key={i}
              property={p}
              onImageClick={(images, index) => {
                setLightboxImages(images);
                setLightboxIndex(index);
                setOpenLightbox(true);
              }}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-serif text-slate-400 italic">Cargando...</div>}>
      <CatalogContent />
    </Suspense>
  )
}