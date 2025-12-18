export default function Contacto() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          {/* Info */}
          <div className="md:w-1/3 bg-slate-900 p-12 text-white">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-12">Contacto</h2>
            <div className="space-y-12">
              <div>
                <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mb-2">Oficina Central</p>
                <p className="font-serif text-xl italic">Av. Constitución 1234, <br/> Colima, México.</p>
              </div>
              <div>
                <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mb-2">Atención Directa</p>
                <p className="text-2xl font-bold">+52 312 000 0000</p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="flex-1 p-12 md:p-20">
            <h1 className="text-4xl font-serif text-slate-900 mb-8">¿En qué podemos <br/> asistirle hoy?</h1>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre" className="w-full border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition" />
                <input type="email" placeholder="Correo electrónico" className="w-full border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition" />
              </div>
              <textarea placeholder="Mensaje" rows={4} className="w-full border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition"></textarea>
              <button className="bg-slate-900 text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all mt-8">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}