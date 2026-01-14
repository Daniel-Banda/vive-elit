'use client';

import { useState } from 'react';

export default function Anunciar() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        ubicacion: 'Colima',
        valor: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hola, quiero anunciar mi propiedad con Vive Elit.
    
*Datos:*
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Ubicación: ${formData.ubicacion}
Valor Estimado: $${formData.valor}`;

        const whatsappUrl = `https://wa.me/523121222277?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-20 px-8 text-center text-white">
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4">Servicio Premium</h2>
                <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Hagamos que se enamoren <br /> de tu propiedad.</h1>
                <p className="max-w-2xl mx-auto text-slate-400 font-light text-lg">Destacamos lo que hace único a tu hogar con una presentación impecable, conectando emocionalmente con el comprador ideal.</p>
            </section>

            {/* Formulario */}
            <section className="max-w-7xl mx-auto -mt-16 px-6 pb-20">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="p-8 md:p-12 pb-0 text-center">
                        <h3 className="text-base font-black text-blue-500 uppercase tracking-widest mb-4">¿Cómo funciona?</h3>
                        <h2 className="text-4xl font-serif text-slate-900 mb-4">Un proceso transparente y efectivo.</h2>
                        <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                            Déjanos tus datos y nos pondremos en contacto para realizar una valoración detallada de tu propiedad.
                            Nuestro equipo se encargará de crear una estrategia de venta personalizada.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Column: Video */}
                        <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center">
                            <div className="relative aspect-[9/16] w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <iframe
                                    src="https://player.vimeo.com/video/1154190385?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="venderpropiedad_v1 (1080p)"
                                />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-4">Datos del Propietario</h3>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        required
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition"
                                    />
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">WhatsApp / Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        required
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-600 transition"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold text-slate-900 border-b pb-4 mb-4">Información del Inmueble</h3>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Ubicación</label>
                                    <select
                                        name="ubicacion"
                                        value={formData.ubicacion}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none"
                                    >
                                        <option value="Colima">Colima</option>
                                        <option value="Manzanillo">Manzanillo</option>
                                        <option value="Guadalajara">Guadalajara</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest block mb-2">Valor Estimado (MXN)</label>
                                    <input
                                        type="number"
                                        name="valor"
                                        value={formData.valor}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none"
                                        placeholder="$ 0.00"
                                    />
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="w-full bg-slate-900 text-white font-bold text-[13px] uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10">
                                        Iniciar Proceso
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
