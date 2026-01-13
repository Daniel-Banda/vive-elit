
export const metadata = {
    title: "Aviso de Privacidad | Vive Elit",
    description: "Aviso de Privacidad de Vive Elit Inmobiliaria conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif text-slate-900 mb-8">Aviso de Privacidad</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>
                        VIVE ELIT INMOBILIARIA, con domicilio en Colima, México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                    </p>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">¿Para qué fines utilizaremos sus datos personales?</h2>
                    <p>
                        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Proveer los servicios de intermediación inmobiliaria que ha solicitado.</li>
                        <li>Facilitar la compra, venta o renta de bienes inmuebles.</li>
                        <li>Confirmar su identidad y verificar la información proporcionada.</li>
                        <li>Elaborar los contratos y documentos legales necesarios.</li>
                        <li>Dar cumplimiento a obligaciones regulatorias.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">¿Qué datos personales utilizaremos para estos fines?</h2>
                    <p>
                        Para llevar a cabo las finalidades descritas en este aviso de privacidad, utilizaremos los siguientes datos personales:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Datos de identificación (nombre, estado civil, firma, RFC, CURP, lugar y fecha de nacimiento, nacionalidad).</li>
                        <li>Datos de contacto (domicilio, correo electrónico, teléfonos).</li>
                        <li>Datos patrimoniales y/o financieros.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">Derechos ARCO</h2>
                    <p>
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
                    </p>
                    <p>
                        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: contacto@viveelit.mx
                    </p>

                    <h2 className="text-2xl font-serif text-slate-900 mt-8 mb-4">Cambios a este aviso de privacidad</h2>
                    <p>
                        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                    </p>
                    <p>
                        Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de este sitio web.
                    </p>

                    <p className="border-t border-slate-200 pt-8 mt-12 text-sm text-slate-500">
                        Última actualización: Enero 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
