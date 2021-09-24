//export declare module User {

    export interface Geo {
        lat: string;
        lng: string;
    }

    export interface Address {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }

    export interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    export interface UserModel {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
        address: Address;
        company: Company;
    }

//}

