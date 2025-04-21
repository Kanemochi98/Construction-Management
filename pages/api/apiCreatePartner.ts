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

export async function  apiCreatePartner({ data }) {
    console.log('parter Api');
    console.log(data);
    // const res = await fetcher('/partners/create',{
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });
    return data;
    // return res;
    
}

export async function apiUpdatePartner(id: string, { data }) {
    const res = await fetcher(`/partners/update/${id}`, { 
      method: 'PATCH',
      body: JSON.stringify(data),
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