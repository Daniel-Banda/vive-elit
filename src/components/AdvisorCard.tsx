import Image from 'next/image';

interface AdvisorProps {
    name: string;
    photoUrl: string;
    description: string;
    email: string;
    phone: string;
    whatsapp: string;
}

export default function AdvisorCard({ name, photoUrl, description, email, phone, whatsapp }: AdvisorProps) {
    return (
        <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl border border-slate-100/50 hover:border-slate-100 h-full flex flex-col items-start text-left relative overflow-hidden">
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full h-full flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white ring-1 ring-slate-100">
                        <Image
                            src={photoUrl}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight mb-1">{name}</h3>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500/80">Asesor Inmobiliario</p>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-slate-500 text-sm leading-8 font-light italic opacity-90">
                        "{description}"
                    </p>
                </div>

                <div className="space-y-4 mt-auto border-t border-slate-100 pt-6 w-full group-hover:border-blue-100 transition-colors">
                    <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600 transition-colors group/link">
                        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-blue-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        <span className="truncate">{email}</span>
                    </a>
                    <a href={`tel:${phone}`} className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600 transition-colors group/link">
                        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-blue-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        {phone}
                    </a>
                </div>

                <div className="w-full mt-6">
                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-green-500/20 group/btn whitespace-nowrap"
                    >
                        <span>Contactar por WhatsApp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="group-hover/btn:translate-x-1 transition-transform flex-shrink-0">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
