export const getStaff = async() => {
    const staffs = await fetch(`${process.env.API_URL}/staffs`)
    return staffs.json();
}