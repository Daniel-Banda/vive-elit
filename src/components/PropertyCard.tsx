import Link from 'next/link';
import Image from 'next/image';

interface PropertyCardProps {
    id: string;
    title: string;
    price: string;
    location: string;
    specs: string;
    image: string;
    tag?: string;
    featured?: boolean;
    surface?: string;
}

export default function PropertyCard({ id, title, price, location, specs, image, tag, featured, surface }: PropertyCardProps) {
    return (
        <Link href={`/propiedades/${id}`} className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col ${featured ? 'h-full' : 'h-full'}`}>

            {/* Image Container */}
            <div className={`relative w-full overflow-hidden ${featured ? 'flex-grow min-h-[300px]' : 'h-64'}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Tag (Top Left) - Matches Catalog Logic */}
                {tag && (
                    <div className="absolute top-3 left-3 flex gap-1">
                        <span className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-1 rounded uppercase tracking-wider">
                            {tag}
                        </span>
                    </div>
                )}

                {/* Price (Bottom Left) - Matches Catalog Logic */}
                <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10">
                    <p className="font-bold text-base tracking-tight">{price}</p>
                </div>

                {/* Surface Area (Bottom Right) - Requested Feature */}
                {surface && (
                    <div className="absolute bottom-3 right-3 z-10">
                        <span className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-semibold px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                            {surface}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container - Matches Catalog Logic (White bg, Slate text) */}
            <div className="p-5 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1 truncate">
                    {title}
                </h3>
                <p className="text-slate-400 text-[11px] uppercase tracking-widest flex items-center gap-1 mb-4">
                    📍 {location}
                </p>

                <div className="py-3 border-t border-slate-50 flex justify-between items-center text-[11px] text-slate-500 font-medium">
                    <span>{specs}</span>
                    {/* Arrow or Action used in Catalog? Catalog has a full width button. 
                       Here, we are a Card preview. I'll prefer a subtle "Ver más" or just the specs.
                       Catalog card has "Agenda una visita" button. 
                       I will keep it simple as a card preview, but maybe add the arrow back?
                       The user said "Usa el formato... de las tarjetas".
                       The Catalog card HAS a button "Agenda una visita".
                       I will stick to just the info layout for the preview Grid to avoid clutter, 
                       or add a text link "Ver Detalles ->"
                   */}
                    <span className="group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                        Ver Propiedad →
                    </span>
                </div>
            </div>
        </Link>
    );
}
