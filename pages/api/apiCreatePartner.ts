import  fetcher  from "@/helper/fetcher";

export async function apiGetPartners() {
    const staffs = await fetcher('/partners/',{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return staffs;
} 

export async function apiGetPartner(id: string) {
    const res = await fetcher(`/partners/${id}`,{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res;
} 

export async function  apiCreatePartner({ partner }) {
    console.log('parter Api');
    console.log(partner);
    const res = await fetcher('/partners/create',{
        method: 'POST',
        body: JSON.stringify(partner),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    // if (!res.ok) {
    //     console.error('Error data:', partner); 
    //     throw new Error(partner.message || JSON.stringify(partner));
    //   }
    // return data;
    return res;
    
}

export async function apiUpdatePartner(id: string, { partner }) {
    const res = await fetcher(`/partners/update/${id}`, { 
      method: 'PATCH',
      body: JSON.stringify(partner),
    });
    console.log(res);
    return res; 
}

export async function apiSoftDelete(id: string) {
    const res = await fetcher(`/partners/soft-delete/${id}`, {
        method: 'DELETE',
    })
    return res;
}