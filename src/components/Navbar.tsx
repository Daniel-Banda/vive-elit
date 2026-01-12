'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // State to handle scroll effect on Home (start transparent, become solid on scroll)
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

    // Dynamic classes
    // If Home and not scrolled: Transparent, Absolute
    // If Home and Scrolled: Solid Black/Blue, Fixed
    // If Not Home: Solid Blue, Fixed

    const navClass = isHome
        ? (scrolled
            ? "fixed top-0 w-full z-50 bg-[#0F3451]/95 backdrop-blur-sm text-white shadow-2xl transition-all duration-300 border-b border-[#D5A556]/20"
            : "fixed top-0 w-full z-50 bg-transparent text-white transition-all duration-300 border-b border-transparent")
        : "fixed top-0 w-full z-50 bg-[#0F3451] text-white shadow-2xl border-b border-[#D5A556]/20";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    VIVE <span className="text-elite-gold">ELIT</span>
                </Link>

                {/* Menú de Navegación */}
                <div className="hidden lg:flex gap-6 text-[9px] font-black uppercase tracking-[0.15em] text-elite-lightgray">
                    <Link href="/" className="hover:text-amber-400 transition-colors">
                        Inicio
                    </Link>
                    <Link href="/catalogo" className="hover:text-amber-400 transition-colors">
                        Encuentra tu hogar
                    </Link>

                    <Link href="/contacto" className="hover:text-amber-400 transition-colors">
                        Contáctanos
                    </Link>
                </div>
            </div>
        </nav>
    );
}
