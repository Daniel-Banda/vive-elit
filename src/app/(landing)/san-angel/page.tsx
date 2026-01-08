import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bed, Bath, Car, ChefHat, FileText, MapPin, ChevronLeft, ChevronRight, Play, Ruler, Home, Layers } from "lucide-react";
import PrintButton from "@/components/PrintButton";

export default function SanAngelPage() {
    return (
        <main className="min-h-screen bg-white text-elite-navy font-sans selection:bg-elite-gold selection:text-white">
            {/* ----------------- HEADER ----------------- */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 print:hidden">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        VIVE <span className="text-elite-gold">ELIT</span>
                        <span className="text-[10px] ml-2 font-sans font-normal tracking-widest text-[#0F3451]/60 hidden sm:inline-block">LUXURY REAL ESTATE</span>
                    </Link>

                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0F3451]/80">
                        <Link href="/catalogo" className="hover:text-elite-gold transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-3 h-3" /> Regresar
                        </Link>
                        <div className="h-4 w-[1px] bg-gray-300"></div>
                        <span className="text-elite-gold">Colima, MX</span>
                    </div>
                </div>
            </header>

            {/* ----------------- HERO: SPLIT LAYOUT ----------------- */}
            <section className="pt-20 max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-0 lg:gap-8 pt-8 pb-12">

                    {/* LEFT: Main Visual (Hero Image) */}
                    <div className="lg:col-span-8 relative h-[50vh] lg:h-auto min-h-[400px] rounded-lg overflow-hidden group shadow-xl">
                        <Image
                            src="/images/san-angel/info.jpg"
                            alt="San Ángel Fachada"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <div className="flex gap-4 mb-2">
                                <span className="bg-elite-gold/90 text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">En Venta</span>
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-sm shadow-lg border-l-4 border-elite-gold">
                            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Precio</span>
                            <span className="block text-3xl font-serif text-[#0F3451]">$3,300,000</span>
                        </div>
                    </div>

                    {/* RIGHT: Sidebar Info Panel */}
                    <div className="lg:col-span-4 flex flex-col justify-center py-8 lg:pl-4">
                        {/* Tags */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1 text-elite-gold">
                                <div className="p-1"><MapPin className="w-4 h-4" /></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest">San Ángel</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Residencia</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-serif text-[#0F3451] mb-6 leading-tight">
                            Casa San Ángel
                        </h1>

                        {/* Properties Grid */}
                        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                            {/* Terreno */}
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="mt-1 text-elite-gold"><Ruler className="w-5 h-5" /></div>
                                <div>
                                    <span className="block font-bold text-lg text-[#0F3451]">176 m²</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Terreno (8x22)</span>
                                </div>
                            </div>

                            {/* Construcción */}
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="mt-1 text-elite-gold"><Home className="w-5 h-5" /></div>
                                <div>
                                    <span className="block font-bold text-lg text-[#0F3451]">156 m²</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Construcción</span>
                                </div>
                            </div>

                            {/* Habitaciones */}
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="mt-1 text-elite-gold"><Bed className="w-5 h-5" /></div>
                                <div>
                                    <span className="block font-bold text-lg text-[#0F3451]">3</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Recámaras</span>
                                </div>
                            </div>

                            {/* Baños */}
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="mt-1 text-elite-gold"><Bath className="w-5 h-5" /></div>
                                <div>
                                    <span className="block font-bold text-lg text-[#0F3451]">2.5</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Baños</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-gray-100 mb-8"></div>

                        {/* Description List */}
                        <div className="space-y-3 mb-8">
                            <h3 className="font-serif text-lg text-[#0F3451] mb-2">Características</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elite-gold rounded-full"></div> 2 Plantas</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elite-gold rounded-full"></div> Recámara principal con baño y vestidor</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elite-gold rounded-full"></div> Cocina con granito y parrilla de 5 quemadores</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elite-gold rounded-full"></div> Cochera para 2 autos</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-elite-gold rounded-full"></div> Patio de servicio techado y amplio patio trasero</li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4 mt-auto print:hidden">
                            <PrintButton />

                            <a href="https://wa.me/523121222277" target="_blank" className="w-full flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02]">
                                Contactar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- DISTRIBUTION / PLANS SECTION ----------------- */}
            <section className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-elite-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">Distribución</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-[#0F3451]">Planos Arquitectónicos</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Plan Baja */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-serif text-[#0F3451] mb-6 text-center border-b border-gray-100 pb-4">Planta Baja</h3>
                            <div className="relative aspect-[3/4] w-full">
                                <Image
                                    src="/images/san-angel/plan-2.jpg"
                                    alt="Planta Baja"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Plan Alta */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-serif text-[#0F3451] mb-6 text-center border-b border-gray-100 pb-4">Planta Alta</h3>
                            <div className="relative aspect-[3/4] w-full">
                                <Image
                                    src="/images/san-angel/plan-1.jpg"
                                    alt="Planta Alta"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- GALLERY SECTION ----------------- */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-serif text-[#0F3451] mb-10 text-center">Galería</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=600" alt="Interior 1" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600" alt="Interior 2" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600" alt="Interior 3" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=600" alt="Interior 4" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="relative aspect-square md:aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                            <Image src="https://images.unsplash.com/photo-1556912173-3db9963ab028?q=80&w=600" alt="Interior 5" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- FOOTER (Condensed) ----------------- */}
            <footer className="py-12 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-xl font-serif font-bold text-[#0F3451]">
                        VIVE <span className="text-elite-gold">ELIT</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium tracking-wide">
                        © 2025 Vive Elit Inmobiliaria. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </main>
    );
}
