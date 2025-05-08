export interface staff {
    id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    department: string;
    role: string;
    address?: string;
    image?: string
}
  
export interface StaffList {
    image: string,
    name: string,
    department: string,
    phone: string,
    email: string,
    address: string,
    role: string,
}