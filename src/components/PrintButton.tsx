"use client";

import { FileText } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 border border-[#0F3451] text-[#0F3451] hover:bg-gray-50 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all"
        >
            <FileText className="w-4 h-4" /> Descargar Ficha PDF
        </button>
    );
}
