export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Split Hero */}
      <section className="flex flex-col md:flex-row min-h-[80vh]">
        <div className="flex-1 bg-slate-900 p-12 md:p-24 flex flex-col justify-center text-white">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">Quiénes Somos</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Redefiniendo el lujo inmobiliario.</h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-lg">
            En ViveElit, entendemos que un hogar no es solo una estructura, es el escenario de su vida. Somos un equipo apasionado por la arquitectura y la excelencia en el servicio.
          </p>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Oficinas de lujo"
          />
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { t: 'Curaduría', d: 'Solo seleccionamos las mejores propiedades en ubicaciones estratégicas.' },
            { t: 'Integridad', d: 'Transparencia absoluta en cada negociación y contrato.' },
            { t: 'Innovación', d: 'Tecnología avanzada para visualizar su hogar antes de entrar.' }
          ].map((v, i) => (
            <div key={i} className="border-l border-slate-100 pl-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.t}</h3>
              <p className="text-slate-500 font-light leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}