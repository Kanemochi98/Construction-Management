export type Staff = {
    id: number | string;
    name: string;
    department: string;
    type: string;
    address: string;
    email: string;
    phone: string;
    imageURL: string;
    // password: string;
    // role: string;
    // image: string;
    dropZoneId: string | number;
}

export type Site = {
    id: number ;
    name: string;
    customerName : string;
    staffName : string;
    location : string;
}

export type Home = {
    id: number | string;
    siteName: string;
    customerName: string;
    staffName: string;
    location: string;
    operation: string;
}