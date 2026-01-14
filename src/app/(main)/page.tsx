'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import PropertyCard from '@/components/PropertyCard'; // We are using a custom card layout for the new home design
import { getSupabase } from '@/lib/supabase';

export default function Inicio() {
  const router = useRouter();
  const [latestProperties, setLatestProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Search States
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

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

        // Fetch latest 4 properties
        const { data, error } = await supabase
          .from('Propiedades')
          .select('*')
          .limit(4);

        if (error) {
          console.error('Error fetching properties for home:', error);
          return;
        }

        if (data) {
          // Helper for case-insensitive comparison
          const normalize = (s: string) => s ? s.toLowerCase().trim() : '';

          // No sorting needed if we just want the latest/default order
          const sortedData = data;

          // Map Supabase data to our UI model
          const mappedData = sortedData.map((p: any, index: number) => ({
            id: p.id || index.toString(),
            title: p.Titulo,
            price: `$${Number(p.Precio).toLocaleString('en-US')}`,
            location: p.Ubicacion,
            specs: `${p.Recamaras} Rec · ${p.WC} Baños`,
            surface: `${p.Superficie || p.Terreno || 0} m²`,
            image: Array.isArray(p.Imagenes) && p.Imagenes.length > 0
              ? p.Imagenes[0]
              : 'https://via.placeholder.com/800x600?text=No+Image',
            tag: index === 0 ? 'Destacado' : (index === 1 ? 'Nuevo' : undefined),
            featured: index === 0 // First item is featured
          }));
          setLatestProperties(mappedData);
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
                <option>Tecomán</option>
                <option>Manzanillo</option>
                <option>Guadalajara</option>
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
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
                  <div key={prop.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4 rounded-sm">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>

                      {/* Hover Action */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                        <span className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                          Ver Propiedad
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-serif text-slate-900 leading-tight mb-1">{prop.title}</h3>
                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 mt-2">
                      <span className="text-slate-500 text-sm font-light">{prop.price}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{prop.surface}</span>
                    </div>
                  </div>
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

      {/* SECTION 4: INTERIORS / DETAILS */}


    </main>
  );
}