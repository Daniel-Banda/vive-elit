import BlogCard from "@/components/BlogCard";

export const metadata = {
    title: 'Blog | Vive Elit',
    description: 'Noticias, consejos y tendencias del mundo inmobiliario con Vive Elit.',
};

const blogPosts = [
    {
        id: "1",
        title: "5 Consejos para Elegir tu Primera Casa",
        excerpt: "Comprar tu primera casa es un paso emocionante. Aquí te compartimos los mejores consejos para tomar la decisión correcta y encontrar el hogar de tus sueños.",
        date: "15 de Octubre, 2024",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Consejos"
    },
    {
        id: "2",
        title: "Tendencias en Diseño de Interiores para 2024",
        excerpt: "Descubre las últimas tendencias en decoración y diseño de interiores que están transformando los espacios residenciales este año.",
        date: "28 de Septiembre, 2024",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Tendencias"
    },
    {
        id: "3",
        title: "Los Mejores Barrios para Invertir en Bienes Raíces",
        excerpt: "Una guía completa sobre las zonas con mayor plusvalía y desarrollo urbano, ideales para garantizar un excelente retorno de inversión.",
        date: "10 de Septiembre, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Inversiones"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <div className="bg-[#0F3451] text-white pt-36 pb-16 px-6 relative overflow-hidden mb-12">
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                                Blog <span className="text-white">Vive Elit</span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-2xl font-light">
                                Explora nuestros artículos, consejos y las últimas novedades del mercado inmobiliario.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Config & List Section */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-8 border-b border-slate-200 pb-4">
                    <h2 className="text-2xl font-bold text-[#0F3451]">Últimas Entradas</h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            image={post.image}
                            category={post.category}
                        />
                    ))}
                </div>

                {blogPosts.length === 0 && (
                    <div className="text-center py-20 text-slate-500 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h3 className="text-lg font-medium text-slate-900 mb-1">Aún no hay entradas</h3>
                        <p className="text-sm">Vuelve pronto para leer nuestros nuevos artículos.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
