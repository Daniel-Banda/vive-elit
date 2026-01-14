'use client';

import { useState, useEffect } from 'react';
import { getSupabase } from '@/lib/supabase';

export default function SantosChocanoPage() {
    const [property, setProperty] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Lightbox State
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const supabase = getSupabase();
                const { data, error } = await supabase
                    .from('Propiedades')
                    .select('*')
                    .eq('id', 2)
                    .single();

                if (error) {
                    console.error('Error fetching property:', error);
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
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg md:text-2xl font-light tracking-widest uppercase">
                        <p>Terreno: <span className="font-bold">370.80 m²</span></p>
                        <p>Construcción: <span className="font-bold">433.44 m²</span></p>
                    </div>
                </div>
            </section>

            {/* 2. DESCRIPTION & 360 TOUR SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Text (Matches reference layout) */}
                    <div className="text-left space-y-8 pt-4">
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

                        <div className="pt-8">
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

                    {/* Right: 360 Tour (Visual) */}
                    <div className="w-full relative">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-2 block text-right">Recorrido Virtual 360°</span>
                        <div className="aspect-video w-full rounded shadow-xl overflow-hidden bg-slate-100 relative group">
                            <iframe
                                src="https://viveelit.netlify.app/"
                                className="w-full h-full"
                                allowFullScreen
                                loading="lazy"
                                title="Recorrido Virtual 360"
                            />
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PLANS SECTION */}
            <section className="bg-white pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h3 className="text-2xl font-serif text-slate-900 mb-2">Planos Arquitectónicos</h3>
                        <div className="h-px w-full bg-slate-100"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Plan 1 */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Planta Baja</p>
                            <div className="bg-slate-50 p-4 rounded-sm border border-slate-100 transition-all hover:shadow-lg duration-500">
                                <img
                                    src="https://res.cloudinary.com/daxglaqjg/image/upload/v1768418807/PLANOS_WEB_yk46pf.jpg"
                                    alt="Planos Arquitectónicos"
                                    className="w-full h-auto object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                            </div>
                        </div>
                        {/* Plan 2 */}
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Distribución</p>
                            <div className="bg-slate-50 p-4 rounded-sm border border-slate-100 transition-all hover:shadow-lg duration-500">
                                <img
                                    src="https://res.cloudinary.com/daxglaqjg/image/upload/v1768418808/distribucion_web_ahk1wx.jpg"
                                    alt="Distribución Espacial"
                                    className="w-full h-auto object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EXPANDABLE GALLERY (From Supabase ID 2) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <h3 className="text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-12">Galería de Imágenes</h3>

                {loading ? (
                    <div className="text-center text-slate-400 font-serif italic">Cargando galería...</div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {imagenes.map((img: string, idx: number) => (
                            <div
                                key={idx}
                                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                                onClick={() => {
                                    setLightboxIndex(idx);
                                    setOpenLightbox(true);
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Galería ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 font-bold uppercase tracking-widest text-[10px] bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">Ver</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* LIGHTBOX OVERLAY */}
            {openLightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/[0.85] flex items-center justify-center p-4 backdrop-blur-sm"
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
                        className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center"
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
                                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors bg-black/20 md:bg-transparent rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxIndex(prev => prev === imagenes.length - 1 ? 0 : prev + 1);
                                    }}
                                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors bg-black/20 md:bg-transparent rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Dots */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                            {imagenes.map((_: any, idx: number) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
