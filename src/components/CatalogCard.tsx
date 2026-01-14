'use client';

import { useState } from 'react';

interface Property {
    Titulo: string;
    Ubicacion: string;
    Precio: number;
    Recamaras: number;
    WC: number;
    Parking: number;
    Imagenes: string[];
    Superficie?: number;
    Terreno?: number;
    Tipo?: string;
    Construccion?: number;
}

interface CatalogCardProps {
    property: Property;
    onImageClick: (images: string[], startIndex: number) => void;
}

export default function CatalogCard({ property, onImageClick }: CatalogCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fotos = Array.isArray(property.Imagenes) && property.Imagenes.length > 0
        ? property.Imagenes
        : ["https://via.placeholder.com/600x400?text=Vive+Elit"];

    const categorias = property.Tipo ? property.Tipo.split('-') : [];

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
            <div className="relative h-64 overflow-hidden group/image">
                {/* Image */}
                <img
                    src={fotos[currentImageIndex]}
                    alt={property.Titulo}
                    className="w-full h-full object-cover transition-transform duration-1000 cursor-pointer"
                    onClick={() => onImageClick(fotos, currentImageIndex)}
                />

                {/* Carousel Controls */}
                {fotos.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                            {fotos.slice(0, 5).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Categories Badge */}
                <div className="absolute top-3 left-3 flex gap-1 pointer-events-none">
                    {categorias.map((cat: string, idx: number) => (
                        <span key={idx} className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-1 rounded uppercase tracking-wider">{cat.trim()}</span>
                    ))}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
                    <p className="font-bold text-base tracking-tight">${Number(property.Precio || 0).toLocaleString('en-US')}</p>
                </div>

                {/* Surface Badge */}
                {(property.Superficie || property.Terreno) && (
                    <div className="absolute bottom-3 right-3 pointer-events-none">
                        <span className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-semibold px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                            {property.Superficie || property.Terreno} m²
                        </span>
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1 truncate">{property.Titulo}</h3>
                <p className="text-slate-400 text-[11px] uppercase tracking-widest flex items-center gap-1 mb-4">📍 {property.Ubicacion}</p>
                <div className="py-3 border-t border-slate-50 flex flex-wrap justify-between items-center text-[11px] text-slate-500 font-medium gap-y-2">
                    <span>🛏️ {property.Recamaras} Rec.</span>
                    <span>🚿 {property.WC} Baños</span>
                    <span>🚗 {property.Parking} Pkg.</span>
                    {property.Construccion && <span>🏗️ {property.Construccion} m²</span>}
                </div>
                <button className="w-full mt-4 bg-slate-900 hover:bg-blue-700 text-white text-[11px] font-bold py-3 rounded-xl uppercase tracking-widest transition-colors duration-300">
                    Agenda una visita
                </button>
            </div>
        </div>
    );
}
