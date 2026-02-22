import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, this would come from a database or CMS.
// We are hardcoding the available projects for now.
const PROJECTS = [
    {
        id: "san-angel",
        titulo: "San Angel",
        ubicacion: "Zona Norte",
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        descripcion: "Exclusivo desarrollo residencial con áreas verdes, seguridad 24/7 y amenidades de primera clase. Ideal para familias buscando confort y tranquilidad.",
        calendarUrl: "https://calendar.app.google/3dthuck1woww2o7v9"
    },
    {
        id: "magisterial-nogueras",
        titulo: "Magisterial Nogueras",
        ubicacion: "Zona Centro",
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        descripcion: "Proyecto residencial de alta plusvalía. Excelente ubicación con acceso rápido a vías principales, centros comerciales y zonas de interés."
    }
];

export default async function ProjectReservationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[400px] w-full">
                <div className="absolute inset-0 bg-slate-900/60 z-10" />
                <img
                    src={project.imagen}
                    alt={project.titulo}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                        {project.ubicacion}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        {project.titulo}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light drop-shadow-md">
                        {project.descripcion}
                    </p>
                </div>
            </div>

            {/* Container */}
            <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-30">
                <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-100">

                    {/* Header Controls */}
                    <div className="mb-10 flex flex-col sm:flex-row items-center justify-between border-b border-slate-100 pb-8 gap-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-slate-900">Reservar Guardia</h2>
                            <p className="text-slate-500 text-sm mt-1">Selecciona la fecha y hora disponible para el proyecto {project.titulo}.</p>
                        </div>
                        <Link
                            href="/reservas"
                            className="text-slate-500 hover:text-blue-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors px-6 py-3 bg-slate-50 rounded-xl hover:bg-blue-50 shrink-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Volver al Dashboard
                        </Link>
                    </div>

                    {/* Formulario/Integración de Sistema de Reservas */}
                    {project.calendarUrl ? (
                        <div className="w-full h-[700px] md:h-[800px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-white relative">
                            {/* Loading State Overlay (Optional, but good for UX while iframe loads) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                    <p className="text-sm font-medium text-slate-500">Cargando calendario...</p>
                                </div>
                            </div>
                            <iframe
                                src={project.calendarUrl}
                                className="w-full h-full border-none relative z-10"
                                title={`Reserva para ${project.titulo}`}
                            ></iframe>
                        </div>
                    ) : (
                        <div className="w-full h-[400px] flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
                            <p>Sistema de reservas próximo a implementarse.</p>
                        </div>
                    )}

                    <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-sm text-blue-800 flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <div>
                            <span className="font-bold mb-1 block">Importante:</span>
                            Al agendar tu turno, recibirás un correo de confirmación con los detalles, y se enviará una notificación a la administración. Si necesitas cancelar, por favor hazlo con al menos 24 horas de antelación utilizando el enlace en tu correo.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
