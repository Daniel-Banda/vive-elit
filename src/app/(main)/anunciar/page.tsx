import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata = {
    title: "Anuncia tu Propiedad | Vive Elit",
    description: "Confía en los expertos para la venta de tu propiedad inmobiliaria.",
};

export default function AnunciarPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">
                        Vende con Nosotros
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                        Anuncia tu Propiedad
                    </h1>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
                        Permítenos ayudarte a encontrar el comprador ideal. Nuestra estrategia de marketing y red de contactos garantizan la mejor exposición para tu inmueble.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Video */}
                    <div className="space-y-8">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            <iframe
                                src="https://player.vimeo.com/video/1151781493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                className="absolute top-0 left-0 w-full h-full"
                                title="VIVE ELIT"
                            ></iframe>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="font-serif text-2xl text-slate-900 mb-4">¿Por qué elegir Vive Elit?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Valoración Profesional</h4>
                                        <p className="text-slate-600 text-sm font-light">Analizamos el mercado para definir el precio correcto.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Marketing Premium</h4>
                                        <p className="text-slate-600 text-sm font-light">Fotografía profesional, video y campañas dirigidas.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Gestión Integral</h4>
                                        <p className="text-slate-600 text-sm font-light">Nos encargamos de todo el proceso legal y administrativo.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:pl-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 sticky top-32">
                            <WhatsAppForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
