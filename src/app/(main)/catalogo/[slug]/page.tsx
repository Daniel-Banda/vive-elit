'use client';

import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';
import { slugify } from '@/lib/utils';
import { useParams } from 'next/navigation';
import CatalogCard from '@/components/CatalogCard';
import propertiesData from '@/data/propiedadesDetails.json';
import {
    BedDouble,
    Bath,
    Car,
    Store,
    Tv,
    Sofa,
    Monitor,
    Flower2,
    Utensils,
    Box,
    Wind,
    MessageCircle,
    ChevronLeft,
    ChevronRight,
    Ruler,
    CheckCircle2
} from 'lucide-react';

export default function PropiedadPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [property, setProperty] = useState<any>(null);
    const [randomProperties, setRandomProperties] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Lightbox State
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Gallery Slider State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!slug) return;

            try {
                const supabase = getSupabase();

                // Fetch all properties to match by slug locally since we don't have a slug column
                const { data: allData, error: allError } = await supabase
                    .from('Propiedades')
                    .select('*');

                if (allError) {
                    console.error('Error fetching properties:', JSON.stringify(allError, null, 2));
                    return;
                }

                if (allData) {
                    // Match by slugified title
                    const matchedProperty: any = allData.find((p: any) => slugify(p.Titulo) === slug);

                    if (matchedProperty) {
                        setProperty(matchedProperty);

                        // Fetch other properties for recommendations
                        const otherProperties = allData.filter((p: any) => p.ID !== matchedProperty.ID);
                        const shuffled = [...otherProperties].sort(() => 0.5 - Math.random());
                        setRandomProperties(shuffled.slice(0, 3));
                    }
                }

            } catch (err) {
                console.error('Supabase error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyData();
    }, [slug]);

    const imagenes = property?.Imagenes || [];
    const heroImage = imagenes.length > 0 ? imagenes[0] : "https://res.cloudinary.com/daxglaqjg/image/upload/v1768366125/IMG_6187_qf4jud.jpg";

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    const openWhatsApp = () => {
        const title = property?.Titulo || 'la propiedad';
        const message = `Hola, me interesa información sobre ${title}`;
        window.open(`https://wa.me/523121222277?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (loading) {
        return <div className="min-h-screen font-serif flex items-center justify-center text-slate-400 italic">Cargando Vive Elit...</div>;
    }

    if (!property) {
        return <div className="min-h-screen font-serif flex items-center justify-center text-slate-400 italic">Propiedad no encontrada.</div>;
    }

    const priceFormatted = Number(property.Precio || 0).toLocaleString('en-US');

    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[40vh] min-h-[350px] flex items-end pb-12 mb-12">
                <div className="absolute inset-0 z-0 bg-slate-200">
                    <img
                        src={heroImage}
                        alt={`${property.Titulo} Hero`}
                        className="w-full h-full object-cover"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4 text-white">
                    <div>
                        <span className="inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-sm">
                            {property.Tipo || 'Casa en Venta'}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 drop-shadow-lg">
                            {property.Titulo}
                        </h1>
                        <p className="text-white/90 flex items-center gap-2 text-sm uppercase tracking-widest drop-shadow-md">
                            📍 {property.Ubicacion || 'Ubicación no especificada'}
                        </p>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                        <p className="text-sm font-bold uppercase tracking-widest text-white/80 mb-1 drop-shadow">Precio</p>
                        <p className="text-4xl font-serif font-bold drop-shadow-lg">${priceFormatted} <span className="text-lg text-white/80 font-normal">MXN</span></p>
                    </div>
                </div>
            </section>

            {/* CENTRALIZED CONTAINER (SINGLE COLUMN) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 2. GALLERY SLIDER */}
                <section className="mb-12">
                    <div className="relative group w-full">
                        <div
                            className="aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl relative cursor-zoom-in group/image bg-slate-200"
                            onDoubleClick={() => {
                                setLightboxIndex(currentImageIndex);
                                setOpenLightbox(true);
                            }}
                        >
                            <img
                                src={imagenes[currentImageIndex]}
                                alt={`Galería ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                            />

                            {/* Controls */}
                            {imagenes.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/image:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover/image:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                                    {currentImageIndex + 1} / {imagenes.length}
                                </span>
                            </div>
                        </div>
                        {/* Thumbnails row under main image */}
                        {imagenes.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                                {imagenes.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`h-20 sm:h-24 aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${idx === currentImageIndex ? 'border-blue-600 shadow-md scale-100' : 'border-transparent opacity-60 hover:opacity-100 scale-95 hover:scale-100'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* 3. QUICK SPECS GRID */}
                <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {property.Recamaras && (
                            <div className="flex flex-col items-center text-center justify-center p-2">
                                <BedDouble className="text-slate-400 mb-3" size={32} strokeWidth={1.5} />
                                <p className="text-2xl font-serif text-slate-900 font-bold">{property.Recamaras}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Recámaras</p>
                            </div>
                        )}
                        {property.WC && (
                            <div className="flex flex-col items-center text-center justify-center p-2 pt-6 md:pt-2">
                                <Bath className="text-slate-400 mb-3" size={32} strokeWidth={1.5} />
                                <p className="text-2xl font-serif text-slate-900 font-bold">{property.WC}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Baños</p>
                            </div>
                        )}
                        {property.Parking && (
                            <div className="flex flex-col items-center text-center justify-center p-2 pt-6 md:pt-2">
                                <Car className="text-slate-400 mb-3" size={32} strokeWidth={1.5} />
                                <p className="text-2xl font-serif text-slate-900 font-bold">{property.Parking}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Cochera</p>
                            </div>
                        )}
                        {(property.Construccion || property.Superficie) && (
                            <div className="flex flex-col items-center text-center justify-center p-2 pt-6 md:pt-2">
                                <Ruler className="text-slate-400 mb-3" size={32} strokeWidth={1.5} />
                                <p className="text-2xl font-serif text-slate-900 font-bold">{property.Construccion || property.Superficie} <span className="text-sm">m²</span></p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Medidas</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. DESCRIPTION & DETAILS (Reference Style) */}
                <div className="mb-12 border-t border-slate-200">

                    {/* Technical Details (Detalles) */}
                    <section className="py-8 sm:py-12 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-xl font-medium text-slate-800">Detalles</h2>
                            </div>
                            <div className="w-full md:w-3/4">
                                <ul className="space-y-3 text-slate-700 text-[15px]">
                                    <li><span className="text-slate-500 mr-1">Tipo:</span> <span className="font-medium">{property.Tipo || 'Casa'}</span></li>
                                    {property.Recamaras && <li><span className="text-slate-500 mr-1">Recámaras:</span> <span className="font-medium">{property.Recamaras} recámaras</span></li>}
                                    {property.WC && <li><span className="text-slate-500 mr-1">Baños:</span> <span className="font-medium">{property.WC}</span></li>}
                                    {property.Parking && <li><span className="text-slate-500 mr-1">Estacionamiento:</span> <span className="font-medium">{property.Parking} autos</span></li>}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Description Block */}
                    <section className="py-8 sm:py-12 border-b border-slate-200">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-xl font-medium text-slate-800">Descripción</h2>
                            </div>
                            <div className="w-full md:w-3/4">
                                <div className="text-slate-700 text-[15px] leading-relaxed space-y-6">
                                    {(propertiesData as any)[property?.ID]?.descripcion ? (
                                        <div className="whitespace-pre-line">
                                            {(propertiesData as any)[property?.ID].descripcion}
                                        </div>
                                    ) : (
                                        <p>
                                            Disfruta de amplitud y estilo con esta increíble propiedad. Ideal tanto para residencia privada como para inversión, asegurando plusvalía y diseño de alta calidad en {property.Ubicacion || 'una excelente ubicación'}.
                                        </p>
                                    )}

                                    <div>
                                        {property.Superficie && <p>Terreno: {property.Superficie} m²</p>}
                                        {property.Construccion && <p>Construcción: {property.Construccion} m²</p>}
                                    </div>

                                    <div>
                                        <p className="mb-4">Características Principales:</p>
                                        <ul className="space-y-1">
                                            {(propertiesData as any)[property?.ID]?.caracteristicas ? (
                                                (propertiesData as any)[property?.ID].caracteristicas.map((caracteristica: string, index: number) => (
                                                    <li key={index}>- {caracteristica}</li>
                                                ))
                                            ) : (
                                                <>
                                                    {property.Recamaras && <li>- {property.Recamaras} recámaras amplias</li>}
                                                    {property.WC && <li>- {property.WC} baños equipados</li>}
                                                    {property.Parking && <li>- Cochera para {property.Parking} autos</li>}
                                                    <li>- Cocina integral</li>
                                                    <li>- Sala comedor</li>
                                                    <li>- Patio de servicio</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Amenities (Amenidades) */}
                    <section className="py-8 sm:py-12">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className="w-full md:w-1/4">
                                <h2 className="text-xl font-medium text-slate-800">Amenidades</h2>
                            </div>
                            <div className="w-full md:w-3/4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-slate-700 text-[15px]">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-slate-400" size={16} />
                                        <span>Excelente Plusvalía</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-slate-400" size={16} />
                                        <span>Diseño Moderno</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-slate-400" size={16} />
                                        <span>Acabados de calidad</span>
                                    </div>
                                    {property.Parking > 0 && (
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="text-slate-400" size={16} />
                                            <span>Facilidad para estacionarse</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* GOOGLE MAPS STREET VIEW EMBED */}
                {(propertiesData as any)[property?.ID]?.mapa && (
                    <section className="mb-12 rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-[60vh] min-h-[400px]">
                        <iframe
                            src={(propertiesData as any)[property?.ID].mapa}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Street View"
                        ></iframe>
                    </section>
                )}

                {/* 5. ACTION BUTTONS (No form) */}
                <section className="bg-slate-900 rounded-3xl p-10 sm:p-14 text-center shadow-xl mb-12 flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mb-4">
                        ¿Te interesa esta propiedad?
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Ponte en contacto con nuestro equipo de asesores para agendar una visita guiada o solicitar más información sobre {property.Titulo}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                        <button
                            onClick={openWhatsApp}
                            className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/20"
                        >
                            <MessageCircle size={18} />
                            Contactar por WhatsApp
                        </button>
                    </div>
                </section>

                {/* 6. RECOMMENDED PROPERTIES */}
                {randomProperties.length > 0 && (
                    <section className="mb-12 border-t border-slate-200 pt-16">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h3 className="text-2xl font-serif text-slate-900 font-bold mb-2">
                                    Otras propiedades que podrían interesarte
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    Descubre más opciones diseñadas para tu estilo de vida
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {randomProperties.map((p, i) => (
                                <CatalogCard
                                    key={i}
                                    property={p}
                                    onImageClick={(images, index) => {
                                        setLightboxIndex(index);
                                        setOpenLightbox(true);
                                    }}
                                />
                            ))}
                        </div>
                    </section>
                )}

            </div>

            {/* LIGHTBOX OVERLAY (Kept for full-screen viewing) */}
            {openLightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/[0.95] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setOpenLightbox(false)}
                >
                    <button
                        onClick={() => setOpenLightbox(false)}
                        className="absolute top-4 right-4 text-white hover:text-slate-300 p-2 z-50 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-7xl h-full max-h-[90vh] flex items-center justify-center"
                    >
                        <img
                            src={imagenes[lightboxIndex]}
                            alt="Galería Pantalla Completa"
                            className="max-w-full max-h-full object-contain rounded shadow-2xl cursor-default"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {imagenes.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxIndex(prev => prev === 0 ? imagenes.length - 1 : prev - 1);
                                    }}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxIndex(prev => prev === imagenes.length - 1 ? 0 : prev + 1);
                                    }}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
