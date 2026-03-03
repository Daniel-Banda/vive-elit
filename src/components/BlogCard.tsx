import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category?: string;
}

export default function BlogCard({ id, title, excerpt, date, image, category }: BlogCardProps) {
    return (
        <Link href={`/blog/${id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Category Tag (Top Left) */}
                {category && (
                    <div className="absolute top-3 left-3 flex gap-1">
                        <span className="bg-[#0F3451]/80 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-1 rounded uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="text-[#D5A556] text-[11px] uppercase tracking-widest font-bold mb-2">
                    {date}
                </div>

                <h3 className="text-xl font-bold text-slate-800 leading-tight mb-3">
                    {title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-medium">
                    <span className="text-[#0F3451] group-hover:text-[#D5A556] transition-colors duration-300 flex items-center gap-1 font-bold uppercase tracking-wider">
                        Leer Artículo →
                    </span>
                </div>
            </div>
        </Link>
    );
}
