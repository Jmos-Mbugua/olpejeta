export class User{
    id:number;
    user_name:string;
    user_password:null;
    user_email:string;
    user_contact:number;
    user_type:string;
}

// export class Bird{
//     _id: string;
//     common_name:string;
//     scientific_name:string;
//     bird_age:number;
//     general_status:string;
//     conservation_status:string;
//     species:string;
//     category:1;
//     bird_image_url:string;
//     bird_description:string;
// }

export class Sighting{
    id:number;
    location_id:number;
    user_id:number;
    no_of_birds:number;
    date_taken:number;
    user_type:string;
}

export class Species{
    id:number;
    species_name:string;
}