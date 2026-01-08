import AdvisorCard from '@/components/AdvisorCard';

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Asesores */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4">Nuestro Equipo</h2>
            <h3 className="text-4xl font-serif text-slate-900">Conozca a nuestros asesores expertos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Claudia Rodríguez",
                photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
                description: "Especialista en propiedades de lujo con más de 10 años de experiencia transformando sueños en hogares.",
                email: "claudia@viveelit.com",
                phone: "+52 312 555 0101",
                whatsapp: "523125550101"
              },
              {
                name: "Roberto Méndez",
                photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
                description: "Arquitecto de formación, apasionado por encontrar el equilibrio perfecto entre diseño y funcionalidad.",
                email: "roberto@viveelit.com",
                phone: "+52 312 555 0102",
                whatsapp: "523125550102"
              },
              {
                name: "Sofía Vargas",
                photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
                description: "Experta en inversiones inmobiliarias y desarrollo de patrimonio familiar a largo plazo.",
                email: "sofia@viveelit.com",
                phone: "+52 312 555 0103",
                whatsapp: "523125550103"
              },
              {
                name: "Alejandro Torres",
                photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
                description: "Consultor senior con un enfoque personalizado, garantizando la mejor experiencia de compra.",
                email: "alejandro@viveelit.com",
                phone: "+52 312 555 0104",
                whatsapp: "523125550104"
              },
              {
                name: "Mariana Silva",
                photoUrl: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?q=80&w=2070&auto=format&fit=crop",
                description: "Dedicada a la excelencia en el servicio, guiando a cada cliente con integridad y transparencia.",
                email: "mariana@viveelit.com",
                phone: "+52 312 555 0105",
                whatsapp: "523125550105"
              }
            ].map((advisor, index) => (
              <AdvisorCard key={index} {...advisor} />
            ))}
          </div>
        </div>
      </section>

      {/* Split Hero */}
      <section className="flex flex-col md:flex-row min-h-[80vh]">
        <div className="flex-1 bg-slate-900 p-12 md:p-24 flex flex-col justify-center text-white">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">Quiénes Somos</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Redefiniendo el lujo inmobiliario.</h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-lg">
            En Vive Elit, entendemos que un hogar no es solo una estructura, es el escenario de su vida. Somos un equipo apasionado por la arquitectura y la excelencia en el servicio.
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