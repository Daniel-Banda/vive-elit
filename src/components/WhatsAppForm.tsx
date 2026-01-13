"use client";

import { useState } from "react";

export default function WhatsAppForm() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            alert("Por favor completa el nombre y el mensaje.");
            return;
        }

        const text = `Hola, soy ${formData.name}. \n\nMensaje: ${formData.message}`;

        const whatsappUrl = `https://wa.me/523121222277?text=${encodeURIComponent(
            text
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="flex-1 p-12 md:p-20">
            <h1 className="text-4xl font-serif text-slate-900 mb-8">
                ¿En qué podemos <br /> ayudarte hoy?
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-slate-200 py-4 outline-none focus:border-blue-600 transition"
                ></textarea>
                <button
                    type="submit"
                    className="bg-slate-900 text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-all mt-8"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}
