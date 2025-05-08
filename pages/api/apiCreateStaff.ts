import  fetcher  from "@/helper/fetcher";
// eslint-disable-next-line react-hooks/rules-of-hooks
// export default async function fetchData(completed?: unknown) {
//   let path = '/staffs'
//   if(completed !== undefined){
//     path = `/staffs?completed=${completed}`
//   }
//   const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + path)
//   const data = await res.json()
// }

export async function apiGetStaffs() {
    const staffs = await fetcher('/staffs/',{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return staffs;
} 

export async function apiGetStaff(id: string) {
    const res = await fetcher(`/staffs/${id}`,{
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res;
} 

export async function  apiCreateStaff({ staff }) {
    const res = await fetcher('/staffs/create',{
        method: 'POST',
        body: JSON.stringify(staff),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    
    return res;
}

export async function apiUpdateStaff(id: string, { data }) {
    console.log(`API`);
    console.log(data);
    const res = await fetcher(`/staffs/update/${id}`, { 
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    console.log(res);
    return res; 
}

export async function apiSoftDelete(id: string) {
    const res = await fetcher(`/staffs/soft-delete/${id}`, {
        method: 'DELETE',
    })
    return res;
}