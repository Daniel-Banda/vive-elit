import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'No compres un terreno sin antes ver esto — Guía Legal y Técnica 2026 | Vive Elit',
    description: 'Lista definitiva de verificación para comprar un terreno en México en 2026: certeza jurídica, gravámenes, servicios, uso de suelo y checklist completo antes de firmar.',
    keywords: ['comprar terreno México 2026', 'verificación legal terreno', 'certeza jurídica terreno', 'libre de gravamen', 'uso de suelo', 'registro público propiedad', 'Infonavit terreno', 'Vive Elit'],
    openGraph: {
        title: 'No compres un terreno sin antes ver esto | Vive Elit',
        description: 'La lista definitiva de verificación legal, técnica y documental para no perder tu inversión en la compra de un terreno en México.',
        url: 'https://viveelit.com/blog/2',
        siteName: 'Vive Elit',
        images: [{
            url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            width: 1200,
            height: 630,
            alt: 'Terreno en venta en México con documentación legal',
        }],
        type: 'article',
        publishedTime: '2026-03-01T00:00:00.000Z',
        modifiedTime: '2026-03-17T00:00:00.000Z',
        authors: ['Equipo Legal Inmobiliario — Vive Elit'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'No compres un terreno sin antes ver esto | Vive Elit',
        description: 'La lista definitiva de verificación legal, técnica y documental para comprar un terreno en México sin perder tu inversión.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
    },
};

