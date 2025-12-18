'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [todasLasPropiedades, setTodasLasPropiedades] = useState<any[]>([])
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  
  const filterRef = useRef<HTMLDivElement>(null)

  // --- ESTADOS DE LOS FILTROS ---
  const [filtros, setFiltros] = useState({
    ubicaciones: [] as string[],
    precioMin: '50000',
    precioMax: '100000000',
    tipos: [] as string[],
    recamaras: [] as number[]
  })

  // Carga inicial de Supabase
  useEffect(() => {
    const fetchPropiedades = async () => {
      const { data } = await supabase.from('propiedades').select('*')
      if (data) {
        setTodasLasPropiedades(data)
        setPropiedadesFiltradas(data)
      }
      setLoading(false)
    }
    fetchPropiedades()
  }, [])

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
    ubicaciones: [], precioMin: '50000', precioMax: '100000000', tipos: [], recamaras: [] 
  })

  if (loading) return <div className="p-20 text-center font-serif text-slate-400 italic">Cargando ViveElit...</div>

  return (
    <main className="min-h-screen bg-white">
      {/* BARRA DE FILTROS - Sticky ajustado al Nav de 80px */}
      <section 
        className="border-b border-slate-100 bg-white sticky top-[80px] z-40 shadow-sm" 
        ref={filterRef}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap gap-3 items-center">
          
          {/* Ubicación */}
          <div className="relative">
            <button onClick={() => setOpenFilter(openFilter === 'ubicacion' ? null : 'ubicacion')} 
              className={`px-5 py-2.5 rounded-full border text-[11px] font-bold uppercase tracking-wider transition-all ${filtros.ubicaciones.length > 0 ? 'border-blue-600 text-blue-600 bg-blue-50' : 'text-slate-600 hover:border-slate-900'}`}>
              Ubicación {filtros.ubicaciones.length > 0 && `(${filtros.ubicaciones.length})`} ▾
            </button>
            {openFilter === 'ubicacion' && (
              <div className="absolute top-14 left-0 w-64 bg-white shadow-2xl rounded-2xl p-6 border border-slate-100 z-50">
                {['Colima', 'Tecomán', 'Manzanillo', 'Guadalajara'].map((loc) => (
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
                    <input type="number" value={filtros.precioMin} onChange={(e) => setFiltros({...filtros, precioMin: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <label className="text-[8px] font-bold text-slate-400 uppercase mb-1 block">Hasta</label>
                    <input type="number" value={filtros.precioMax} onChange={(e) => setFiltros({...filtros, precioMax: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-800 outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button onClick={limpiarFiltros} className="text-[10px] font-bold uppercase text-blue-600 ml-auto hover:underline transition-all">Limpiar Filtros</button>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="max-w-7xl mx-auto p-8 pt-12">
        <p className="mb-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] border-b pb-4">Mostrando {propiedadesFiltradas.length} resultados</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {propiedadesFiltradas.map((p, i) => {
            const fotos = Array.isArray(p.Imagenes) ? p.Imagenes : [];
            const portada = fotos.length > 0 ? fotos[0] : "https://via.placeholder.com/600x400?text=ViveElit";
            const categorias = p.Tipo ? p.Tipo.split('-') : [];

            return (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={portada} alt={p.Titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-3 left-3 flex gap-1">
                    {categorias.map((cat: string, idx: number) => (
                      <span key={idx} className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-1 rounded uppercase tracking-wider">{cat.trim()}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10">
                    <p className="font-bold text-base tracking-tight">${Number(p.Precio || 0).toLocaleString()}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1 truncate">{p.Titulo}</h3>
                  <p className="text-slate-400 text-[11px] uppercase tracking-widest flex items-center gap-1 mb-4">📍 {p.Ubicacion}</p>
                  <div className="py-3 border-t border-slate-50 flex justify-between items-center text-[11px] text-slate-500 font-medium">
                    <span>🛏️ {p.Recamaras} Rec.</span>
                    <span>🚿 {p.WC} Baños</span>
                    <span>🚗 {p.Parking} Pkg.</span>
                  </div>
                  <button className="w-full mt-4 bg-slate-900 hover:bg-blue-700 text-white text-[11px] font-bold py-3 rounded-xl uppercase tracking-widest transition-colors duration-300">
                    Agenda una visita
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}