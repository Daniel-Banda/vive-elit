require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

// Usamos las variables de entorno para que no subas tus credenciales a GitHub
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Toma el nombre de la carpeta desde los argumentos de la línea de comandos
const folderName = process.argv[2];

if (!folderName) {
    console.error("❌ Error: Debes proporcionar el nombre de la carpeta.");
    console.log("👉 Uso: node scripts/export-cloudinary.js <nombre_carpeta>");
    process.exit(1);
}

console.log(`Buscando imágenes que contengan: '${folderName}' ...`);

cloudinary.search
    .expression(`${folderName}*`)
    .max_results(500)
    .execute()
    .then(result => {
        if (!result.resources || result.resources.length === 0) {
            console.log(`⚠️ No se encontraron imágenes que contengan '${folderName}'.`);
            process.exit(0);
        }

        // Extraemos las URLs seguras ordenadas por su nombre original (con orden natural para números)
        const sortedResources = result.resources.sort((a, b) =>
            a.public_id.localeCompare(b.public_id, undefined, { numeric: true, sensitivity: 'base' })
        );
        const urls = sortedResources.map(res => res.secure_url);

        console.log(`\n✅ ¡Éxito! Se encontraron ${urls.length} imágenes. Aquí tienes tu JSON listo para Supabase:\n`);
        console.log(JSON.stringify(urls, null, 2));
    })
    .catch(error => {
        console.error("❌ Error al conectar con Cloudinary. Verifica tus credenciales en .env.local", error);
        process.exit(1);
    });
