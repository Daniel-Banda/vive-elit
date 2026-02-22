import ProjectReservationCard from "@/components/ProjectReservationCard";

const PROJECTS = [
    {
        id: "san-angel",
        titulo: "San Angel",
        ubicacion: "Zona Norte",
        imagen: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        descripcion: "Exclusivo desarrollo residencial con áreas verdes, seguridad 24/7 y amenidades de primera clase. Ideal para familias buscando confort y tranquilidad."
    },
    {
        id: "magisterial-nogueras",
        titulo: "Magisterial Nogueras",
        ubicacion: "Zona Centro",
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        descripcion: "Proyecto residencial de alta plusvalía. Excelente ubicación con acceso rápido a vías principales, centros comerciales y zonas de interés."
    }
];

export default function ReservasDashboard() {
    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <p className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-blue-600/50"></span>
                        Portal de Asesores
                        <span className="w-8 h-[1px] bg-blue-600/50"></span>
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        Sistema de Reservas <br />
                        <span className="italic text-slate-400 font-light">Guardias de Propiedades</span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Selecciona el proyecto de interés para verificar los horarios disponibles y reservar tu próximo turno de guardia.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectReservationCard
                            key={project.id}
                            id={project.id}
                            titulo={project.titulo}
                            ubicacion={project.ubicacion}
                            imagen={project.imagen}
                            descripcion={project.descripcion}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}
