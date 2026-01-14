'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CatalogCard from '@/components/CatalogCard';
import { getSupabase } from '@/lib/supabase';

export default function Inicio() {
  const router = useRouter();
  const [latestProperties, setLatestProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  // Lightbox State
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append('term', searchTerm);
    if (location && location !== 'Cualquiera') params.append('ubicacion', location);

    if (budget && budget !== 'Cualquiera') {
      if (budget === '$0 - $1M') {
        params.append('minPrice', '0');
        params.append('maxPrice', '1000000');
      } else if (budget === '$1M - $2M') {
        params.append('minPrice', '1000000');
        params.append('maxPrice', '2000000');
      } else if (budget === '$2M - $5M') {
        params.append('minPrice', '2000000');
        params.append('maxPrice', '5000000');
      } else if (budget === '+$5M') {
        params.append('minPrice', '5000000');
      }
    }

    router.push(`/catalogo?${params.toString()}`);
  }

  useEffect(() => {
    const fetchLatestProperties = async () => {
      try {
        const supabase = getSupabase();

        // Fetch specific properties for "Colección Exclusiva"
        const { data, error } = await supabase
          .from('Propiedades')
          .select('*')
          .in('ID', [1, 2, 3, 4]);

        if (error) {
          console.error('Error fetching properties for home:', error);
          return;
        }

        if (data) {
          // Enforce specific order: 2, 1, 3, 4
          const order = [2, 1, 3, 4];
          const sortedData = data.sort((a: any, b: any) => {
            return order.indexOf(a.ID) - order.indexOf(b.ID);
          });

          setLatestProperties(sortedData);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProperties();
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* SECTION 1: HERO - Dark & Immersive */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="Luxury Home"
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <p className="text-white/80 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            Grupo Inmobiliario
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-6 animate-fade-in-up delay-100">
            VIVE ELIT
          </h1>
          <p className="text-white/70 max-w-xl text-sm md:text-base font-light leading-relaxed animate-fade-in-up delay-200">
            Propiedades seleccionadas para un estilo de vida excepcional.
            Experimenta la cima del lujo en las ubicaciones más exclusivas.
          </p>
        </div>

        {/* Search Bar / Filter - Floating at Bottom */}
        <div className="absolute bottom-12 left-0 right-0 z-20 px-4 md:px-0 animate-fade-in-up delay-300">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">

            {/* Input 1: Keywords */}
            <div className="flex-1 w-full md:w-auto relative border-r border-gray-100 p-2">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Busqueda</label>
              <input
                type="text"
                placeholder="Casa, Terreno..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 focus:outline-none placeholder-gray-300"
              />
            </div>

            {/* Input 2: Location */}
            <div className="flex-1 w-full md:w-auto relative border-r border-gray-100 p-2">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Ubicación</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent cursor-pointer"
              >
                <option>Cualquiera</option>
                <option>Colima</option>
                <option>Villa de Álvarez</option>
                <option>Manzanillo</option>
              </select>
            </div>

            {/* Input 3: Budget */}
            <div className="flex-1 w-full md:w-auto relative p-2">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Presupuesto</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent cursor-pointer"
              >
                <option>Cualquiera</option>
                <option>$0 - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M - $5M</option>
                <option>+$5M</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded font-bold uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors"
            >
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: CATALOG / PROPERTIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">Colección Exclusiva</h2>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>

            {/* Filter Tabs Removed as requested */}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="h-64 flex items-center justify-center text-slate-400 font-serif italic">
              Cargando colección...
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {latestProperties.map((prop) => (
                  <CatalogCard
                    key={prop.id || prop.ID}
                    property={prop}
                    onImageClick={(images, index) => {
                      setLightboxImages(images);
                      setLightboxIndex(index);
                      setOpenLightbox(true);
                    }}
                  />
                ))}
              </div>

              <div className="mt-16 text-center">
                <a href="/catalogo" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors">
                  Ver Toda La Colección
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* SECTION 3: ABOUT US (Immersive Dark) */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
          <span className="block text-[10px] font-bold text-white/60 uppercase tracking-[0.4em] mb-6">
            Nuestra Esencia
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-3xl leading-relaxed mb-12 text-justify">
            Tu patrimonio merece una gestión inteligente. En Vive Elit, simplificamos el mercado inmobiliario combinando tecnología y atención personal para eliminar complicaciones.
            <br /><br />
            Nuestro compromiso es claro: si quieres vender, damos visibilidad real a tu inmueble; si buscas invertir, te damos la claridad necesaria para decidir con seguridad; y si buscas vivir, seleccionamos opciones que encajen con lo que de verdad importa para ti. Menos fricción, mejores resultados.
          </p>
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

    </main>
  );
}