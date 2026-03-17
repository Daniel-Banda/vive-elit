import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terreno ejidal vs. terreno urbano: ¿cuál es el adecuado para ti? | Vive Elit',
    description: 'Compara terreno ejidal vs. terreno urbano: diferencias legales, ventajas, desventajas y cuándo conviene cada uno para comprar en México en 2026.',
    keywords: ['terreno ejidal', 'terreno urbano', 'diferencia ejidal privado', 'comprar terreno México', 'dominio pleno', 'RAN', 'Registro Público Propiedad', 'Colima', 'Vive Elit'],
    openGraph: {
        title: 'Terreno ejidal vs. terreno urbano: ¿cuál es el adecuado para ti? | Vive Elit',
        description: 'Dos tipos de propiedad, dos caminos distintos. Conoce sus diferencias, ventajas y qué debes considerar antes de decidir.',
        url: 'https://viveelit.com/blog/3',
        siteName: 'Vive Elit',
        images: [{
            url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            width: 1200,
            height: 630,
            alt: 'Vista aérea de terrenos en México, comparando ejidal y urbano',
        }],
        type: 'article',
        publishedTime: '2026-03-17T00:00:00.000Z',
        modifiedTime: '2026-03-17T00:00:00.000Z',
        authors: ['Equipo Editorial Inmobiliario — Vive Elit'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terreno ejidal vs. terreno urbano | Vive Elit',
        description: 'Dos tipos de propiedad, dos caminos distintos. Conoce sus diferencias y cuándo conviene cada uno.',
        images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    },
};

