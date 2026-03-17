import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '¿Cómo comprar una casa en México? Guía paso a paso para 2026 | Vive Elit',
    description: 'Guía completa para comprar casa en México en 2026: crédito Infonavit, bancario, Fovissste, costos reales, documentos necesarios, errores comunes y preguntas frecuentes.',
    keywords: ['comprar casa México 2026', 'crédito hipotecario México', 'Infonavit', 'Fovissste', 'proceso compra casa', 'gastos notariales', 'Vive Elit'],
    openGraph: {
        title: '¿Cómo comprar una casa en México? Guía paso a paso para 2026 | Vive Elit',
        description: 'Todo lo que necesitas saber: tipos de crédito, costos reales, documentos necesarios y errores comunes.',
        url: 'https://viveelit.com/blog/1',
        siteName: 'Vive Elit',
        images: [{
            url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            width: 1200,
            height: 630,
            alt: 'Familia mexicana comprando su primera casa',
        }],
        type: 'article',
        publishedTime: '2026-03-01T00:00:00.000Z',
        modifiedTime: '2026-03-17T00:00:00.000Z',
        authors: ['Equipo Editorial Inmobiliario — Vive Elit'],
    },
    twitter: {
        card: 'summary_large_image',
        title: '¿Cómo comprar una casa en México? Guía 2026 | Vive Elit',
        description: 'Todo sobre créditos hipotecarios, costos reales, documentos y proceso de compra en México.',
        images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    },
};

