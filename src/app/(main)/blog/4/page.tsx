import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '¿Terreno o casa? Lo que te conviene según tu dinero | Vive Elit',
    description: 'Compara terreno vs. casa en México: inversión inicial, plusvalía, liquidez, financiamiento y flujo de renta. Toma la decisión correcta según tu presupuesto y objetivos.',
    keywords: ['terreno o casa', 'qué comprar terreno o casa', 'inversión inmobiliaria México', 'plusvalía terreno', 'comprar casa vs terreno', 'Villa de Álvarez Colima', 'Vive Elit'],
    openGraph: {
        title: '¿Terreno o casa? Lo que te conviene según tu dinero | Vive Elit',
        description: 'No es una decisión emocional, es estratégica. Comparamos ambas opciones con datos reales para que elijas con información.',
        url: 'https://viveelit.com/blog/4',
        siteName: 'Vive Elit',
        images: [{
            url: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            width: 1200,
            height: 630,
            alt: 'Comparativa entre comprar terreno o casa en México',
        }],
        type: 'article',
        publishedTime: '2026-03-17T00:00:00.000Z',
        modifiedTime: '2026-03-17T00:00:00.000Z',
        authors: ['Equipo Editorial Inmobiliario — Vive Elit'],
    },
    twitter: {
        card: 'summary_large_image',
        title: '¿Terreno o casa? Lo que te conviene según tu dinero | Vive Elit',
        description: 'No es emocional, es estratégica. Comparamos terreno vs. casa con datos reales.',
        images: ['https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    },
};

export default function BlogPost4() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '¿Terreno o casa? Lo que te conviene según tu dinero',
        description: 'Compara terreno vs. casa en México: inversión inicial, plusvalía, liquidez, financiamiento y flujo de renta. Toma la decisión correcta según tu presupuesto.',
        image: ['https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
        datePublished: '2026-03-17T00:00:00.000Z',
        dateModified: '2026-03-17T00:00:00.000Z',
        author: [{ '@type': 'Organization', name: 'Equipo Editorial Inmobiliario — Vive Elit', url: 'https://viveelit.com' }],
        publisher: { '@type': 'Organization', name: 'Vive Elit', url: 'https://viveelit.com' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://viveelit.com/blog/4' },
        articleSection: 'Inversión',
        keywords: 'terreno o casa, inversión inmobiliaria, plusvalía, Villa de Álvarez, Colima',
        inLanguage: 'es-MX',
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Qué es mejor comprar, un terreno o una casa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Depende de tus objetivos: si buscas crecimiento de capital a mediano plazo y tienes presupuesto ajustado, un terreno bien ubicado puede ser la mejor opción. Si necesitas vivir pronto o generar flujo por renta, una casa es más adecuada. No hay una opción universalmente mejor.' }
            },
            {
                '@type': 'Question',
                name: '¿Un terreno o una casa tiene más plusvalía?',
                acceptedAnswer: { '@type': 'Answer', text: 'Los terrenos bien ubicados en zonas de crecimiento activo tienden a tener mayor plusvalía potencial que las casas. Sin embargo, esto depende del mercado local, la ubicación específica y el tiempo de inversión.' }
            },
            {
                '@type': 'Question',
                name: '¿Se puede financiar la compra de un terreno con crédito hipotecario?',
                acceptedAnswer: { '@type': 'Answer', text: 'Es más limitado que con casas. Algunos bancos ofrecen créditos para terrenos urbanos, pero las condiciones son más estrictas. El crédito Infonavit solo aplica para vivienda, no para terrenos sin construcción.' }
            },
            {
                '@type': 'Question',
                name: '¿Qué conviene más si tengo poco dinero?',
                acceptedAnswer: { '@type': 'Answer', text: 'Un terreno. La inversión inicial es más baja, puedes entrar al mercado inmobiliario con menos capital y esperar a que la zona se valorice. Zonas como Villa de Álvarez o alrededores de Colima tienen precios accesibles con desarrollo activo.' }
            },
        ]
    };

    const compTable = [
        { factor: 'Inversión inicial', terreno: 'Baja', casa: 'Alta' },
        { factor: 'Liquidez', terreno: 'Baja', casa: 'Media' },
        { factor: 'Plusvalía potencial', terreno: 'Alta (si eliges bien)', casa: 'Media' },
        { factor: 'Flujo por renta', terreno: 'No', casa: 'Sí' },
        { factor: 'Financiamiento bancario', terreno: 'Limitado', casa: 'Sí' },
        { factor: 'Nivel de riesgo', terreno: 'Medio–Alto', casa: 'Medio' },
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#0F3451]">
                <Image
                    src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Persona analizando opciones de inversión inmobiliaria entre terreno y casa"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-10" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-[#D5A556] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Inversión</span>
                            <span className="bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Villa de Álvarez · Colima</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-3 text-white leading-tight">
                            ¿Terreno o casa?
                        </h1>
                        <p className="text-[#D5A556] text-xl md:text-2xl font-bold mb-4">Lo que te conviene según tu dinero.</p>
                        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mb-5">
                            No es una decisión emocional. Es estratégica. Si eliges mal, puedes quedarte sin liquidez, sin plusvalía… o con un problema que tardará años en resolverse.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400 text-sm font-medium">
                            <span>📅 Marzo 2026</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>⏱ 5 min de lectura</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

                {/* Regla base */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        Regla base: no compres lo que te ahorque
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Antes de comparar opciones, necesitas tener claro tu punto de partida. Si esto no está definido, da igual lo que compres.
                    </p>
                    <div className="bg-[#0F3451] text-white rounded-2xl p-6 md:p-8">
                        <p className="text-[#D5A556] font-bold text-sm uppercase tracking-widest mb-5">Hazte estas tres preguntas antes de seguir:</p>
                        <div className="space-y-4">
                            {[
                                '¿Cuánto puedo pagar cada mes sin quedarme corto?',
                                '¿Estoy buscando donde vivir o estoy buscando invertir?',
                                '¿En cuánto tiempo quiero ver un retorno?',
                            ].map((q, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#D5A556] text-[#D5A556] font-black text-sm flex items-center justify-center">{i + 1}</span>
                                    <p className="text-slate-200 leading-relaxed">{q}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm mt-6 pt-6 border-t border-white/10">
                            Si no tienes respuestas claras, ninguna opción va a funcionar bien. La estrategia empieza antes de ver propiedades.
                        </p>
                    </div>
                </section>

                {/* Cards terreno vs casa */}
                <section className="mb-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Terreno */}
                        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                            <div className="bg-[#0F3451] text-white px-6 py-5">
                                <h2 className="text-2xl font-black">Terreno 🌾</h2>
                            </div>
                            <div className="p-6 flex flex-col gap-6 flex-grow">
                                <div>
                                    <p className="text-xs font-bold text-[#0F3451] uppercase tracking-widest mb-3">Te conviene si...</p>
                                    <ul className="space-y-2">
                                        {['Tu presupuesto es limitado', 'No necesitas mudarte ya', 'Piensas a mediano plazo (2–5 años)', 'Buscas crecimiento de capital'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-700"><span className="text-green-600 font-bold">✔</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#0F3451] uppercase tracking-widest mb-3">Ventajas reales</p>
                                    <ul className="space-y-2">
                                        {['Entrada más baja', 'Mayor potencial de plusvalía', 'Puedes construir a tu ritmo'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-700"><span className="text-[#D5A556] font-black">↑</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">Riesgos</p>
                                    <ul className="space-y-2">
                                        {['No genera flujo inmediato', 'Puede tardar si la zona no despega', 'Requiere revisión legal cuidadosa'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-600"><span className="text-red-400 font-black">!</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
                                    Zonas en crecimiento como <strong>Villa de Álvarez</strong> o alrededores de Colima aún tienen precios accesibles con desarrollo activo. Esa combinación es la jugada.
                                </div>
                            </div>
                        </div>

                        {/* Casa */}
                        <div className="rounded-3xl overflow-hidden border border-[#D5A556] shadow-sm flex flex-col">
                            <div className="bg-[#D5A556] text-white px-6 py-5">
                                <h2 className="text-2xl font-black">Casa 🏠</h2>
                            </div>
                            <div className="p-6 flex flex-col gap-6 flex-grow">
                                <div>
                                    <p className="text-xs font-bold text-[#0F3451] uppercase tracking-widest mb-3">Te conviene si...</p>
                                    <ul className="space-y-2">
                                        {['Necesitas mudarte pronto', 'Tienes capacidad de crédito', 'Buscas estabilidad patrimonial', 'Quieres rentar desde el día 1'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-700"><span className="text-green-600 font-bold">✔</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#0F3451] uppercase tracking-widest mb-3">Ventajas reales</p>
                                    <ul className="space-y-2">
                                        {['La puedes habitar o rentar de inmediato', 'Menos incertidumbre jurídica', 'Más fácil de financiar con hipotecario'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-700"><span className="text-[#D5A556] font-black">↑</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">Riesgos</p>
                                    <ul className="space-y-2">
                                        {['Precio por m² más alto', 'Menor margen de ganancia a corto plazo', 'Gastos de mantenimiento continuos'].map((item, i) => (
                                            <li key={i} className="flex gap-2 text-sm text-slate-600"><span className="text-red-400 font-black">!</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
                                    Busca zonas con demanda de renta constante: cerca de <strong>universidades, hospitales o parques industriales</strong>. Eso asegura el flujo.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison table */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        La comparativa sin rodeos
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-[#0F3451] text-white">
                                <tr>
                                    <th className="text-left px-6 py-4 font-bold">Factor</th>
                                    <th className="text-left px-6 py-4 font-bold">🌾 Terreno</th>
                                    <th className="text-left px-6 py-4 font-bold">🏠 Casa</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {compTable.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-[#0F3451]">{row.factor}</td>
                                        <td className="px-6 py-4 text-slate-600">{row.terreno}</td>
                                        <td className="px-6 py-4 text-slate-600">{row.casa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Decision guide */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-8 border-l-4 border-[#D5A556] pl-5">
                        ¿Entonces qué eliges?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { cond: 'Si tienes poco dinero', arrow: '→ Terreno', desc: 'Es la entrada inteligente al mercado inmobiliario.' },
                            { cond: 'Si tienes ingreso estable', arrow: '→ Casa', desc: 'Te da uso inmediato y acceso a crédito.' },
                            { cond: 'Si quieres crecer capital', arrow: '→ Terreno bien ubicado', desc: 'Con paciencia y buena zona, la plusvalía supera a casi cualquier inversión.' },
                            { cond: 'Si quieres flujo mensual', arrow: '→ Casa para rentar', desc: 'Genera ingreso desde el primer mes con el inquilino correcto.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.cond}</p>
                                <p className="text-lg font-black text-[#0F3451] mb-2">{item.arrow}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* El error */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        El error que sale caro
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-5">Comprar por emoción, no por estrategia:</p>
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-6 space-y-2">
                        {[
                            '"Me gustó mucho la casa"',
                            '"Está barato, hay que aprovechar"',
                            '"Me dijeron que esa zona va a subir"',
                        ].map((q, i) => (
                            <p key={i} className="text-red-700 font-medium italic flex gap-2 items-center">
                                <span className="text-red-400">✗</span> {q}
                            </p>
                        ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                        Ninguna de esas es razón suficiente. El mercado no premia el entusiasmo, premia la decisión bien fundamentada. Antes de comprometerte con una propiedad, necesitas <strong>números, contexto y asesoría</strong>.
                    </p>
                </section>

                {/* Conclusion */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        Conclusión directa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0F3451] text-white rounded-2xl p-6">
                            <p className="text-[#D5A556] font-black text-lg mb-2">Terreno = crecimiento</p>
                            <p className="text-slate-300 text-sm leading-relaxed">Para quien puede esperar y quiere multiplicar capital.</p>
                        </div>
                        <div className="bg-[#D5A556] text-white rounded-2xl p-6">
                            <p className="font-black text-lg mb-2">Casa = estabilidad</p>
                            <p className="text-white/80 text-sm leading-relaxed">Para quien necesita usar o rentabilizar desde ya.</p>
                        </div>
                    </div>
                    <p className="text-slate-600 mt-6 leading-relaxed text-center">
                        No hay una opción universalmente mejor. Hay una <strong>mejor decisión para tu situación específica</strong>. Y esa decisión se toma con información, no con corazonadas.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        Preguntas frecuentes
                    </h2>
                    <div className="space-y-4">
                        {[
                            { q: '¿Qué es mejor comprar, un terreno o una casa?', a: 'Depende de tus objetivos: si buscas crecimiento de capital a mediano plazo y tienes presupuesto ajustado, un terreno bien ubicado puede ser la mejor opción. Si necesitas vivir pronto o generar flujo por renta, una casa es más adecuada. No hay una opción universalmente mejor.' },
                            { q: '¿Un terreno o una casa tiene más plusvalía?', a: 'Los terrenos bien ubicados en zonas de crecimiento activo tienden a tener mayor plusvalía potencial. Sin embargo, depende del mercado local, la ubicación específica y el tiempo de inversión.' },
                            { q: '¿Se puede financiar la compra de un terreno con crédito hipotecario?', a: 'Es más limitado que con casas. Algunos bancos ofrecen créditos para terrenos urbanos con condiciones más estrictas. El crédito Infonavit solo aplica para vivienda, no para terrenos sin construcción.' },
                            { q: '¿Qué conviene más si tengo poco dinero?', a: 'Un terreno. La inversión inicial es más baja, puedes entrar al mercado inmobiliario con menos capital y esperar a que la zona se valorice. Zonas como Villa de Álvarez o alrededores de Colima tienen precios accesibles con desarrollo activo.' },
                        ].map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                                <div className="bg-[#0F3451]/5 px-6 py-4">
                                    <h3 className="font-bold text-[#0F3451]">{faq.q}</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-[#0F3451] rounded-3xl p-8 md:p-12 text-center text-white">
                    <p className="text-[#D5A556] font-bold text-sm uppercase tracking-widest mb-3">¿Quieres saber cuál te conviene?</p>
                    <h3 className="text-2xl md:text-3xl font-black mb-3">Cuéntanos tu situación y te orientamos sin compromiso.</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Nuestro equipo analiza tu presupuesto y objetivos para recomendarte la mejor opción para tu caso específico.
                    </p>
                    <Link href="/contacto" className="inline-block bg-[#D5A556] hover:bg-[#c49345] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base">
                        Quiero orientación personalizada ↗
                    </Link>
                </div>
            </article>

            {/* Back to blog */}
            <div className="max-w-4xl mx-auto px-6 py-6 border-t border-slate-200">
                <Link href="/blog" className="inline-flex items-center text-[#0F3451] hover:text-[#D5A556] font-bold transition-colors gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Volver a todos los artículos
                </Link>
            </div>
        </main>
    );
}
