const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://niahcrjemxlzgfybyuha.supabase.co',
    'sb_publishable_J0dmS-uCymntGxOf9KC9fg_7UuN8lGp'
);

async function main() {
    const { data, error } = await supabase
        .from('Propiedades')
        .select('ID, Titulo')
        .ilike('Titulo', '%San Angel%')
        .order('ID');

    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

main();
