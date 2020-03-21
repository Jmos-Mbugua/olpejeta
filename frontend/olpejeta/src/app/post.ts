export interface Bird {
    _id: string;
    common_name:string;
    scientific_name:string;
}

export interface Sighting {
    id: number,
    birds_count: string,
    date_taken: number,
}