'use client';

import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';
import {
    BedDouble,
    Bath,
    Car,
    Store, // Using Store for "Cuarto de Servicio"? Maybe slightly off but acceptable.
    Tv, // TV Area
    Sofa, // Sala
    Monitor, // Estudio
    Flower2, // Patio (Flower2 is good)
    Utensils, // Cocina
    Box, // Bodegas
    Wind, // Aires
    MessageCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function SantosChocanoPage() {
    const [property, setProperty] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Lightbox State
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Gallery Slider State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const supabase = getSupabase();
                const { data, error } = await supabase
                    .from('Propiedades')
                    .select('*')
                    .eq('ID', 2)
                    .single();

                if (error) {
                    console.error('Error fetching property:', JSON.stringify(error, null, 2));
                    return;
                }

                if (data) {
                    setProperty(data);
                }
            } catch (err) {
                console.error('Supabase error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, []);

    const imagenes = property?.Imagenes || [];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    const openWhatsApp = () => {
        const message = "Hola, me interesa información sobre la propiedad Santos Chocano";
        window.open(`https://wa.me/523121222277?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/daxglaqjg/image/upload/v1768366125/IMG_6187_qf4jud.jpg"
                        alt="Santos Chocano Hero"
                        className="w-full h-full object-cover"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/65"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">
                        $9,000,000
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg md:text-2xl font-light tracking-widest uppercase mb-12">
                        <p>Terreno: <span className="font-bold">370.80 m²</span></p>
                        <p>Construcción: <span className="font-bold">433.44 m²</span></p>
                    </div>

                    {/* Hero CTA */}
                    <button
                        onClick={openWhatsApp}
                        className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-colors flex items-center gap-2"
                    >
                        <MessageCircle size={16} />
                        Solicitar Información
                    </button>
                </div>
            </section>

            {/* 2. DESCRIPTION & 360 TOUR SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                    {/* Left: Text */}
                    <div className="text-left space-y-8 flex flex-col justify-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 block">Descripción</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                                Elegancia, espacio y potencial en el corazón de la ciudad.
                            </h2>
                        </div>
                        <div className="h-px w-20 bg-slate-200 my-8"></div>
                        <p className="text-slate-500 text-sm md:text-base leading-loose font-light text-justify">
                            Disfruta de amplitud y estilo en la zona más privilegiada de la ciudad. Esta propiedad es una inversión inteligente con plusvalía garantizada y diseño versátil, ideal tanto para residencia de lujo como para proyectos de coliving o rentas ejecutivas. Asegura tu patrimonio en un activo que combina confort, conectividad y alta rentabilidad en el mercado actual.
                        </p>

                        <div className="pt-4">
                            <button
                                onClick={openWhatsApp}
                                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors flex items-center gap-2"
                            >
                                <MessageCircle size={14} />
                                Contactar Asesor
                            </button>
                        </div>

                        <div className="pt-8 mt-auto">
                            <div className="flex gap-12 border-t border-slate-100 pt-8">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Terreno</p>
                                    <p className="text-xl font-serif text-slate-900">370.80 m²</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Construcción</p>
                                    <p className="text-xl font-serif text-slate-900">433.44 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: 360 Tour (Samesize) */}
                    <div className="w-full relative flex flex-col h-full">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-2 block text-right">Recorre la propiedad</span>
                        <div className="w-full rounded shadow-xl overflow-hidden bg-slate-100 relative group flex-grow min-h-[400px]">
                            <iframe
                                src="https://viveelit.netlify.app/"
                                className="w-full h-full absolute inset-0"
                                allowFullScreen
                                loading="lazy"
                                title="Recorrido Virtual 360"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PLANS SECTION */}
            <section className="bg-white pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h3 className="text-2xl font-serif text-slate-900 mb-2">Planos Arquitectónicos</h3>
                        <div className="h-px w-full bg-slate-100"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        {/* Plan 1 */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Planta Baja</p>
                            <div className="bg-slate-50 p-4 rounded-sm border border-slate-100 transition-all hover:shadow-lg duration-500">
                                <img
                                    src="https://res.cloudinary.com/daxglaqjg/image/upload/v1768420560/planoweb_pb_f5qipp.jpg"
                                    alt="Planta Baja"
                                    className="w-full max-h-[700px] object-contain mix-blend-multiply"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                            </div>
                        </div>
                        {/* Plan 2 */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Planta Alta</p>
                            <div className="bg-slate-50 p-4 rounded-sm border border-slate-100 transition-all hover:shadow-lg duration-500">
                                <img
                                    src="https://res.cloudinary.com/daxglaqjg/image/upload/v1768420559/planoweb_pa_qiwjxs.jpg"
                                    alt="Planta Alta"
                                    className="w-full max-h-[700px] object-contain mix-blend-multiply"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Distribution Section with Icons */}
                    <div className="bg-slate-50 rounded-3xl p-12 border border-slate-100">
                        <h4 className="text-xl font-serif text-slate-900 mb-8 border-b border-slate-200 pb-4">Distribución y Amenidades</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 gap-y-12">
                            {[
                                { icon: BedDouble, label: "4 Recámaras", sub: "Amplias, baño comp." },
                                { icon: Bath, label: "5.5 Baños", sub: "Equipados" },
                                { icon: Car, label: "Cochera", sub: "Techada 2 Autos" },
                                { icon: Store, label: "Cuarto Servicio", sub: "Con baño propio" },
                                { icon: Tv, label: "Área de TV", sub: "Familiar" },
                                { icon: Sofa, label: "Sala", sub: "Doble altura" },
                                { icon: Monitor, label: "Estudio", sub: "Home Office" },
                                { icon: Flower2, label: "Patio", sub: "Amplio" },
                                { icon: Utensils, label: "Cocina", sub: "Equipada" },
                                { icon: Box, label: "2 Bodegas", sub: "Almacenamiento" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-3 group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                                        <item.icon strokeWidth={1.5} size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center justify-center gap-2">
                                <Wind size={14} />
                                *Aires acondicionados en todas las habitaciones
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={openWhatsApp}
                            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            <MessageCircle size={14} />
                            Contactar Asesor
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. GALLERY SLIDER (Restored Feature) */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h3 className="text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-12">Galería de Imágenes</h3>

                {loading ? (
                    <div className="text-center text-slate-400 font-serif italic">Cargando galería...</div>
                ) : (
                    <div className="relative group">
                        {/* Main Image */}
                        <div
                            className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl relative cursor-zoom-in"
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
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* Counter / Maximize Hint */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                                    {currentImageIndex + 1} / {imagenes.length}
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-slate-300 text-[10px] uppercase tracking-widest mt-4">
                            Doble clic para pantalla completa
                        </p>
                    </div>
                )}
            </section>

            {/* LIGHTBOX OVERLAY */}
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
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={imagenes[lightboxIndex]}
                            alt="Galería Pantalla Completa"
                            className="max-w-full max-h-full object-contain rounded shadow-2xl"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
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

                    {/* Thumbnails in Lightbox */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 scrollbar-hide">
                        {imagenes.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(idx);
                                }}
                                className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === lightboxIndex ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
