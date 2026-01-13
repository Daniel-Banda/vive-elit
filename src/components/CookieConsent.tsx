"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('vive-elit-cookie-consent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('vive-elit-cookie-consent', 'true');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-elite-gold/20 p-6 z-50 shadow-2xl animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/80 text-sm font-light leading-relaxed text-center md:text-left">
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                    </p>
                    <p className="mt-2">
                        Si continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información en nuestra{' '}
                        <Link href="/cookies" className="text-elite-gold hover:underline font-medium">
                            Política de Cookies
                        </Link>
                        .
                    </p>
                </div>
                <button
                    onClick={acceptCookies}
                    className="bg-white text-slate-900 px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-elite-gold hover:text-white transition-colors whitespace-nowrap"
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}
