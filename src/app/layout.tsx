import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vive Elit | Inmobiliaria de Lujo",
  description: "Más de 500 propiedades exclusivas a tu alcance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">
        {/* Navbar Global - Color Sólido Oscuro (Slate 900) */}
        <nav className="fixed top-0 w-full z-50 bg-[#0F3451] text-white shadow-2xl border-b border-[#D5A556]/20">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

            {/* Logo */}
            <a href="/" className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity">
              VIVE <span className="text-elite-gold">ELIT</span>
            </a>

            {/* Menú de Navegación con Rutas Actualizadas */}
            <div className="hidden lg:flex gap-6 text-[9px] font-black uppercase tracking-[0.15em] text-elite-lightgray">
              <a href="/" className="hover:text-white transition-colors">
                Inicio
              </a>
              <a href="/catalogo" className="hover:text-white transition-colors">
                Encuentra tu próximo hogar
              </a>
              <a href="/anunciar" className="hover:text-white transition-colors">
                Anuncia una propiedad
              </a>
              <a href="/nosotros" className="hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="/contacto" className="hover:text-white transition-colors">
                Contáctanos
              </a>
            </div>

            {/* Botón de Acción Directa */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+523120000000"
                className="bg-elite-gold hover:bg-[#c49626] text-elite-navy px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-elite-gold/20"
              >
                Llamar ahora
              </a>
            </div>

          </div>
        </nav>

        {/* Contenedor Principal: 
            El pt-20 compensa la altura del Navbar (h-20 = 80px) 
            para que el contenido no quede oculto detrás.
        */}
        <div className="pt-20">
          {children}
        </div>

        {/* Footer Minimalista de Lujo */}
        <footer className="bg-elite-navy border-t border-elite-gold/20 py-20 mt-0">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
            <div className="text-2xl font-serif font-bold text-white tracking-tighter">
              VIVE <span className="text-elite-gold">ELIT</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-elite-green">
              <a href="/catalogo" className="hover:text-white transition-colors">Propiedades</a>
              <a href="/nosotros" className="hover:text-white transition-colors">Privacidad</a>
              <a href="/contacto" className="hover:text-white transition-colors">Soporte</a>
            </div>

            <div className="h-[1px] w-20 bg-elite-gold/30"></div>

            <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-medium text-center">
              © 2025 Vive Elit Inmobiliaria. <br className="md:hidden" />
              Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}