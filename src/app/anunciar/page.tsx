export default function Anunciar() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-20 px-8 text-center text-white">
        <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4">Servicio Premium</h2>
        <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Su propiedad merece <br/> una audiencia global.</h1>
        <p className="max-w-2xl mx-auto text-slate-400 font-light text-lg">Utilizamos marketing de alta gama y fotografía cinematográfica para posicionar su inmueble ante los compradores más exigentes.</p>
      </section>

      {/* Formulario */}
      <section className="max-w-4xl mx-auto -mt-16 px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 border-b pb-4 mb-4">Datos del Propietario</h3>
            </div>
            <div>
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-2">Nombre Completo</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition" />
            </div>
            <div>
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-2">WhatsApp / Teléfono</label>
              <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition" />
            </div>
            <div className="md:col-span-2 mt-4">
              <h3 className="text-xl font-bold text-slate-900 border-b pb-4 mb-4">Información del Inmueble</h3>
            </div>
            <div>
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-2">Ubicación</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none">
                <option>Colima</option>
                <option>Manzanillo</option>
                <option>Guadalajara</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block mb-2">Valor Estimado (MXN)</label>
              <input type="number" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none" placeholder="$ 0.00" />
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-slate-900 text-white font-bold text-[11px] uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10">
                Iniciar Proceso de Selección
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}