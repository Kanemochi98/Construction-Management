import { createContext, useContext, useEffect, useState } from "react";
import { Partner } from '@/types/partner';
import { apiCreatePartner, apiGetPartners, apiUpdatePartner, apiSoftDelete, apiGetPartner } from '@/pages/api/apiCreatePartner';

interface PartnerContextType{
    partnerList: Partner[];
    fetchPartner: () => Promise<void>;
    fetchPartnerId: (id: string) => Promise<void>;
    createPartner: (partner: Partner) => Promise<void>;
    updatePartner: (id: string, partner: Partner) => Promise<void>;
    softDeletePartner: (id: string) => Promise<void>
}
const PartnerContext = createContext<PartnerContextType | undefined>(undefined);

export const PartnerProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {

    const [partnerList, setPartnerList] = useState<Partner[]>([]);

    const fetchPartner = async () => {
        const res = await apiGetPartners() as { data: Partner[] };
        setPartnerList(res.data);
    }

    const fetchPartnerId = async (id: string) => {
        const res = await apiGetPartner(id) as { data: Partner[] };
        return res.data
    }

    const createPartner = async (partner: Partner) => {
        await apiCreatePartner({ partner });
        fetchPartner();
    }

    const updatePartner = async (id: string, partner: Partner) => {
        await apiUpdatePartner(id,{ partner });
        fetchPartner();
    }

    const softDeletePartner = async (id: string) => {
        await apiSoftDelete(id);
        await fetchPartner();
    }

    useEffect(() => {
        fetchPartner();
    }, []);

    // const handleChange = (event: React.FormEvent) => {
    //     const { name, value } = event.target;

    //     setPartnerList((prev) => (
    //         { ...prev, [name]: value }
    //     ))
    // }

    return (
        <PartnerContext.Provider value=
        {{ 
            partnerList,
            fetchPartner,
            fetchPartnerId, 
            createPartner,
            updatePartner,
            softDeletePartner,
            // handleChange
        }}>

            {children}
        </PartnerContext.Provider>
    )
};

export const usePartner = () => {
    const context = useContext(PartnerContext);
    if (!context) throw new Error('usePartner must be used within PartnerProvider');
    return context;
};
