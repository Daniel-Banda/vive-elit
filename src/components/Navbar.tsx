'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // State for mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // State to handle scroll effect on Home
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        if (isHome) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isHome]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Dynamic classes
    const navClass = isHome
        ? (scrolled || isMenuOpen
            ? "fixed top-0 w-full z-50 bg-[#0F3451]/95 backdrop-blur-sm text-white shadow-2xl transition-all duration-300 border-b border-[#D5A556]/20"
            : "fixed top-0 w-full z-50 bg-transparent text-white transition-all duration-300 border-b border-transparent")
        : "fixed top-0 w-full z-50 bg-[#0F3451] text-white shadow-2xl border-b border-[#D5A556]/20";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="relative w-[6.1rem] h-12 transition-opacity hover:opacity-80 block" onContextMenu={(e) => e.preventDefault()}>
                    <Image
                        src="/images/logo.png"
                        alt="Vive Elit Logo"
                        fill
                        className="object-contain select-none"
                        draggable={false}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6 text-[11.5px] font-black uppercase tracking-[0.15em] text-elite-lightgray">
                    <Link href="/" className="hover:text-amber-400 transition-colors">
                        Inicio
                    </Link>
                    <Link href="/catalogo" className="hover:text-amber-400 transition-colors">
                        Encuentra tu hogar
                    </Link>
                    <Link href="/anunciar" className="hover:text-amber-400 transition-colors">
                        Anuncia tu propiedad
                    </Link>
                    <Link href="/contacto" className="hover:text-amber-400 transition-colors">
                        Contáctanos
                    </Link>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    className="lg:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`lg:hidden fixed inset-x-0 top-20 bg-[#0F3451]/95 backdrop-blur-md border-b border-[#D5A556]/20 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 py-8 text-[11.5px] font-black uppercase tracking-[0.15em] text-elite-lightgray">
                    <Link href="/" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Inicio
                    </Link>
                    <Link href="/catalogo" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Encuentra tu hogar
                    </Link>
                    <Link href="/anunciar" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Anuncia tu propiedad
                    </Link>
                    <Link href="/contacto" className="hover:text-amber-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Contáctanos
                    </Link>
                </div>
            </div>
        </nav>
    );
}
