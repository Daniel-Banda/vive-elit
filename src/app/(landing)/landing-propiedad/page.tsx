import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bed, Bath, Car, ChefHat, FileText, MapPin, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function LandingPropertyPage() {
    return (
        <main className="min-h-screen bg-white text-elite-navy font-sans selection:bg-elite-gold selection:text-white">
            {/* ----------------- HEADER ----------------- */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
                        VIVE <span className="text-elite-gold">ELIT</span>
                        <span className="text-[10px] ml-2 font-sans font-normal tracking-widest text-[#0F3451]/60 hidden sm:inline-block">LUXURY REAL ESTATE</span>
                    </Link>

                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0F3451]/80">
                        <Link href="/catalogo" className="hover:text-elite-gold transition-colors flex items-center gap-2">
                            <ArrowLeft className="w-3 h-3" /> Back
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
                    <div className="lg:col-span-8 relative h-[60vh] lg:h-auto min-h-[500px] rounded-lg overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1600596542815-e328700078b9?q=80&w=2600&auto=format&fit=crop"
                            alt="Luxury Property Hero"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                        {/* 360 Indicator Graphic Overlay (Visual Flair) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-[400px] h-[400px] rounded-full border border-white/20 animate-[spin_60s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/30 animate-[spin_40s_linear_infinite_reverse]"></div>
                        </div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <div className="flex gap-4 mb-2">
                                <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-elite-navy transition-all"><ArrowLeft className="w-4 h-4" /></button>
                                <button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center hover:bg-white hover:text-elite-navy transition-all"><ArrowRight className="w-4 h-4" /></button>
                            </div>
                        </div>

                        <div className="absolute bottom-8 right-8 text-white font-serif text-5xl opacity-80">
                            03 <span className="text-lg align-top">05</span>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="text-white font-bold text-xl tracking-[0.2em] uppercase drop-shadow-md">360°</span>
                        </div>
                    </div>

                    {/* RIGHT: Sidebar Info Panel */}
                    <div className="lg:col-span-4 flex flex-col justify-center py-8 lg:pl-4">
                        {/* Tags */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1 text-elite-gold">
                                <div className="p-1"><MapPin className="w-4 h-4" /></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest">City</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">House</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl lg:text-5xl font-serif text-[#0F3451] mb-2 leading-tight">
                            House Of the <br /> Rising Sun
                        </h1>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-10">
                            12 Somewhere Street, Colima, MX
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                            <div className="flex items-start gap-3">
                                <Bed className="w-5 h-5 text-gray-400 mt-1" />
                                <div>
                                    <span className="block font-bold text-xl text-[#0F3451]">3</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Bedrooms</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Bath className="w-5 h-5 text-gray-400 mt-1" />
                                <div>
                                    <span className="block font-bold text-xl text-[#0F3451]">2</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Full Baths</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-5 h-5 flex items-center justify-center text-gray-400 font-serif border border-gray-400 rounded-sm text-xs mt-1">m²</div>
                                <div>
                                    <span className="block font-bold text-xl text-[#0F3451]">189</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">sq.m</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ChefHat className="w-5 h-5 text-gray-400 mt-1" />
                                <div>
                                    <span className="block font-bold text-xl text-[#0F3451]">1</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Kitchens</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-gray-100 mb-8"></div>

                        {/* Description */}
                        <h3 className="font-serif text-lg text-[#0F3451] mb-4">About Property</h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. <br /><br />
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        </p>

                        {/* Actions */}
                        <div className="space-y-4">
                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0F3451] hover:text-elite-gold transition-colors">
                                <FileText className="w-4 h-4" /> Download PDF
                            </button>

                            <button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02]">
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- AMENITIES BAR ----------------- */}
            <section className="border-t border-b border-gray-100 bg-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-serif text-[#0F3451] mb-8">Amenities</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Library</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Garden</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Hardwood Flooring</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Terrace</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Fitness Center</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- CAROUSEL / GALLERY ----------------- */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-0 md:px-6 relative">

                    <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory px-6 no-scrollbar">
                        {/* Image 1 */}
                        <div className="min-w-[85vw] md:min-w-[600px] aspect-[16/9] relative rounded-sm overflow-hidden snap-center">
                            <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2600" alt="Interior" fill className="object-cover" />
                            <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 backdrop-blur-sm">Bedroom</div>
                        </div>
                        {/* Image 2 */}
                        <div className="min-w-[85vw] md:min-w-[600px] aspect-[16/9] relative rounded-sm overflow-hidden snap-center">
                            <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600" alt="Interior" fill className="object-cover" />
                            <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 backdrop-blur-sm">Living Room</div>
                        </div>
                        {/* Image 3 */}
                        <div className="min-w-[85vw] md:min-w-[600px] aspect-[16/9] relative rounded-sm overflow-hidden snap-center">
                            <Image src="https://images.unsplash.com/photo-1556912172-45b7abe8d7e1?q=80&w=2600" alt="Interior" fill className="object-cover" />
                            <div className="absolute bottom-6 left-6 text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 backdrop-blur-sm">Kitchen</div>
                        </div>
                    </div>

                    {/* Nav Buttons (Visual only) */}
                    <div className="hidden md:flex absolute top-1/2 left-10 -translate-y-1/2 w-12 h-12 bg-white shadow-lg items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </div>
                    <div className="hidden md:flex absolute top-1/2 right-10 -translate-y-1/2 w-12 h-12 bg-white shadow-lg items-center justify-center rounded-full cursor-pointer hover:bg-gray-100">
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                    </div>

                </div>
            </section>

            {/* ----------------- ABOUT + PLAN ----------------- */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-serif text-[#0F3451] mb-6">About This Property</h2>
                        <p className="text-gray-500 font-light leading-relaxed mb-6">
                            The magnificent Rancho San Carlos, an approx. 237-acre estate property that for nearly 100 years has been under the ownership of one family. A once-in-a-lifetime opportunity to acquire a unique property of unprecedented scale.
                        </p>
                        <p className="text-gray-500 font-light leading-relaxed">
                            The sprawling hilltop Monterey Colonial manor was designed by noted architect Reginald Johnson in 1931 with approx. 29,000 sq.ft.
                        </p>
                    </div>

                    {/* Right: Plan */}
                    <div>
                        <h2 className="text-3xl font-serif text-[#0F3451] mb-6">House Plan</h2>
                        <div className="border border-gray-100 p-8">
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1599307481180-8b17a02db44d?q=80&w=2600"
                                    alt="House Plan"
                                    fill
                                    className="object-contain opacity-60 grayscale"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------- AREA SECTION ----------------- */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-6 mb-20 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <div className="relative aspect-video rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2600"
                            alt="Area"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <span className="text-xs font-bold uppercase tracking-widest block mb-1">Location</span>
                            <span className="font-serif text-2xl">North Routt</span>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="text-right">
                        <h2 className="text-3xl font-serif text-[#0F3451] mb-6">About this area</h2>
                        <p className="text-sm text-gray-400 font-light leading-relaxed ml-auto max-w-md">
                            Situated north of the charming town of Clark, North Routt is an outdoor-lovers paradise for fishing, hunting, running snow machines, trail riding and more. Ranging from Clark to Columbine, North Routt is at a higher elevation than Steamboat and receives more snow. <br /><br />
                            The area offers incredible recreation including the beautiful Pearl Lake and Steamboat Lake State Parks.
                        </p>
                    </div>
                </div>
            </section>

            {/* ----------------- FOOTER (MATCHING REF) ----------------- */}
            <footer className="py-16 border-t border-gray-100 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    <div>
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-[#0F3451]">
                            bonuses <br /> <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-gray-400">REALTY</span>
                        </Link>
                        {/* Note: Replaced "Vive Elit" with "bonuses REALTY" style just for matching the ref image layout, or keep Vive Elit. 
                   I will keep Vive Elit but styled like the reference for the footer logo. 
               */}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] uppercase tracking-widest font-bold text-[#0F3451]">
                        <div className="flex flex-col gap-4">
                            <span className="text-elite-gold">Call</span>
                            <span className="text-gray-500 normal-case tracking-normal font-medium hover:text-[#0F3451] cursor-pointer">+52 312 123 4567</span>
                            <span className="text-gray-500 normal-case tracking-normal font-medium hover:text-[#0F3451] cursor-pointer">+52 312 999 8888</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-elite-gold">Email</span>
                            <span className="text-gray-500 normal-case tracking-normal font-medium hover:text-[#0F3451] cursor-pointer">info@viveelit.mx</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-elite-gold">Visit</span>
                            <span className="text-gray-500 normal-case tracking-normal font-medium">Av. Venustiano Carranza, Colima</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="h-[1px] w-full bg-gray-200 my-2"></div>
                            <span className="text-gray-400">© 2025 Vive Elit</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
