import Link from "next/link";
import { notFound } from "next/navigation";
import CalendarEmbed from "@/components/CalendarEmbed";

// In a real app, this would come from a database or CMS.
// We are hardcoding the available projects for now.
const PROJECTS = [
    {
        id: "san-angel",
        titulo: "San Angel",
        ubicacion: "Zona Norte",
        imagen: "https://res.cloudinary.com/daxglaqjg/image/upload/v1771799715/Sin_ti%CC%81tulo-1_iydwaa.jpg",
        descripcion: "Exclusivo desarrollo residencial con áreas verdes, seguridad 24/7 y amenidades de primera clase. La guardia se divide en 2 turnos: el primero de 9:00am a 2:00pm y el segundo de 2:00pm a 7:00pm.",
        calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10qo9TgBuK854gDLpC0Kqk6_oZDolq0bycOBkRDk-sEEFf64ky40D7_4zMwVkDc95Q1h5LOsqi?gv=true"
    },
    {
        id: "magisterial-nogueras",
        titulo: "Magisterial Nogueras",
        ubicacion: "Zona Centro",
        imagen: "https://res.cloudinary.com/daxglaqjg/image/upload/v1771799891/Plano_komamz.jpg",
        descripcion: "Proyecto residencial de alta plusvalía. La guardia se divide en 2 turnos: el primero de 9:00am a 1:30pm y el segundo de 1:30pm a 6:00pm.",
        calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3cjW7reKEGvafeiYPDc052fyoC9ofGTWR2EW546w63ytvqNAwOyJzT7U2w4abVBNXU9C4K1BcZ?gv=true"
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
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        {project.titulo}
                    </h1>
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
                            <div className="mt-4 bg-blue-50/80 p-4 rounded-xl border border-blue-100/50">
                                <p className="text-blue-900 text-sm leading-relaxed">{project.descripcion}</p>
                            </div>
                        </div>
                        <Link
                            href="/guardias"
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
                        <CalendarEmbed
                            url={project.calendarUrl}
                            title={`Reserva para ${project.titulo}`}
                        />
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
