'use client'

export default function Inicio() {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: HERO - IMPACTO TOTAL */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Imagen de fondo con Overlay oscuro */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
            alt="Mansión de Lujo" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-blue-500 text-[11px] font-black uppercase tracking-[0.6em] mb-6 drop-shadow-md">
            Expertos en Bienes Raíces de Alta Gama
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 italic leading-tight">
            El hogar de sus sueños, <br /> curado por expertos.
          </h1>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a href="/catalogo" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
              Explorar Catálogo
            </a>
            <a href="/anunciar" className="bg-transparent border border-white/30 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all">
              Venda su Propiedad
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-[8px] uppercase tracking-[0.3em] font-bold">Descubrir</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: CATEGORÍAS RÁPIDAS */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Nuestra Selección</h2>
            <h3 className="text-4xl font-serif text-slate-900">Encuentre la excelencia en cada rincón de México.</h3>
          </div>
          <a href="/catalogo" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all">
            Ver todas las propiedades
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Residencias', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070', link: '/catalogo' },
            { title: 'Departamentos', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070', link: '/catalogo' },
            { title: 'Terrenos', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932', link: '/catalogo' }
          ].map((cat, i) => (
            <a href={cat.link} key={i} className="group relative h-[450px] overflow-hidden rounded-3xl">
              <img src={cat.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cat.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white text-2xl font-serif italic mb-2">{cat.title}</h4>
                <p className="text-blue-400 text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                  Explorar Selección →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 3: BANNER DE CONTACTO */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-5xl font-serif mb-8">¿Listo para dar el siguiente paso <br className="hidden md:block" /> hacia su nueva vida?</h2>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto font-light">Agende una consulta privada con uno de nuestros asesores especializados.</p>
              <a href="/contacto" className="inline-block bg-blue-600 text-white px-12 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-all">
                Contactar Ahora
              </a>
            </div>
            {/* Círculo decorativo */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  )
}