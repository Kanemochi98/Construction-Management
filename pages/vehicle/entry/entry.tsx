import { FormBtn } from '@/components/buttons'
import Style from './style.module.scss'
import { DateInput, ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs'
import { DataList } from '@/components/list';
import { apiCreateVehicle, apiGetVehicle, apiSoftDelete, apiUpdateVehicle } from '@/pages/api/apiCreateVehicle';
import { useEffect, useState } from 'react';
import { useVehicle } from '@/context/VehicleContext'
export const Entry = ({ edit, editRow, onClose, vehicle, onHandleImage, onHandleSubmit, preview }) => {

    const { createVehicle, updateVehicle, softDeleteVehicle } = useVehicle();
    const vehicleType = [
        { id: 'Car', name: 'Car' },
        { id: 'Bike', name: 'Bike' },
        { id: 'Truck', name: 'Truck' },
        { id: 'Bus', name: 'Bus' },
        { id: 'Van', name: 'Van' },
        { id: 'SUV', name: 'SUV' },
        { id: 'Motorcycle', name: 'Motorcycle' },
        { id: 'Scooter', name: 'Scooter' },
        { id: 'Bicycle', name: 'Bicycle' },
        { id: 'Tractor', name: 'Tractor' }
    ];
    const [data, setData] = useState({
        image: "",
        model: "",
        type: "",
        memo: "",
        InsuranceEndDate: "",
        licenEndDate: ""
    });
    useEffect(() => {
        if (edit && editRow) {
            (async () => {
                try {
                    const vehicleData = await apiGetVehicle(editRow);
                    setData(vehicleData.data);
                    // setEditImg(data.image);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        } else {
            setData({
                image: "",
                model: "",
                type: "",
                memo: "",
                InsuranceEndDate: "",
                licenEndDate: ""
            });
            //   setEditImg("");
        }
    }, [edit, editRow])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const isEditing = edit && editRow;
            const result = isEditing
                ? await updateVehicle(editRow, data)
                : await createVehicle(data)

            if (!result) {
                console.error(`Failed to ${isEditing ? 'update' : 'create'} vehicle.`)
            }
            console.log(`Vehicle ${isEditing ? 'updated' : 'created'} successfully.`);
            onClose();
        } catch (error) {
            console.error(`Error ${edit ? 'updating' : 'creating'} vehicle:`, error);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setData((prev) => (
          { ...prev, [name]: value }
        ))
      }

    return (
        <>
            <div className={Style.container}>
                <form className={Style.form_container}
                    onSubmit={handleSubmit}
                >
                    <div className={Style.data_container}>
                        <div className={Style.first_col}>
                            {/* <div className={Style.row}>
                               
                            </div> */}
                            <div className={Style.row}>
                                <InputComponent
                                    label={"Model"}
                                    required={true}
                                    placeholder={"Enter Vehicle Model..."}
                                    onhandleChange={handleChange}
                                    value={data.model}
                                    name="model"
                                />
                            </div>
                            <div className={Style.row}>
                                <SelectBoxComponent
                                    label={'Type'}
                                    required={true}
                                    options={vehicleType}
                                    onhandleChange={handleChange}
                                    value={data.type}
                                    name="type"
                                    def_value="Select Vehicle Type"
                                />
                            </div>
                            <div className={`${Style.row} ${Style.two_col}`}>
                                <div className={Style.col}>
                                    <DateInput
                                        label="Registration Expiry Date"
                                        name="licenEndDate"
                                        value={data.licenEndDate.substring(0, 10)}
                                        onhandleChange={handleChange}
                                        required={false}
                                    />
                                </div>
                                <div className={Style.col}>
                                    <DateInput
                                        label="Insurance Expiry Date"
                                        name="InsuranceEndDate"
                                        onhandleChange={handleChange}
                                        value={data.InsuranceEndDate.substring(0, 10)}
                                        required={false}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className={Style.second_col}>
                            <div className={Style.row}>
                                {/* <InputComponent 
                                    label={"Plate Number"}
                                    required={true}
                                    placeholder={"Enter Vehicle Plate Number..."}
                                    onhandleChange={handleChange}
                                    value={vehicle.plate}
                                    name="plate"
                                /> */}
                                <ImageInputComponent
                                    // name="img"
                                    // value={vehicle.img}
                                    onHandleImage={onHandleImage}
                                    required={false}
                                    // preview={preview}
                                    preview={edit ? data.image : preview}
                                />
                            </div>
                            {/* <div className={`${Style.row} ${Style.two_col}`}>
                                <div className={Style.col}>
                                    <DateInput 
                                        label="Registration Expiry Date" 
                                        name="reg_date"
                                        value={vehicle.reg_date}
                                        onhandleChange={handleChange}
                                        required={false}
                                    />
                                </div>
                                <div className={Style.col}>
                                    <DateInput 
                                        label="Insurance Expiry Date"
                                        name="ins_date"
                                        value={vehicle.ins_date}
                                        onhandleChange={handleChange}
                                        required={false}
                                    />
                                </div>
                            </div> */}
                            <div className={`${Style.row} ${Style.text_area}`}>

                                <TextAreaBox
                                    label="Note"
                                    placeholder="Enter Note"
                                    name="memo"
                                    value={data.memo}
                                    onhandleChange={handleChange}
                                    required={false}
                                />
                            </div>

                        </div>
                    </div>
                    <div className={Style.button_container}>
                        <FormBtn
                            type='button'
                            variant='cancel'
                            onClick={onClose}
                        >
                            Cancel
                        </FormBtn>
                        {edit && (
                            <FormBtn
                                onClick={async () => {
                                    softDeleteVehicle(editRow);
                                    onClose();
                                }}
                                variant='delete'
                            >
                                Delete
                            </FormBtn>
                        )}
                        <FormBtn
                            type='submit'
                            variant='submit'
                        >
                            {edit ? 'Update' : 'Save'}
                        </FormBtn>
                    </div>
                </form>
            </div>
        </>
    )
}