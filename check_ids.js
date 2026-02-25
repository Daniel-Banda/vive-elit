const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://niahcrjemxlzgfybyuha.supabase.co',
    'sb_publishable_J0dmS-uCymntGxOf9KC9fg_7UuN8lGp'
);

async function checkIds() {
    const { data, error } = await supabase
        .from('Propiedades')
        .select('ID, Titulo')
        .order('ID', { ascending: true });

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        data.forEach(d => console.log(`ID: ${d.ID} -> ${d.Titulo}`));
    }
}

checkIds();
