
export const metadata = {
    title: "Política de Cookies | Vive Elit",
    description: "Política de Cookies de Vive Elit Inmobiliaria. Conozca cómo utilizamos las cookies para mejorar su experiencia.",
};

export default function CookiesPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif text-slate-900 mb-8">Política de Cookies</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>
                        En Vive Elit Inmobiliaria utilizamos cookies para mejorar su experiencia de navegación y ofrecerle un servicio más personalizado.
                    </p>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">¿Qué son las cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador o dispositivo móvil cuando los visita. Permiten que el sitio web recuerde sus acciones y preferencias (como el inicio de sesión, el idioma, el tamaño de la letra y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese al sitio o navegue de una página a otra.
                    </p>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">¿Cómo utilizamos las cookies?</h2>
                    <p>
                        Utilizamos cookies para diversas finalidades, entre las que se incluyen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento del sitio web. Nos permiten recordar sus preferencias de privacidad y configuración.</li>
                        <li><strong>Cookies de rendimiento y análisis:</strong> Nos ayudan a entender cómo interactúan los visitantes con nuestro sitio web, proporcionando información sobre las áreas visitadas, el tiempo de permanencia y cualquier problema encontrado, como mensajes de error. Esto nos ayuda a mejorar el rendimiento del sitio.</li>
                        <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio web ofrezca una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por terceros cuyos servicios hemos añadido a nuestras páginas.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">Gestión de cookies</h2>
                    <p>
                        Usted puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para que eviten su colocación. Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
                    </p>
                    <p>
                        Para más información sobre cómo gestionar las cookies en su navegador, puede visitar la sección de ayuda del mismo.
                    </p>
                </div>
            </div>
        </div>
    );
}
