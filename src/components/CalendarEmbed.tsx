'use client';

import { useState } from 'react';

export default function CalendarEmbed({ url, title }: { url: string; title: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-white relative">
            {/* Loading State Overlay */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-sm font-medium text-slate-500">Cargando calendario...</p>
                    </div>
                </div>
            )}

            <iframe
                src={url}
                className={`w-full h-full border-none relative z-10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                title={title}
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
    );
}
