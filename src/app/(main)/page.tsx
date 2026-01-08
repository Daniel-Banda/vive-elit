'use client';

import { useState, useEffect } from 'react';
// import PropertyCard from '@/components/PropertyCard'; // We are using a custom card layout for the new home design
import { getSupabase } from '@/lib/supabase';

export default function Inicio() {
  const [latestProperties, setLatestProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProperties = async () => {
      try {
        const supabase = getSupabase();

        // Desired order of properties by Title
        const desiredTitles = [
          'Casa 2',
          'Casa de prueba',
          'Terreno 5',
          'Casa 3',
          'Casa 4'
        ];

        // Fetch specific properties using case-insensitive OR filter
        // Construct filter string: "Titulo.ilike.val1,Titulo.ilike.val2,..."
        const queryFilter = desiredTitles.map(t => `Titulo.ilike.${t}`).join(',');

        const { data, error } = await supabase
          .from('propiedades')
          .select('*')
          .or(queryFilter);

        if (error) {
          console.error('Error fetching properties for home:', error);
          return;
        }

        if (data) {
          // Helper for case-insensitive comparison
          const normalize = (s: string) => s ? s.toLowerCase().trim() : '';

          // Sort data to match desireTitles order exactly (case-insensitive)
          const sortedData = (data as any[]).sort((a, b) => {
            const indexA = desiredTitles.findIndex(t => normalize(t) === normalize(a.Titulo));
            const indexB = desiredTitles.findIndex(t => normalize(t) === normalize(b.Titulo));
            return indexA - indexB;
          });

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
            Premium Real Estate
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter mb-6 animate-fade-in-up delay-100">
            VIVE ELIT
          </h1>
          <p className="text-white/70 max-w-xl text-sm md:text-base font-light leading-relaxed animate-fade-in-up delay-200">
            Curated properties for the discerning few.
            Experience the pinnacle of luxury living in Mexico's most exclusive locations.
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
                placeholder="Playa, Alberca, Vista..."
                className="w-full text-sm font-medium text-slate-800 focus:outline-none placeholder-gray-300"
              />
            </div>

            {/* Input 2: Bedrooms */}
            <div className="flex-1 w-full md:w-auto relative border-r border-gray-100 p-2">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Recámaras</label>
              <select className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent cursor-pointer">
                <option>Cualquiera</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            {/* Input 3: Budget */}
            <div className="flex-1 w-full md:w-auto relative p-2">
              <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Presupuesto</label>
              <select className="w-full text-sm font-medium text-slate-800 focus:outline-none bg-transparent cursor-pointer">
                <option>Cualquiera</option>
                <option>$1M - $2M</option>
                <option>$2M - $5M</option>
                <option>$5M+</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded font-bold uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-colors">
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
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">Catálogo</h2>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>

            {/* Filter Tabs (Visual) */}
            <div className="flex gap-8 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0">
              {['Todos', 'Casas', 'Departamentos', 'Terrenos'].map((tab, i) => (
                <button
                  key={tab}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${i === 0 ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-400 hover:text-slate-900'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
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
                  Ver Todo El Catálogo
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="block text-[10px] font-bold text-white/60 uppercase tracking-[0.4em] mb-6">
            Nuestra Esencia
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Vive Elit no es solo una inmobiliaria, es su socio en la búsqueda de la perfección.
            Combinamos tecnología de vanguardia con un servicio de concierge personalizado
            para encontrar no solo una casa, sino su legado.
          </p>
        </div>
      </section>

      {/* SECTION 4: INTERIORS / DETAILS */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-12">
            Detalles que Inspiran
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[500px]">
            <div className="h-full overflow-hidden rounded-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Interior 1"
              />
            </div>
            <div className="h-full overflow-hidden rounded-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Interior 2"
              />
              {/* Center Text Overlay example */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <span className="text-white font-serif text-3xl italic drop-shadow-lg">Diseño</span>
              </div>
            </div>
            <div className="h-full overflow-hidden rounded-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Interior 3"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 font-light text-sm max-w-2xl mx-auto">
              Cada espacio cuenta una historia. Descubra la suya.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900">Testimonios</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">
                ←
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-10 rounded-xl relative group hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt="User"
                />
                <div>
                  <h4 className="font-bold text-slate-900">Carlos Mendoza</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Inversionista</p>
                </div>
              </div>
              <p className="text-slate-600 font-light leading-relaxed italic">
                "Vive Elit superó todas mis expectativas. Su atención al detalle y conocimiento del mercado de lujo es incomparable. Encontraron la propiedad perfecta para mi portafolio."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-10 rounded-xl relative group hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt="User"
                />
                <div>
                  <h4 className="font-bold text-slate-900">Sofia Alarcón</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Arquitecta</p>
                </div>
              </div>
              <p className="text-slate-600 font-light leading-relaxed italic">
                "Como arquitecta, valoro la calidad y el diseño. El equipo de Vive Elit entiende esto a la perfección. La curaduría de propiedades es exquisita."
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}