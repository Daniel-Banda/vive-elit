const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://niahcrjemxlzgfybyuha.supabase.co',
    'sb_publishable_J0dmS-uCymntGxOf9KC9fg_7UuN8lGp'
);

async function checkSchema() {
    const { data, error } = await supabase
        .from('Propiedades')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error fetching data:', error);
    } else if (data && data.length > 0) {
        console.log('Columns in Propiedades:', Object.keys(data[0]));
        console.log('Sample data:', data[0]);
    } else {
        console.log('Table is empty or no data returned.');
    }
}

checkSchema();