export default function BlogPost2() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'No compres un terreno sin antes ver esto — Guía Legal y Técnica 2026',
        description: 'Lista definitiva de verificación para comprar un terreno en México en 2026: certeza jurídica, gravámenes, servicios, uso de suelo y checklist completo.',
        image: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
        datePublished: '2026-03-01T00:00:00.000Z',
        dateModified: '2026-03-17T00:00:00.000Z',
        author: [{ '@type': 'Organization', name: 'Equipo Legal Inmobiliario — Vive Elit', url: 'https://viveelit.com' }],
        publisher: { '@type': 'Organization', name: 'Vive Elit', url: 'https://viveelit.com' },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://viveelit.com/blog/2' },
        articleSection: 'Terrenos',
        keywords: 'comprar terreno México, certeza jurídica, libre de gravamen, uso de suelo, escrituración',
        inLanguage: 'es-MX',
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Puedo comprar un terreno ejidal en México?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí, pero solo si el terreno ya tiene dominio pleno, es decir, fue desincorporado del régimen ejidal mediante asamblea y certificado por el RAN. Sin dominio pleno, solo puedes adquirir derechos de posesión, lo cual no te da propiedad legal.' }
            },
            {
                '@type': 'Question',
                name: '¿Qué es una anotación preventiva y por qué importa?',
                acceptedAnswer: { '@type': 'Answer', text: 'Es una restricción temporal inscrita en el RPP que puede indicar un juicio pendiente, una herencia sin resolver o un litigio. Aunque no es un gravamen definitivo, bloquea la compraventa y debe resolverse antes de escriturar.' }
            },
            {
                '@type': 'Question',
                name: '¿El contrato de promesa me protege al comprar un terreno?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí, siempre que esté firmado ante notario y contenga: descripción exacta del predio, precio, forma de pago, plazo máximo para escriturar y cláusula penal. Un contrato privado sin notario tiene validez limitada.' }
            },
            {
                '@type': 'Question',
                name: '¿Cuánto tiempo tarda escriturar un terreno en México?',
                acceptedAnswer: { '@type': 'Answer', text: 'En promedio, 30–60 días hábiles desde la firma del contrato de promesa. Puede extenderse si hay documentos faltantes, adeudos que saldar o trámites ante el RAN en caso de terrenos con historial ejidal.' }
            },
            {
                '@type': 'Question',
                name: '¿Puedo escriturar un terreno sin agua ni drenaje?',
                acceptedAnswer: { '@type': 'Answer', text: 'Sí, técnicamente la escrituración no requiere que los servicios estén conectados. Sin embargo, para obtener licencia de construcción sí se requerirá acreditar el acceso a servicios o presentar soluciones alternativas certificadas.' }
            },
        ]
    };

    const checklistItems = {
        juridica: [
            'Escritura pública ante notario', 'Inscripción vigente en el RPP', 'Folio real coincide con escritura',
            'Vendedor = titular registrado', 'Sin historial ejidal problemático', 'DOF verificado (si aplica ejido)',
            'Plano con medidas y colindancias', 'Perito topógrafo certifica superficie',
        ],
        gravamen: [
            'Certificado libertad de gravamen', 'Predial al corriente (5 años)', 'Sin embargos ni anotaciones',
            'Sin juicios ni litigios activos', 'Sin servidumbres ocultas', 'Sin hipotecas vigentes',
            'Adeudos de agua saldados', 'Sin restricciones de dominio',
        ],
        servicios: [
            'Factibilidad de agua potable', 'Factibilidad de drenaje/alcantarillado', 'Factibilidad eléctrica CFE',
            'Acceso por vía pública', 'Constancia de uso de suelo', 'PDU no indica zona de riesgo',
            'COS y CUS conocidos', 'Gas natural o LP viable',
        ],
        docs: [
            'Docs del vendedor completos', 'Docs del comprador completos', 'Notario seleccionado',
            'Presupuesto notarial solicitado', 'Avalúo bancario realizado', 'ISR del vendedor calculado',
            'ISAI calculado', 'Forma de pago definida y segura',
        ],
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* Hero */}
            <div className="relative w-full h-[55vh] md:h-[65vh] bg-[#0F3451]">
                <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Vista aérea de terreno en venta en México"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-[#D5A556] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Terrenos</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 text-white leading-none">
                            No compres un terreno<br />
                            <span className="text-[#D5A556]">sin antes ver esto.</span>
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg mb-5 font-light max-w-2xl">
                            La lista definitiva de verificación legal, técnica y documental para no perder tu inversión en la compra de un terreno en México.
                        </p>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400 text-sm font-medium">
                            <span>📅 Actualizado: Marzo 2026</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>⏱ 10 min de lectura</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D5A556]" />
                            <span>✍ Equipo Legal Inmobiliario</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div className="bg-[#0F3451] border-t border-white/10">
                <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                        { stat: '9 de 10', label: 'fraudes inmobiliarios pueden evitarse con verificación documental' },
                        { stat: '40%', label: 'de los terrenos en venta tienen algún problema de título' },
                        { stat: '3–6 meses', label: 'puede tomar resolver un problema jurídico después de comprar' },
                    ].map((item, i) => (
                        <div key={i} className="border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 pb-4 sm:pb-0 sm:pr-6 last:pr-0">
                            <div className="text-2xl font-black text-[#D5A556] mb-1">{item.stat}</div>
                            <div className="text-slate-400 text-xs leading-relaxed">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">

                {/* Intro */}
                <div className="bg-[#f8f6f1] border border-amber-200 rounded-2xl p-6 mb-12">
                    <p className="text-slate-700 leading-relaxed">
                        Comprar un terreno en México puede ser una de las mejores inversiones de tu vida, o una de las peores pesadillas. La diferencia está en la verificación previa. Cada año, miles de familias pierden sus ahorros por no revisar la certeza jurídica, los gravámenes o la viabilidad de servicios antes de firmar. Esta guía te dice exactamente qué revisar, punto por punto.
                    </p>
                </div>

                {/* Section 1 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        1. Certeza Jurídica
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Este es el pilar más importante. Sin certeza jurídica, todo lo demás es irrelevante. La certeza jurídica garantiza que el vendedor es el legítimo dueño y que el terreno puede transmitirse legalmente a tu nombre.
                    </p>

                    {[
                        {
                            num: '1.1', title: 'Publicación en el DOF',
                            body: 'Para terrenos derivados de ejidos o zonas que han pasado por procesos de regularización, el DOF es la fuente oficial donde se publica la expropiación, dotación o desincorporación del régimen ejidal.',
                            tip: '¿Cómo verificarlo? Consulta el portal del DOF en dof.gob.mx con el nombre del ejido o la resolución presidencial. También puedes acudir al Registro Agrario Nacional (RAN).',
                            tipColor: 'blue',
                        },
                        {
                            num: '1.2', title: 'Escritura pública ante notario',
                            body: 'El terreno debe tener una escritura pública inscrita ante notario y registrada en el Registro Público de la Propiedad (RPP) del municipio correspondiente.',
                            tip: 'Riesgo crítico: Los contratos privados de compraventa o cesiones de derechos sin escritura notarial NO te dan la propiedad legal del terreno. Exige siempre escritura pública.',
                            tipColor: 'red',
                        },
                        {
                            num: '1.3', title: 'Inscripción en el Registro Público de la Propiedad',
                            body: 'Solicita al vendedor el folio real o el número de inscripción del predio en el RPP. Verifica que el nombre del vendedor coincida exactamente con el titular registrado.',
                            tip: null, tipColor: 'blue',
                        },
                        {
                            num: '1.4', title: 'Régimen de propiedad: privado, ejidal o comunal',
                            body: 'Determina si el terreno es propiedad privada, ejidal o comunal. Los terrenos ejidales requieren un proceso especial de dominio pleno ante la Asamblea Ejidal y el PROCEDE/FANAR antes de poder venderse como propiedad privada.',
                            tip: '¡Atención con terrenos ejidales! Un terreno ejidal sin dominio pleno NO puede escriturarse como propiedad privada. Verifica en el RAN si el terreno ya obtuvo su certificado de dominio pleno.',
                            tipColor: 'amber',
                        },
                        {
                            num: '1.5', title: 'Plano y superficie verificada',
                            body: 'El predio debe contar con un plano georreferenciado con medidas, colindancias y superficie certificada por un perito autorizado. Las variaciones mayores al 5% pueden implicar problemas con terrenos colindantes.',
                            tip: null, tipColor: 'blue',
                        },
                    ].map((item) => (
                        <div key={item.num} className="mb-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                                <h3 className="font-bold text-[#0F3451]">{item.num} — {item.title}</h3>
                            </div>
                            <div className="px-6 py-4 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                {item.tip && (
                                    <div className={`rounded-xl p-4 text-sm leading-relaxed ${item.tipColor === 'red' ? 'bg-red-50 border border-red-100 text-red-700' : item.tipColor === 'amber' ? 'bg-amber-50 border border-amber-200 text-amber-800' : 'bg-blue-50 border border-blue-100 text-blue-700'}`}>
                                        {item.tip}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 2 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        2. Libre de Gravamen
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Un gravamen es una carga legal sobre el terreno: hipoteca, embargo, servidumbre, usufructo o litigio pendiente. Si compras un terreno con gravamen, heredas el problema. Esta verificación es obligatoria y no negociable.
                    </p>
                    {[
                        { num: '2.1', title: 'Certificado de libertad de gravamen', body: 'Este es el documento más importante en esta etapa. Se obtiene en el RPP y certifica que el predio no tiene hipotecas, embargos ni anotaciones preventivas vigentes.', tip: 'Trámite: Solicita un Certificado de Inscripción actualizado directamente en el RPP de tu municipio. Tiene un costo aproximado de $200–$500 MXN y es válido por 30 días.', tipColor: 'blue' },
                        { num: '2.2', title: 'Adeudos de predial', body: 'Solicita al vendedor las boletas de predial de los últimos 5 años y verifica que estén al corriente. Los adeudos de predial son una carga real que se transmite al nuevo dueño.', tip: 'Cuidado: Algunos vendedores presentan boletas de pago antiguas para aparentar estar al corriente. Valida directamente en el sistema del municipio con el número de cuenta catastral.', tipColor: 'amber' },
                        { num: '2.3', title: 'Adeudos de agua y servicios', body: 'Verifica con el organismo operador de agua municipal que no existan adeudos. En terrenos que previamente tuvieron construcción, este punto es crítico.', tip: null, tipColor: 'blue' },
                        { num: '2.4', title: 'Litigios y juicios pendientes', body: 'Solicita al notario que realice una búsqueda en el Tribunal Superior de Justicia del estado para verificar que no existan demandas, juicios sucesorios o conflictos de posesión activos sobre el predio.', tip: null, tipColor: 'blue' },
                    ].map((item) => (
                        <div key={item.num} className="mb-6 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                                <h3 className="font-bold text-[#0F3451]">{item.num} — {item.title}</h3>
                            </div>
                            <div className="px-6 py-4 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                {item.tip && (
                                    <div className={`rounded-xl p-4 text-sm leading-relaxed ${item.tipColor === 'amber' ? 'bg-amber-50 border border-amber-200 text-amber-800' : 'bg-blue-50 border border-blue-100 text-blue-700'}`}>{item.tip}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 3 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        3. Viabilidad de Servicios
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Un terreno sin viabilidad de servicios puede ser económicamente inviable para construir. Antes de comprar, verifica que los servicios esenciales sean accesibles y a qué costo.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                        <strong>Recomendación clave:</strong> Solicita por escrito la "factibilidad de servicios" ante cada organismo correspondiente ANTES de firmar el contrato de promesa. Este documento tiene validez legal y protege tu inversión.
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: '💧', title: 'Agua potable', body: 'Solicita la factibilidad de dotación de agua ante el organismo operador municipal (SAPAM, CMAS, ODAPAS, etc.). Sin esto, podrías depender de pipas indefinidamente.' },
                            { icon: '🏗️', title: 'Drenaje y alcantarillado', body: 'Verifica si existe red de drenaje o si el terreno requerirá fosa séptica. El costo de instalación puede superar los $50,000 MXN.' },
                            { icon: '⚡', title: 'Energía eléctrica', body: 'Solicita la factibilidad de CFE. Para terrenos alejados, la extensión de línea eléctrica puede costar desde $30,000 hasta $500,000+ MXN.' },
                            { icon: '🔥', title: 'Gas natural', body: 'Verifica si la zona cuenta con red de gas natural o si se requerirá gas LP en tanque y considera el costo del tanque estacionario.' },
                            { icon: '🛣️', title: 'Vialidad y acceso', body: 'Confirma que el terreno tenga acceso por vía pública y no solo por servidumbre de paso, la cual puede ser cancelada o restringida.' },
                            { icon: '📶', title: 'Internet y telecomunicaciones', body: 'Para uso comercial o residencial moderno, verifica cobertura de fibra óptica o al menos conectividad de banda ancha en la zona.' },
                        ].map((srv, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                <div className="text-2xl mb-2">{srv.icon}</div>
                                <h3 className="font-bold text-[#0F3451] mb-1">{srv.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{srv.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 4 */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        4. Uso de Suelo y Zonificación
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        Conocer el uso de suelo es fundamental. Un terreno con uso de suelo agrícola NO puede utilizarse para construir vivienda sin un proceso de cambio de uso, que puede ser largo, costoso o incluso imposible.
                    </p>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-700">
                        <strong>Usos de suelo comunes:</strong> H1 (habitacional unifamiliar) · H2 (habitacional plurifamiliar) · C (comercial) · I (industrial) · AG (agrícola) · CR (conservación/reserva ecológica). Solo los primeros tres son aptos para construir inmediatamente.
                    </div>
                    {[
                        { num: '4.1', title: 'Constancia de uso de suelo', body: 'Solicita la constancia de uso de suelo en el Departamento de Desarrollo Urbano del municipio. Especifica qué tipo de construcción está permitida.' },
                        { num: '4.2', title: 'Plan de Desarrollo Urbano Municipal', body: 'Consulta el PDU vigente para verificar que el terreno no esté en zona de riesgo, reserva natural o área de preservación ecológica.', alert: 'Alerta: Terrenos en zonas de riesgo (laderas con pendiente mayor al 45%, cauces de ríos, barrancas) pueden tener documentos en orden pero ser no aptos para construcción según la Ley General de Asentamientos Humanos.', alertColor: 'red' },
                        { num: '4.3', title: 'Densidad e índice de edificación', body: 'El COS y el CUS determinan cuánto puedes construir. Por ejemplo, un terreno de 300 m² con COS de 0.6 solo permite construir 180 m² en planta baja.' },
                    ].map((item) => (
                        <div key={item.num} className="mb-5 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100"><h3 className="font-bold text-[#0F3451]">{item.num} — {item.title}</h3></div>
                            <div className="px-6 py-4 space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                {'alert' in item && item.alert && (
                                    <div className={`rounded-xl p-4 text-sm leading-relaxed ${item.alertColor === 'red' ? 'bg-red-50 border border-red-100 text-red-700' : 'bg-amber-50 border border-amber-200 text-amber-800'}`}>{item.alert}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 5 - Documents */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        5. Todo lo Necesario para Escriturar
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-6">
                        La escrituración es el paso que te convierte oficialmente en propietario. Sin escritura notarial inscrita en el RPP, no eres dueño ante la ley. Aquí los documentos que necesitas reunir:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h3 className="font-black text-[#0F3451] mb-4 flex items-center gap-2"><span className="text-[#D5A556]">●</span> Documentos del vendedor</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                {['Escritura del predio actualizada', 'Certificado libertad de gravamen (30 días)', 'Boletas prediales últimos 5 años al corriente', 'Identificación oficial vigente', 'RFC del vendedor con homoclave', 'CURP del vendedor', 'Acta de matrimonio (si aplica régimen conyugal)', 'Poder notarial (si vende un representante)', 'Estado civil del vendedor', 'Comprobante de domicilio del vendedor'].map((d, i) => (
                                    <li key={i} className="flex gap-2"><span className="text-[#D5A556] flex-shrink-0">✓</span>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                            <h3 className="font-black text-[#0F3451] mb-4 flex items-center gap-2"><span className="text-[#D5A556]">●</span> Documentos del comprador</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                {['Identificación oficial vigente (INE/Pasaporte)', 'RFC con homoclave', 'CURP', 'Comprobante de domicilio reciente', 'Acta de matrimonio (si aplica)', 'Régimen conyugal (sociedad/separación)', 'Estados de cuenta bancarios (origen de recursos)', 'Comprobante de ingresos o declaración fiscal', 'CLABE bancaria para transferencia', 'RFC del banco (si hay crédito hipotecario)'].map((d, i) => (
                                    <li key={i} className="flex gap-2"><span className="text-[#D5A556] flex-shrink-0">✓</span>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[#0F3451]/5 border border-[#0F3451]/10 rounded-xl p-5 text-sm text-slate-700">
                        <strong className="text-[#0F3451]">El rol del notario:</strong> El notario público verifica identidades, estudia el título de propiedad, calcula y retiene el ISR por enajenación del vendedor, calcula el ISAI a cargo del comprador, inscribe la escritura en el RPP y entrega copias certificadas.
                        <br /><br />
                        <strong className="text-[#0F3451]">Costo notarial:</strong> Los honorarios oscilan entre el 0.5% y el 1.5% del valor del predio, más los derechos de inscripción al RPP y el ISAI (2–4.5% según el estado). Pide un presupuesto desglosado antes de comenzar el trámite.
                    </div>
                </section>

                {/* Section 6 - Technical */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        6. Aspectos Técnicos y Físicos del Terreno
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Estudio de mecánica de suelos', body: 'Imprescindible antes de construir. Un terreno puede parecer sólido y resultar expansivo o inestable. Costo aprox.: $8,000–$25,000 MXN.' },
                            { title: 'Topografía y georreferenciación', body: 'Confirma que el predio físico corresponde exactamente a lo descrito en la escritura. Costo aprox.: $3,000–$8,000 MXN por perito certificado.' },
                            { title: 'Verificación de colindancias', body: 'Recorre el perímetro con el plano en mano. Los conflictos de colindancias son de los litigios más frecuentes y costosos.' },
                            { title: 'Condiciones de riesgo', body: 'Verifica si el terreno está en zona de inundación (Atlas de Riesgos del municipio), falla geológica o área de protección de cauces.' },
                            { title: 'Factibilidad de construcción', body: 'Solicita una visita con un arquitecto o ingeniero antes de comprar para identificar condiciones que encarecen la obra.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                                <h3 className="font-bold text-[#0F3451] mb-2">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 7 - Fiscal */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        7. Aspectos Fiscales que Debes Conocer
                    </h2>
                    <div className="space-y-4">
                        {[
                            { title: 'ISR por enajenación (cargo del vendedor)', body: 'El vendedor debe pagar el Impuesto Sobre la Renta por la ganancia obtenida. El notario lo retiene y lo entera al SAT.' },
                            { title: 'ISAI — Impuesto sobre Adquisición de Inmuebles (tu cargo)', body: 'Es el impuesto estatal que paga el comprador. Varía según el estado: Jalisco 2%, CDMX 3%, Nuevo León 2%, Colima 2%, Veracruz 2.5%. Se calcula sobre el valor más alto entre escritura, catastral y avalúo.' },
                            { title: 'IVA en terrenos', body: 'La venta de terrenos NO causa IVA cuando es para uso habitacional. Si el terreno es para uso comercial o industrial y el vendedor es persona moral, puede haber IVA del 16%.' },
                            { title: 'Deducibilidad de la compra', body: 'Si compras el terreno como persona física con actividad empresarial, algunos gastos son deducibles. Consulta a tu contador para optimizar tu estrategia fiscal.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start border border-slate-100 rounded-2xl p-5 shadow-sm">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D5A556]/20 text-[#D5A556] font-black text-sm flex items-center justify-center">{i + 1}</div>
                                <div>
                                    <h3 className="font-bold text-[#0F3451] mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-green-700">
                        <strong>Consejo fiscal:</strong> Conserva todos los comprobantes de gastos relacionados con la compra: notaría, avalúo, honorarios de agente, ISAI. Estos forman parte del costo de adquisición y reducen el ISR cuando vendas en el futuro.
                    </div>
                </section>

                {/* Checklist Maestro */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-2 border-l-4 border-[#D5A556] pl-5">
                        Checklist Maestro: Antes de Firmar
                    </h2>
                    <p className="text-slate-600 mb-8 pl-5">No firmes ningún contrato hasta haber verificado todos los puntos relevantes a tu caso.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: '⚖️ Certeza Jurídica', items: checklistItems.juridica },
                            { title: '🔓 Libre de Gravamen', items: checklistItems.gravamen },
                            { title: '🔌 Servicios y Uso de Suelo', items: checklistItems.servicios },
                            { title: '📋 Documentación para Escriturar', items: checklistItems.docs },
                        ].map((group, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                <h3 className="font-black text-[#0F3451] mb-4">{group.title}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 items-start text-sm text-slate-600">
                                            <span className="w-4 h-4 border-2 border-[#D5A556] rounded flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-14">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0F3451] mb-6 border-l-4 border-[#D5A556] pl-5">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-5">
                        {[
                            { q: '¿Puedo comprar un terreno ejidal en México?', a: 'Sí, pero solo si el terreno ya tiene dominio pleno, es decir, fue desincorporado del régimen ejidal mediante asamblea y certificado por el RAN. Sin dominio pleno, solo puedes adquirir derechos de posesión, lo cual no te da propiedad legal.' },
                            { q: '¿Qué es una anotación preventiva y por qué importa?', a: 'Es una restricción temporal inscrita en el RPP que puede indicar un juicio pendiente, una herencia sin resolver o un litigio. Aunque no es un gravamen definitivo, bloquea la compraventa. Debe resolverse antes de escriturar.' },
                            { q: '¿El contrato de promesa me protege?', a: 'Sí, siempre que esté firmado ante notario y contenga: descripción exacta del predio, precio, forma de pago, plazo máximo para escriturar y cláusula penal. Un contrato privado sin notario tiene validez limitada en caso de litigio.' },
                            { q: '¿Cuánto tiempo tarda escriturar un terreno en México?', a: 'En promedio, 30–60 días hábiles desde la firma del contrato de promesa. Puede extenderse si hay documentos faltantes, adeudos que saldar o trámites ante el RAN en caso de terrenos con historial ejidal.' },
                            { q: '¿Puedo escriturar un terreno sin agua ni drenaje?', a: 'Sí, técnicamente la escrituración no requiere que los servicios estén conectados. Sin embargo, para obtener licencia de construcción sí se requerirá acreditar el acceso a servicios o presentar soluciones alternativas certificadas.' },
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
                    <h3 className="text-2xl md:text-3xl font-black mb-3">¿Listo para verificar tu próximo terreno?</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                        Nuestros asesores especializados en compra de terrenos te acompañan en la revisión jurídica y técnica antes de que firmes cualquier documento.
                    </p>
                    <Link href="/contacto" className="inline-block bg-[#D5A556] hover:bg-[#c49345] text-white font-bold py-3 px-10 rounded-full transition-colors duration-300 text-base">
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
