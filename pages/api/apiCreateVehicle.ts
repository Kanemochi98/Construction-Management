import  fetcher  from "@/helper/fetcher";

export async function apiGetVehicles() {
    const staffs = await fetcher('/vehicles/',{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return staffs;
} 

export async function apiGetVehicle(id: string) {
    const res = await fetcher(`/vehicles/${id}`,{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res;
} 

export async function  apiCreateVehicle({ vehicle }) {
   
    const res = await fetcher('/vehicles/create',{
        method: 'POST',
        body: JSON.stringify(vehicle),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    return res;
}

export async function apiUpdateVehicle(id: string, { vehicle }) {
    const res = await fetcher(`/vehicles/update/${id}`, { 
      method: 'PATCH',
      body: JSON.stringify(vehicle),
    });
    console.log(res);
    return res; 
}

export async function apiSoftDelete(id: string) {
    const res = await fetcher(`/vehicles/soft-delete/${id}`, {
        method: 'DELETE',
    })
    return res;
}