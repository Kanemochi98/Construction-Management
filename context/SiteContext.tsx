import { createContext, useContext, useEffect, useState } from "react";
import { Site } from '@/types/site';
import { apiCreateSite, apiGetSites, apiUpdateSite, apiSoftDelete, apiGetSite } from '@/pages/api/apiCreateSite';

interface SiteContextType{
    siteList: Site[];
    fetchSite: () => Promise<void>;
    fetchSiteId: (id: string) => Promise<void>;
    createSite: (site: Site) => Promise<void>;
    updateSite: (id: string, site: Site) => Promise<void>;
    softDeleteSite: (id: string) => Promise<void>
}
const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {

    const [siteList, setSiteList] = useState<Site[]>([]);

    const fetchSite = async () => {
        const res = await apiGetSites() as { data: Site[] };
        console.log('fetch site :',res);
        const transformedData =await res.data.map(item => ({
            ...item,
            partner: item.partner?.name || '', 
            staff: item.staff?.name || '', 
          }));
        //   console.log('fetch site :', transformedData);
        setSiteList(transformedData);
    }

    const fetchSiteId = async (id: string) => {
        const res = await apiGetSite(id) as { data: Site[] };
        const site = res.data;
        const transformedData = {
            ...site,
            partner: site.partner?.name || '', 
            staff: site.staff?.name || '', 
          };
          console.log('fetch site :', transformedData);
        return res.data
    }

    const createSite = async (site: Site) => {
        await apiCreateSite({ site });
        fetchSite();
    }

    const updateSite = async (id: string, site: Site) => {
        await apiUpdateSite(id,{ data: site });
        fetchSite();
    }

    const softDeleteSite = async (id: string) => {
        await apiSoftDelete(id);
        await fetchSite();
    }

    useEffect(() => {
        fetchSite();
    }, []);

    // const handleChange = (event: React.FormEvent) => {
    //     const { name, value } = event.target;

    //     setSiteList((prev) => (
    //         { ...prev, [name]: value }
    //     ))
    // }

    return (
        <SiteContext.Provider value=
        {{ 
            siteList,
            fetchSite,
            fetchSiteId, 
            createSite,
            updateSite,
            softDeleteSite,
            // handleChange
        }}>

            {children}
        </SiteContext.Provider>
    )
};

export const useSite = () => {
    const context = useContext(SiteContext);
    if (!context) throw new Error('useSite must be used within SiteProvider');
    return context;
};
