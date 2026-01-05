'use client';

import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
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
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO RENOVADO */}
      <section className="relative h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="Fondo Hero"
            className="w-full h-full object-cover opacity-20 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-black"></div>
              <span className="text-black text-[10px] font-bold uppercase tracking-[0.4em]">
                Bienvenido a Vive Elit
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-black leading-[1.1] mb-8">
              Redefiniendo el <br />
              <span className="italic text-black/60">lujo moderno.</span>
            </h1>
            <p className="text-black text-sm md:text-base leading-relaxed max-w-lg mb-12 font-light">
              Descubra una colección curada de las propiedades más extraordinarias de México.
              Donde la arquitectura se encuentra con la exclusividad.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="/catalogo" className="bg-black text-white px-8 py-4 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-elite-gold transition-all shadow-xl">
                Ver Colección
              </a>
              <a href="/contacto" className="border border-black text-black px-8 py-4 rounded-sm font-bold uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ÚLTIMAS 5 PROPIEDADES (Dynamic) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Nuevas Adiciones
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-elite-navy">
              Recién llegadas al mercado
            </h3>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="h-64 flex items-center justify-center text-elite-navy font-serif italic text-xl">
              Cargando últimas propiedades...
            </div>
          )}

          {/* Data Grid */}
          {!loading && latestProperties.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
              {/* Main Featured Item (Takes 6 cols) */}
              <div className="lg:col-span-6 h-[500px] lg:h-full">
                <PropertyCard {...latestProperties[0]} />
              </div>

              {/* Grid of 4 Items (Takes 6 cols) */}
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestProperties.slice(1, 5).map((prop) => (
                  <PropertyCard key={prop.id} {...prop} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && latestProperties.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              No hay propiedades destacadas en este momento.
            </div>
          )}

          <div className="mt-16 text-center">
            <a href="/catalogo" className="inline-block border-b border-elite-navy/30 pb-1 text-elite-navy text-[10px] font-bold uppercase tracking-widest hover:text-elite-gold hover:border-elite-gold transition-colors">
              Ver todas las propiedades disponibles
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICIOS DE EXCELENCIA (High Contrast: Navy Background) */}
      {/* SECTION 3: SERVICIOS DE EXCELENCIA (Light theme) */}
      <section className="bg-slate-50 py-24 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
            <div className="max-w-xl">
              <h2 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Experiencia Integral
              </h2>
              <h3 className="text-4xl font-serif text-black">
                Más que una inmobiliaria, <br /> sus socios estratégicos.
              </h3>
            </div>
            <p className="text-black text-sm max-w-xs mt-6 md:mt-0 font-light">
              Ofrecemos un ecosistema de servicios diseñados para proteger y maximizar su patrimonio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Valuación de Mercado",
                desc: "Análisis financiero detallado y comparativas globales para determinar el valor real de su activo.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                )
              },
              {
                title: "Asesoría Legal Premium",
                desc: "Gestión jurídica impecable para garantizar transacciones seguras, discretas y eficientes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                )
              },
              {
                title: "Concierge Inmobiliario",
                desc: "Desde diseño de interiores hasta administración de propiedades, nos encargamos de cada detalle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-black/5 bg-white hover:bg-white hover:shadow-xl transition-all rounded-xl">
                <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif text-black mb-4">{service.title}</h4>
                <p className="text-black font-light text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NUESTRA FILOSOFÍA (Light Background) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div className="order-2 md:order-1">
              <h2 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Nuestra Filosofía
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
                No vendemos propiedades, <br /><span className="text-black italic">curamos estilos de vida.</span>
              </h3>
              <div className="flex flex-col gap-6 text-black font-light leading-relaxed">
                <p>
                  En Vive Elit, entendemos que adquirir una propiedad de lujo es una decisión emocional tanto como financiera. Es la búsqueda de un espacio que resuene con quienes somos y quienes aspiramos a ser.
                </p>
                <p>
                  Cada residencia en nuestro portafolio ha sido seleccionada meticulosamente bajo estrictos criterios de excelencia arquitectónica, ubicación privilegiada y potencial de plusvalía.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 flex gap-12">
                <div>
                  <h4 className="text-3xl font-serif text-elite-navy mb-1">15+</h4>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Años de Expertís</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-elite-navy mb-1">$200M+</h4>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">En Ventas</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-elite-navy mb-1">500+</h4>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Clientes Felices</p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[600px] order-1 md:order-2 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574"
                alt="Interior de Lujo Filosofía"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/20 rounded-[1.5rem] pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACTO */}
      <section className="bg-white py-24 border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-black mb-6">
            La llave a su próximo capítulo.
          </h2>
          <p className="text-black mb-8 font-light max-w-lg mx-auto">
            Nuestro equipo de expertos está listo para guiarlo en cada paso de su inversión inmobiliaria.
          </p>
          <a href="/contacto" className="inline-block bg-black text-white px-10 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-elite-gold hover:text-white transition-all">
            Contactar Asesor
          </a>
        </div>
      </section>
    </main>
  );
}