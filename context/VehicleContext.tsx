import { createContext, useContext, useEffect, useState } from "react";
import { Vehicle } from '@/types/vehicle';
import { apiCreateVehicle, apiGetVehicles, apiUpdateVehicle, apiSoftDelete, apiGetVehicle } from '@/pages/api/apiCreateVehicle';

interface VehicleContextType{
    vehicleList: Vehicle[];
    fetchVehicle: () => Promise<void>;
    fetchVehicleId: (id: string) => Promise<void>;
    createVehicle: (vehicle: Vehicle) => Promise<void>;
    updateVehicle: (id: string, vehicle: Vehicle) => Promise<void>;
    softDeleteVehicle: (id: string) => Promise<void>
}
const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{ children: React.ReactNode }>  = ({ children }) => {

    const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);

    const fetchVehicle = async () => {
        const res = await apiGetVehicles() as { data: Vehicle[] };
        setVehicleList(res.data);
    }

    const fetchVehicleId = async (id: string) => {
        const res = await apiGetVehicle(id) as { data: Vehicle[] };
        return res.data;
    }

    const createVehicle = async (vehicle: Vehicle) => {
        await apiCreateVehicle({ vehicle });
        fetchVehicle();
    }

    const updateVehicle = async (id: string, vehicle: Vehicle) => {
        await apiUpdateVehicle(id,{ vehicle });
        fetchVehicle();
    }

    const softDeleteVehicle = async (id: string) => {
        await apiSoftDelete(id);
        await fetchVehicle();
    }

    useEffect(() => {
        fetchVehicle();
    }, []);

    // const handleChange = (event: React.FormEvent) => {
    //     const { name, value } = event.target;

    //     setVehicleList((prev) => (
    //         { ...prev, [name]: value }
    //     ))
    // }

    return (
        <VehicleContext.Provider value=
        {{ 
            vehicleList,
            fetchVehicle,
            fetchVehicleId, 
            createVehicle,
            updateVehicle,
            softDeleteVehicle,
            // handleChange
        }}>

            {children}
        </VehicleContext.Provider>
    )
};

export const useVehicle = () => {
    const context = useContext(VehicleContext);
    if (!context) throw new Error('useVehicle must be used within VehicleProvider');
    return context;
};