export default function BlogPost() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '¿Cómo comprar una casa en México? Guía paso a paso para 2026',
        description: 'Guía completa para comprar casa en México en 2026: crédito Infonavit, bancario, Fovissste, costos reales, documentos necesarios, errores comunes y preguntas frecuentes.',
        image: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
        datePublished: '2026-03-01T00:00:00.000Z',
        dateModified: '2026-03-17T00:00:00.000Z',
        author: [{ '@type': 'Organization', name: 'Equipo Editorial Inmobiliario — Vive Elit', url: 'https://viveelit.com' }],
        publisher: { '@type': 'Organization', name: 'Vive Elit', url: 'https://viveelit.com' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://viveelit.com/blog/1' },
        articleSection: 'Guía de Compra',
        keywords: 'comprar casa México, crédito hipotecario, Infonavit, Fovissste, gastos notariales',
        about: { '@type': 'Thing', name: 'Compra de bienes raíces en México' },
        inLanguage: 'es-MX',
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Cuánto dinero necesito ahorrado para comprar una casa en México?',
                acceptedAnswer: { '@type': 'Answer', text: 'Para un crédito bancario necesitas entre el 20–30% del valor del inmueble: el 10–20% de enganche más el 8–12% de gastos notariales, avalúo e impuestos. Para una propiedad de $1,500,000 MXN, planea tener al menos $350,000–$450,000 disponibles.' }
            },
            {
                '@type': 'Question',
                name: '¿Cuánto tiempo tarda el proceso de compra de una casa en México?',
                acceptedAnswer: { '@type': 'Answer', text: 'En promedio, de 45 a 90 días hábiles desde que se firma el contrato de promesa hasta que recibes las llaves con escrituras. Con crédito Infonavit puede extenderse un poco más.' }
            },
            {
                '@type': 'Question',
                name: '¿Puedo comprar una casa siendo trabajador independiente o freelance?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los bancos aceptan declaraciones anuales de ISR, estados de cuenta y contratos de servicios. Necesitarás al menos 2 años de historial fiscal.' }
            },
            {
                '@type': 'Question',
                name: '¿Es mejor comprar casa nueva o usada?',
                acceptedAnswer: { '@type': 'Answer', text: 'Las casas nuevas ofrecen garantía de construcción. Las usadas suelen estar mejor ubicadas y tienen precio más negociable, pero requieren mayor revisión estructural.' }
            },
            {
                '@type': 'Question',
                name: '¿Qué pasa si no pago mi hipoteca en México?',
                acceptedAnswer: { '@type': 'Answer', text: 'Después de 3 pagos consecutivos incumplidos, el banco puede iniciar un proceso de adjudicación. Antes de llegar a ese punto, existen opciones de reestructuración que conviene explorar con tu banco.' }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <div className="relative w-full h-[55vh] md:h-[65vh] bg-[#0F3451]">
                <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Familia mexicana frente a su nueva casa"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-[#D5A556] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
                                Guía de Compra
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 text-white leading-tight">
                            ¿Cómo comprar una casa en México?<br />
                            <span className="text-[#D5A556]">Guía paso a paso para 2026</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-300 text-sm font-medium">
                            <span>📅 Actualizado: Marzo 2026</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>⏱ 8 min de lectura</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>✍ Equipo Editorial Inmobiliario</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote banner */}
            <div className="bg-[#0F3451] text-white py-5 px-6">
                <div className="max-w-4xl mx-auto">
                    <blockquote className="text-center italic text-slate-300 text-base md:text-lg border-l-4 border-[#D5A556] pl-5 text-left">
                        "La casa propia sigue siendo la inversión más sólida que puede hacer una familia mexicana."
                    </blockquote>
                </div>
            </div>

            {/* Intro */}
            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

                <div className="bg-[#f8f6f1] border border-amber-200 rounded-2xl p-6 mb-10">
                    <p className="text-sm font-bold text-[#D5A556] uppercase tracking-widest mb-2">GUÍA PARA COMPRADORES PRIMERIZOS Y EXPERIMENTADOS</p>
                    <p className="text-slate-700 leading-relaxed">
                        Comprar una casa en México es uno de los pasos financieros más importantes de tu vida. Ya sea que uses Infonavit, Fovissste o un crédito bancario, esta guía responde las preguntas más frecuentes: ¿cuánto necesitas ahorrar?, ¿qué documentos se necesitan?, ¿cuáles son los costos ocultos? Todo explicado de forma clara y actualizada.
                    </p>
                </div>

                {/* Table of Contents */}
                <nav className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
                    <h2 className="text-sm font-bold text-[#0F3451] uppercase tracking-widest mb-4">Contenido de este artículo</h2>
                    <ol className="space-y-2 text-[#0F3451] text-sm font-medium">
                        {[
                            '¿Es buen momento para comprar casa en México?',
                            'Tipos de crédito hipotecario disponibles',
                            'Proceso de compra paso a paso',
                            'Costos totales al comprar una casa',
                            'Documentos necesarios',
                            'Errores que debes evitar',
                            'Preguntas frecuentes (FAQ)',
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start hover:text-[#D5A556] transition-colors">
                                <span className="text-[#D5A556] font-black">{i + 1}.</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Section 1 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        1. ¿Es buen momento para comprar casa en México?
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-5">
                        En 2026, el mercado inmobiliario en México mantiene una demanda sostenida, especialmente en ciudades con crecimiento económico y presencia de nearshoring como Monterrey, Guadalajara, Ciudad Juárez y el Bajío. Aunque las tasas hipotecarias se han moderado respecto a años anteriores, siguen siendo un factor clave en tu decisión.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-[#D5A556] rounded-r-xl p-5 mb-5">
                        <p className="text-sm font-bold text-[#D5A556] mb-1">Dato clave</p>
                        <p className="text-slate-700 text-sm leading-relaxed">Según la CONAVI, el déficit habitacional en México supera los 9 millones de viviendas, lo que sostiene el valor de los inmuebles a largo plazo. Comprar hoy es proteger tu patrimonio contra la inflación.</p>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                        La respuesta corta: si tienes empleo estable, enganche disponible y un plazo de al menos 5 años para quedarte en la propiedad, es una decisión financiera sólida en casi cualquier momento del ciclo económico.
                    </p>
                </section>

                {/* Section 2 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        2. Tipos de crédito hipotecario en México
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { title: 'Infonavit', body: 'Es el crédito más accesible para trabajadores formales. Se descuenta directo del salario y no requiere enganche adicional si tus puntos son suficientes. Aplica para viviendas nuevas y usadas.' },
                            { title: 'Fovissste', body: 'Exclusivo para trabajadores del Estado. Ofrece condiciones similares a Infonavit con tasas fijas y pagos descontados de nómina.' },
                            { title: 'Crédito bancario', body: 'La opción más flexible en montos y tipos de propiedad. Tasas actuales oscilan entre el 10% y 13% anual. Requiere enganche mínimo del 10% al 20% del valor del inmueble.' },
                            { title: 'Cofinavit / crédito cofinanciado', body: 'Combina tu crédito Infonavit con un crédito bancario para comprar propiedades de mayor valor. Ideal si tus puntos no alcanzan el precio de la vivienda que buscas.' },
                        ].map((card, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                                <h3 className="font-black text-[#0F3451] mb-2">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 bg-[#0F3451]/5 border border-[#0F3451]/10 rounded-xl p-4">
                        <p className="text-sm text-slate-600"><span className="font-bold text-[#0F3451]">Tip:</span> Antes de elegir banco, usa el comparador de crédito hipotecario de la CONDUSEF para encontrar la CAT (Costo Anual Total) más bajo entre instituciones.</p>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-8 border-l-4 border-[#D5A556] pl-5">
                        3. Proceso de compra: los 8 pasos
                    </h2>
                    <div className="space-y-4">
                        {[
                            { n: 1, title: 'Define tu presupuesto', body: 'Calcula cuánto puedes pagar mensualmente: no más del 30% de tu ingreso neto.' },
                            { n: 2, title: 'Pre-aprobación de crédito', body: 'Solicita una pre-aprobación bancaria o verifica tus puntos Infonavit antes de buscar propiedades.' },
                            { n: 3, title: 'Busca la propiedad', body: 'Define zona, tipo de inmueble y características. Trabaja con un agente inmobiliario certificado.' },
                            { n: 4, title: 'Oferta y negociación', body: 'Presenta una oferta formal. El precio de lista generalmente tiene un margen de negociación del 3–8%.' },
                            { n: 5, title: 'Contrato de promesa', body: 'Firma el contrato de promesa de compraventa con un anticipo del 5–10% del valor.' },
                            { n: 6, title: 'Avalúo y estudio de título', body: 'El banco solicita el avalúo; el notario revisa que la propiedad no tenga gravámenes ni adeudos.' },
                            { n: 7, title: 'Firma ante notario', body: 'Se firma la escritura pública. El notario registra la transacción ante el Registro Público de la Propiedad.' },
                            { n: 8, title: 'Entrega de llaves', body: 'Una vez inscrita la escritura, recibes las llaves. El proceso total toma entre 30 y 90 días hábiles.' },
                        ].map((step) => (
                            <div key={step.n} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0F3451] text-white font-black text-lg flex items-center justify-center">
                                    {step.n}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0F3451] mb-1">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{step.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 4 - Cost Table */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-5 border-l-4 border-[#D5A556] pl-5">
                        4. Costos totales al comprar una casa <span className="text-base font-medium text-slate-500">(los que nadie te dice)</span>
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">El precio de lista es solo una parte de lo que pagas. Aquí los costos reales que debes considerar:</p>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-[#0F3451] text-white">
                                <tr>
                                    <th className="text-left px-5 py-3 font-bold">Concepto</th>
                                    <th className="text-left px-5 py-3 font-bold">Porcentaje aprox.</th>
                                    <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Nota</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { concepto: 'Enganche', porc: '10–20% del valor', nota: 'Puede reducirse con Infonavit' },
                                    { concepto: 'Impuesto sobre adquisición (ISAI)', porc: '2–4.5% según estado', nota: 'Varía por municipio' },
                                    { concepto: 'Gastos notariales', porc: '3–6% del valor', nota: 'Honorarios + derechos de registro' },
                                    { concepto: 'Avalúo bancario', porc: '$3,000–$8,000 MXN', nota: 'Fijo, no porcentual' },
                                    { concepto: 'Comisión por apertura de crédito', porc: '1–2%', nota: 'Solo en créditos bancarios' },
                                    { concepto: 'Seguro de vida e inmueble', porc: '~0.3% anual', nota: 'Obligatorio con hipoteca' },
                                    { concepto: 'Total costos adicionales', porc: '~8–12% del valor', nota: 'Más el enganche' },
                                ].map((row, i) => (
                                    <tr key={i} className={i === 6 ? 'bg-amber-50 font-bold' : 'bg-white hover:bg-slate-50 transition-colors'}>
                                        <td className="px-5 py-3 text-[#0F3451]">{row.concepto}</td>
                                        <td className="px-5 py-3 text-slate-700">{row.porc}</td>
                                        <td className="px-5 py-3 text-slate-500 hidden md:table-cell">{row.nota}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4">
                        <p className="text-sm text-red-700"><span className="font-bold">⚠️ Atención:</span> Si el vendedor te dice "sin gastos de escrituración" o "con escrituras incluidas", verifica exactamente qué está cubriendo. Muchas veces solo incluye una parte del costo notarial total.</p>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        5. Documentos necesarios para comprar casa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h3 className="font-black text-[#0F3451] mb-3 flex items-center gap-2">
                                <span className="text-[#D5A556]">●</span> Del comprador
                            </h3>
                            <ul className="text-slate-600 text-sm space-y-2 leading-relaxed">
                                {['Identificación oficial vigente (INE/pasaporte)', 'RFC y CURP', 'Comprobante de domicilio reciente', 'Estados de cuenta bancarios (últimos 3–6 meses)', 'Comprobantes de ingresos (nómina o declaraciones fiscales)', 'Historial crediticio limpio en Buró de Crédito'].map((d, i) => (
                                    <li key={i} className="flex gap-2"><span className="text-[#D5A556] flex-shrink-0">✓</span>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h3 className="font-black text-[#0F3451] mb-3 flex items-center gap-2">
                                <span className="text-[#D5A556]">●</span> De la propiedad
                            </h3>
                            <ul className="text-slate-600 text-sm space-y-2 leading-relaxed">
                                {['Escrituras actualizadas', 'Boletas prediales al corriente', 'Planos arquitectónicos (en caso de casa)', 'Certificado de libertad de gravamen del Registro Público', 'Constancia de no adeudo de servicios (agua, mantenimiento)'].map((d, i) => (
                                    <li key={i} className="flex gap-2"><span className="text-[#D5A556] flex-shrink-0">✓</span>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        6. Errores más comunes al comprar casa en México
                    </h2>
                    <div className="space-y-4">
                        {[
                            { n: '#1', title: 'No revisar el título de propiedad', body: 'Comprar sin verificar que el vendedor sea el legítimo propietario o sin detectar gravámenes puede llevarte a perder tu inversión. Siempre usa un notario de confianza.' },
                            { n: '#2', title: 'Sobreendeudarte', body: 'Si la mensualidad de tu hipoteca supera el 35% de tu ingreso, estás en zona de riesgo ante cualquier eventualidad. Compra dentro de tus posibilidades reales.' },
                            { n: '#3', title: 'Ignorar los gastos de mantenimiento', body: 'Una propiedad tiene costos anuales de mantenimiento equivalentes al 1–2% de su valor. Inclúyelos en tu planeación financiera.' },
                            { n: '#4', title: 'No comparar opciones hipotecarias', body: 'La diferencia entre una tasa del 10.5% y una del 12% en un crédito de $2 millones MXN puede significar más de $500,000 pesos en intereses adicionales durante 20 años.' },
                        ].map((err) => (
                            <div key={err.n} className="flex gap-4 items-start border border-red-100 bg-red-50/50 rounded-2xl p-5">
                                <div className="flex-shrink-0 font-black text-red-400 text-sm bg-red-100 px-2 py-1 rounded-lg">Error {err.n}</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">{err.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{err.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 7 - FAQ */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        7. Preguntas frecuentes (FAQ)
                    </h2>
                    <div className="space-y-5">
                        {[
                            { q: '¿Cuánto dinero necesito ahorrado para comprar una casa en México?', a: 'Para un crédito bancario necesitas entre el 20–30% del valor del inmueble: el 10–20% de enganche más el 8–12% de gastos notariales, avalúo e impuestos. Para una propiedad de $1,500,000 MXN, planea tener al menos $350,000–$450,000 disponibles.' },
                            { q: '¿Cuánto tiempo tarda el proceso de compra de una casa en México?', a: 'En promedio, de 45 a 90 días hábiles desde que se firma el contrato de promesa hasta que recibes las llaves con escrituras. Con crédito Infonavit puede extenderse un poco más dependiendo de la institución.' },
                            { q: '¿Puedo comprar una casa siendo trabajador independiente o freelance?', a: 'Sí. Los bancos aceptan comprobantes de ingresos alternativos: declaraciones anuales de ISR, estados de cuenta, contratos de servicios. Necesitarás al menos 2 años de historial fiscal. Algunos bancos ofrecen productos específicos para este perfil.' },
                            { q: '¿Es mejor comprar casa nueva o usada?', a: 'Depende de tu prioridad. Las casas nuevas ofrecen garantía de construcción y habitabilidad inmediata. Las usadas suelen estar mejor ubicadas y tienen precio más negociable, pero requieren mayor revisión estructural y de documentación.' },
                            { q: '¿Qué pasa si no pago mi hipoteca en México?', a: 'Después de 3 pagos consecutivos incumplidos, el banco puede iniciar un proceso de adjudicación. Esto puede tardar 1–3 años en México. Antes de llegar a ese punto, existen opciones de reestructuración que conviene explorar con tu banco.' },
                        ].map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                                <div className="bg-[#0F3451]/5 px-6 py-4">
                                    <h3 className="font-bold text-[#0F3451] text-base">{faq.q}</h3>
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
                    <h3 className="text-2xl md:text-3xl font-black mb-3">¿Listo para encontrar tu próxima propiedad?</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Nuestro equipo de asesores certificados te acompaña en cada paso del proceso, sin costo adicional para el comprador.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-[#D5A556] hover:bg-[#c49345] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base"
                    >
                        Hablar con un asesor ↗
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
