import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <MainLayout>
                {children}
            </MainLayout>
            <footer className="bg-black border-t border-elite-gold/20 py-20 mt-0">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
                    <div className="text-2xl font-serif font-bold text-white tracking-tighter">
                        VIVE <span className="text-elite-gold">ELIT</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                        <a href="/catalogo" className="hover:text-white transition-colors">Propiedades</a>
                        <a href="/nosotros" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="/contacto" className="hover:text-white transition-colors">Soporte</a>
                    </div>

                    <div className="h-[1px] w-20 bg-elite-gold/30"></div>

                    <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium text-center">
                        © 2025 Vive Elit Inmobiliaria. <br className="md:hidden" />
                        Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </>
    );
}
