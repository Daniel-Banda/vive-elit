export default function Anunciar() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-20 px-8 text-center text-white">
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4">Servicio Premium</h2>
                <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Su propiedad merece <br /> una audiencia global.</h1>
                <p className="max-w-2xl mx-auto text-slate-400 font-light text-lg">Utilizamos marketing de alta gama y fotografía cinematográfica para posicionar su inmueble ante los compradores más exigentes.</p>
            </section>

            {/* Formulario */}
            <section className="max-w-7xl mx-auto -mt-16 px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="p-8 md:p-12 pb-0 text-center">
                        <h3 className="text-base font-black text-blue-500 uppercase tracking-widest mb-4">¿Cómo funciona?</h3>
                        <h2 className="text-4xl font-serif text-slate-900 mb-4">Un proceso transparente y efectivo.</h2>
                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                            Déjenos sus datos y nos pondremos en contacto para realizar una valoración detallada de su propiedad.
                            Nuestro equipo se encargará de crear una estrategia de venta personalizada.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Column: Video */}
                        <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center">
                            <div className="relative aspect-[9/16] w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <iframe
                                    src="https://player.vimeo.com/video/1151781493?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&title=0&byline=0&portrait=0"
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="VenderPropiedad"
                                />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="p-8 md:p-12">
                            <form className="grid grid-cols-1 gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-4">Datos del Propietario</h3>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Nombre Completo</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition" />
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">WhatsApp / Teléfono</label>
                                    <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition" />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-4">Información del Inmueble</h3>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Ubicación</label>
                                    <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none">
                                        <option>Colima</option>
                                        <option>Manzanillo</option>
                                        <option>Guadalajara</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Valor Estimado (MXN)</label>
                                    <input type="number" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none" placeholder="$ 0.00" />
                                </div>
                                <div className="mt-4">
                                    <button className="w-full bg-slate-900 text-white font-bold text-[13px] uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10">
                                        Iniciar Proceso
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
