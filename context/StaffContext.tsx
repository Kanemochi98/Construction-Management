import { createContext, useContext, useEffect, useState } from "react";
import { Staff } from '@/types/staff';
import { apiCreateStaff, apiGetStaffs, apiUpdateStaff, apiSoftDelete, apiGetStaff } from '@/pages/api/apiCreateStaff';

interface StaffContextType{
    staffList: Staff[];
    fetchStaff: () => Promise<void>;
    fetchStaffId: (id: string) => Promise<void>;
    createStaff: (staff: Staff) => Promise<void>;
    updateStaff: (id: string, staff: Staff) => Promise<void>;
    softDeleteStaff: (id: string) => Promise<void>
}
const StaffContext = createContext<StaffContextType | undefined>(undefined);

export const StaffProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {

    const [staffList, setStaffList] = useState<Staff[]>([]);

    const fetchStaff = async () => {
        const res = await apiGetStaffs() as { data: Staff[] };
        setStaffList(res.data);
    }

    const fetchStaffId = async (id: string) => {
        const res = await apiGetStaff(id) as { data: Staff[] };
        return res.data
    }

    const createStaff = async (staff: Staff) => {
        await apiCreateStaff({ staff });
        fetchStaff();
    }

    const updateStaff = async (id: string, staff: Staff) => {
        await apiUpdateStaff(id,{ data: staff });
        fetchStaff();
    }

    const softDeleteStaff = async (id: string) => {
        await apiSoftDelete(id);
        await fetchStaff();
    }

    useEffect(() => {
        fetchStaff();
    }, []);

    // const handleChange = (event: React.FormEvent) => {
    //     const { name, value } = event.target;

    //     setStaffList((prev) => (
    //         { ...prev, [name]: value }
    //     ))
    // }

    return (
        <StaffContext.Provider value=
        {{ 
            staffList,
            fetchStaff,
            fetchStaffId, 
            createStaff,
            updateStaff,
            softDeleteStaff,
            // handleChange
        }}>

            {children}
        </StaffContext.Provider>
    )
};

export const useStaff = () => {
    const context = useContext(StaffContext);
    if (!context) throw new Error('useStaff must be used within StaffProvider');
    return context;
};
