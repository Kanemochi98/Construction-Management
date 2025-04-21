import  fetcher  from "@/helper/fetcher";

export async function apiGetSites() {
    const staffs = await fetcher('/sites/',{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return staffs;
} 

export async function apiGetSite(id: string) {
    const res = await fetcher(`/sites/${id}`,{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res;
} 

export async function  apiCreateSite({ site }) {
    console.log('site api');
    console.log(site);
    const res = await fetcher('/sites/create',{
        method: 'POST',
        body: JSON.stringify(site),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    return res;
}

export async function apiUpdateSite(id: string, { data }) {
    const res = await fetcher(`/sites/update/${id}`, { 
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    console.log(res);
    return res; 
}

export async function apiSoftDelete(id: string) {
    const res = await fetcher(`/sites/soft-delete/${id}`, {
        method: 'DELETE',
    })
    return res;
}