export default function BlogPost3() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Terreno ejidal vs. terreno urbano: ¿cuál es el adecuado para ti?',
        description: 'Compara terreno ejidal vs. terreno urbano en México: diferencias legales, ventajas, desventajas y cuándo conviene cada uno.',
        image: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
        datePublished: '2026-03-17T00:00:00.000Z',
        dateModified: '2026-03-17T00:00:00.000Z',
        author: [{ '@type': 'Organization', name: 'Equipo Editorial Inmobiliario — Vive Elit', url: 'https://viveelit.com' }],
        publisher: { '@type': 'Organization', name: 'Vive Elit', url: 'https://viveelit.com' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://viveelit.com/blog/3' },
        articleSection: 'Terrenos',
        keywords: 'terreno ejidal, terreno urbano, dominio pleno, RAN, comprar terreno México',
        inLanguage: 'es-MX',
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Qué es un terreno ejidal?',
                acceptedAnswer: { '@type': 'Answer', text: 'El ejido es una forma de tenencia de la tierra surgida tras la Revolución Mexicana. Son tierras que el Estado entregó a comunidades campesinas. Desde las reformas al Artículo 27 constitucional en 1992, los ejidatarios pueden dominicar sus parcelas, convirtiéndolas en propiedad privada mediante un proceso legal llamado regularización.' }
            },
            {
                '@type': 'Question',
                name: '¿Se puede comprar un terreno ejidal de forma legal?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí, siempre y cuando se sigan los pasos correctos: verificar el registro en el RAN, confirmar si la parcela tiene dominio pleno, contratar un abogado especializado en derecho agrario y formalizar la operación ante notario una vez regularizada.' }
            },
            {
                '@type': 'Question',
                name: '¿Cuál es la diferencia entre terreno ejidal y terreno urbano?',
                acceptedAnswer: { '@type': 'Answer', text: 'El terreno ejidal tiene origen en la Reforma Agraria y se registra en el RAN, suele ser más accesible en precio pero requiere un proceso de regularización para escriturarse. El terreno urbano tiene escritura pública e inscripción en el Registro Público de la Propiedad, puede usarse como garantía hipotecaria y generalmente está en zonas consolidas con servicios, pero tiene un mayor costo por m².' }
            },
            {
                '@type': 'Question',
                name: '¿Puedo obtener un crédito hipotecario para comprar un terreno ejidal?',
                acceptedAnswer: { '@type': 'Answer', text: 'No directamente. Un terreno ejidal no regularizado no puede usarse como garantía para crédito hipotecario. Una vez que obtiene dominio pleno y se escritura como propiedad privada, sí puede utilizarse como garantía.' }
            },
        ]
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#0F3451]">
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Vista aérea de terrenos en México comparando tipos de propiedad"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-[#D5A556] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Terrenos</span>
                            <span className="bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Bienes raíces · Colima</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white leading-tight">
                            Terreno ejidal vs. terreno urbano:<br />
                            <span className="text-[#D5A556]">¿cuál es el adecuado para ti?</span>
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg font-light max-w-2xl mb-5">
                            Dos tipos de propiedad, dos caminos distintos. Conoce sus diferencias, sus ventajas y qué debes tener en cuenta antes de decidir.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400 text-sm font-medium">
                            <span>📅 Marzo 2026</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>⏱ 5 min de lectura</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>✍ Equipo Editorial Inmobiliario</span>
                        </div>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

                {/* Intro */}
                <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                    En México coexisten diferentes regímenes de propiedad sobre la tierra, y al momento de comprar un terreno es fundamental entender en qué categoría cae la opción que te interesa. Los dos tipos que más encontrarás son el <strong className="text-[#0F3451]">terreno ejidal</strong> y el <strong className="text-[#0F3451]">terreno urbano o habitacional</strong>. Ninguno es "mejor" en términos absolutos: cada uno responde a necesidades y contextos distintos.
                </p>

                {/* Comparison Table */}
                <section className="mb-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Ejidal */}
                        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="bg-[#0F3451] text-white px-6 py-5">
                                <div className="text-xs font-bold uppercase tracking-widest text-[#D5A556] mb-1">Régimen de propiedad social</div>
                                <h2 className="text-2xl font-black">Terreno ejidal</h2>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {[
                                    { label: 'Origen', value: 'Reforma Agraria' },
                                    { label: 'Registro', value: 'RAN (Registro Agrario Nacional)' },
                                    { label: 'Precio', value: 'Generalmente más accesible' },
                                    { label: 'Venta directa', value: 'Requiere proceso de regularización' },
                                    { label: 'Ubicación típica', value: 'Periferia, zonas rurales o en crecimiento' },
                                ].map((row, i) => (
                                    <div key={i} className="flex px-6 py-3 text-sm">
                                        <span className="w-40 flex-shrink-0 text-slate-400 font-medium">{row.label}</span>
                                        <span className="text-slate-700 font-medium">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Urbano */}
                        <div className="rounded-3xl overflow-hidden border border-[#D5A556] shadow-sm">
                            <div className="bg-[#D5A556] text-white px-6 py-5">
                                <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Propiedad privada</div>
                                <h2 className="text-2xl font-black">Terreno urbano o habitacional</h2>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {[
                                    { label: 'Origen', value: 'Escritura pública' },
                                    { label: 'Registro', value: 'Registro Público de la Propiedad' },
                                    { label: 'Precio', value: 'Mayor costo por m²' },
                                    { label: 'Venta directa', value: 'Sí, con escritura y notario' },
                                    { label: 'Ubicación típica', value: 'Zonas urbanas consolidadas o fraccionamientos' },
                                ].map((row, i) => (
                                    <div key={i} className="flex px-6 py-3 text-sm">
                                        <span className="w-40 flex-shrink-0 text-slate-400 font-medium">{row.label}</span>
                                        <span className="text-slate-700 font-medium">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is ejidal */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        ¿Qué es exactamente un terreno ejidal?
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-5">
                        El ejido es una forma de tenencia de la tierra que surgió tras la Revolución Mexicana. Son tierras que el Estado entregó a comunidades campesinas para su uso colectivo. Aunque históricamente no podían venderse, desde las reformas al <strong>Artículo 27 constitucional en 1992</strong>, los ejidatarios pueden <em>dominicar</em> sus parcelas — es decir, convertirlas en propiedad privada mediante un proceso legal llamado regularización.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Esto significa que hoy en día es posible comprar un terreno ejidal de forma <strong>legal y segura</strong>, siempre y cuando se sigan los pasos correctos y se cuente con la asesoría adecuada.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5 text-sm text-amber-800 leading-relaxed">
                        <strong>Importante:</strong> Un terreno ejidal no regularizado no se puede escriturar ni garantizar como crédito hipotecario. Antes de comprarlo, es imprescindible verificar su situación ante el <strong>Registro Agrario Nacional (RAN)</strong> y acompañarse de un abogado o gestor especializado.
                    </div>
                </section>

                {/* What is urbano */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        ¿Y el terreno urbano o habitacional?
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-5">
                        Es el tipo de propiedad más conocido: cuenta con escritura pública ante notario e inscripción en el <strong>Registro Público de la Propiedad</strong>. Puede usarse libremente como garantía para créditos, tiene uso de suelo definido y, en zonas urbanizadas, generalmente ya cuenta con acceso a servicios como agua, luz y drenaje.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Su mayor desventaja suele ser el precio: al tratarse de tierra ya regularizada y con mayor certeza jurídica, el <strong>costo por metro cuadrado tiende a ser más alto</strong>.
                    </p>
                </section>

                {/* Cuando conviene */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-8 border-l-4 border-[#D5A556] pl-5">
                        ¿Cuándo conviene cada uno?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0F3451]/5 border border-[#0F3451]/10 rounded-2xl p-6">
                            <h3 className="font-black text-[#0F3451] mb-4 flex items-center gap-2">
                                <span className="text-lg">🌾</span> Terreno ejidal puede ser una buena opción si...
                            </h3>
                            <ul className="space-y-3 text-slate-700 text-sm">
                                {[
                                    'Buscas invertir a largo plazo',
                                    'Tienes presupuesto ajustado',
                                    'La zona está en crecimiento',
                                    'No necesitas crédito hipotecario',
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="text-[#D5A556] font-black flex-shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#D5A556]/10 border border-[#D5A556]/20 rounded-2xl p-6">
                            <h3 className="font-black text-[#0F3451] mb-4 flex items-center gap-2">
                                <span className="text-lg">🏙️</span> Terreno urbano es preferible si...
                            </h3>
                            <ul className="space-y-3 text-slate-700 text-sm">
                                {[
                                    'Quieres construir a corto plazo',
                                    'Necesitas financiamiento bancario',
                                    'Requieres mayor certeza jurídica inmediata',
                                    'La ubicación es en zona consolidada',
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="text-[#D5A556] font-black flex-shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Pasos ejidal */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-8 border-l-4 border-[#D5A556] pl-5">
                        Pasos para comprar un terreno ejidal de forma segura
                    </h2>
                    <div className="space-y-4">
                        {[
                            'Verifica en el RAN que el terreno esté debidamente registrado y el ejidatario sea el titular legítimo.',
                            'Consulta si la parcela ya fue dominicada (convertida a propiedad privada) o si aún está en proceso.',
                            'Contrata a un abogado especializado en derecho agrario antes de firmar cualquier documento.',
                            'Si aún no está regularizada, contempla los tiempos y costos del proceso de regularización en tu presupuesto.',
                            'Una vez regularizada, formaliza la operación ante notario e inscribe en el Registro Público de la Propiedad.',
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0F3451] text-white font-black text-lg flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed pt-2">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Takeaway */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        Lo que debes llevarte de este artículo
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-700 leading-relaxed">
                        <p className="mb-4">
                            Tanto los terrenos ejidales como los urbanos representan oportunidades reales de inversión y de patrimonio. La clave no está en elegir el "tipo correcto" en abstracto, sino en entender las condiciones particulares del terreno que te interesa, conocer tus propios objetivos y contar con la orientación de alguien que conozca bien la normativa local.
                        </p>
                        <p>
                            En nuestra inmobiliaria trabajamos con ambos tipos de terreno y podemos guiarte en cada paso del proceso, sea cual sea el que mejor se adapte a tu situación.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        Preguntas frecuentes
                    </h2>
                    <div className="space-y-5">
                        {[
                            { q: '¿Qué es un terreno ejidal?', a: 'El ejido es una forma de tenencia de la tierra surgida tras la Revolución Mexicana. Son tierras que el Estado entregó a comunidades campesinas. Desde las reformas constitucionales de 1992, los ejidatarios pueden dominicar sus parcelas y convertirlas en propiedad privada mediante un proceso de regularización.' },
                            { q: '¿Se puede comprar un terreno ejidal de forma legal?', a: 'Sí, siempre que se sigan los pasos correctos: verificar en el RAN, confirmar si la parcela tiene dominio pleno, contratar un abogado en derecho agrario y formalizar ante notario una vez regularizada.' },
                            { q: '¿Cuál es la diferencia entre terreno ejidal y terreno urbano?', a: 'El terreno ejidal se registra en el RAN, suele ser más accesible en precio pero requiere regularización para escriturarse. El terreno urbano tiene escritura pública e inscripción en el RPP, puede usarse como garantía hipotecaria y por lo general tiene servicios, pero su costo por m² es mayor.' },
                            { q: '¿Puedo obtener un crédito hipotecario para un terreno ejidal?', a: 'No directamente. Un terreno ejidal sin dominio pleno no puede usarse como garantía hipotecaria. Una vez que obtiene dominio pleno y se escritura como propiedad privada, sí puede utilizarse como garantía.' },
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
                    <p className="text-[#D5A556] font-bold text-sm uppercase tracking-widest mb-3">¿Tienes dudas sobre un terreno específico?</p>
                    <h3 className="text-2xl md:text-3xl font-black mb-3">Platica con nosotros, sin compromiso.</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Nuestro equipo te ayuda a entender las condiciones jurídicas del terreno que te interesa, sea ejidal o urbano.
                    </p>
                    <Link href="/propiedades" className="inline-block bg-[#D5A556] hover:bg-[#c49345] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base">
                        Ver terrenos disponibles ↗
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
