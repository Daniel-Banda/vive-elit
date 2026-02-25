export function slugify(text: string): string {
    return text
        .toString()
        .normalize('NFD')                   // split an accented letter in the base letter and the accent
        .replace(/[\u0300-\u036f]/g, '')   // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')              // replace spaces with hyphens
        .replace(/[^\w-]+/g, '')           // remove all non-word chars
        .replace(/--+/g, '-');             // replace multiple hyphens with a single hyphen
}
