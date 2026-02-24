import Link from 'next/link';

interface ProjectReservationCardProps {
    id: string;
    titulo: string;
    ubicacion: string;
    imagen: string;
    descripcion: string;
}

export default function ProjectReservationCard({ id, titulo, ubicacion, imagen, descripcion }: ProjectReservationCardProps) {
    return (
        <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100/50 hover:border-slate-100 flex flex-col relative h-[450px]">
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden w-full">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={imagen}
                    alt={titulo}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    draggable={false}
                />

                {/* Location Badge Removed */}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-20">
                <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {titulo}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {descripcion}
                    </p>
                </div>

                {/* Call to action */}
                <div className="mt-auto pt-4">
                    <Link
                        href={`/guardias/${id}`}
                        className="flex items-center justify-between w-full bg-slate-900 hover:bg-blue-600 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-blue-500/20 group/btn"
                    >
                        <span>Ver Disponibilidad</span>
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
