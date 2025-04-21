import { FormBtn } from '@/components/buttons'
import Style from './style.module.scss'
import { DateInput, ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs'
import { DataList } from '@/components/list';
import { apiCreateVehicle, apiGetVehicle, apiUpdateVehicle } from '@/pages/api/apiCreateVehicle';
import { useEffect, useState } from 'react';

export const Entry = ({ edit, editRow, onClose, vehicle, onHandelChange, onHandleImage, onHandleSubmit, preview }) => {

    const vehicleType = [
        { id: 1, name: 'Car' },
        { id: 2, name: 'Bike' },
        { id: 3, name: 'Truck' },
        { id: 4, name: 'Bus' },
        { id: 5, name: 'Van' },
        { id: 6, name: 'SUV' },
        { id: 7, name: 'Motorcycle' },
        { id: 8, name: 'Scooter' },
        { id: 9, name: 'Bicycle' },
        { id: 10, name: 'Tractor' }
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
        if(edit && editRow)  {
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

        let response;
        try {
            if (edit) {
                response = await apiUpdateVehicle(editRow, { vehicle });
            } else {
                response = await apiCreateVehicle({ vehicle });
                console.log(response);
            }

            if (response) {
                console.log(`Vehicle ${edit ? 'updated' : 'created'} successfully!`);
                onClose();
            } else {
                console.error(`Failed to ${edit ? 'update' : 'create'} vehicle`);
            }
        } catch (error) {
            console.error(`Error ${edit ? 'updating' : 'creating'} vehicle:`, error);
        }
        // console.log(res);


    }

    // console.log(editRow)

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
                                    onhandleChange={onHandelChange}
                                    value={edit? data.model : vehicle.model}
                                    name="model"
                                />
                            </div>
                            <div className={Style.row}>
                                <SelectBoxComponent
                                    label={'Type'}
                                    required={true}
                                    options={vehicleType}
                                    onhandleChange={onHandelChange}
                                    value={edit? data.type : vehicle.type}
                                    name="type"
                                    def_value="Select Vehicle Type"
                                />
                            </div>
                            <div className={`${Style.row} ${Style.two_col}`}>
                                <div className={Style.col}>
                                    <DateInput
                                        label="Registration Expiry Date"
                                        name="licenEndDate"
                                        value={edit? data.licenEndDate.substring(0,10) : vehicle.licenEndDate}
                                        onhandleChange={onHandelChange}
                                        required={false}
                                    />
                                </div>
                                <div className={Style.col}>
                                    <DateInput
                                        label="Insurance Expiry Date"
                                        name="InsuranceEndDate"
                                        onhandleChange={onHandelChange}
                                        value={edit? data.InsuranceEndDate.substring(0,10) : vehicle.InsuranceEndDate}
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
                                    onhandleChange={onHandelChange}
                                    value={vehicle.plate}
                                    name="plate"
                                /> */}
                                <ImageInputComponent
                                    // name="img"
                                    // value={vehicle.img}
                                    onHandleImage={onHandleImage}
                                    required={false}
                                    // preview={preview}
                                    preview={edit? data.image :preview}
                                />
                            </div>
                            {/* <div className={`${Style.row} ${Style.two_col}`}>
                                <div className={Style.col}>
                                    <DateInput 
                                        label="Registration Expiry Date" 
                                        name="reg_date"
                                        value={vehicle.reg_date}
                                        onhandleChange={onHandelChange}
                                        required={false}
                                    />
                                </div>
                                <div className={Style.col}>
                                    <DateInput 
                                        label="Insurance Expiry Date"
                                        name="ins_date"
                                        value={vehicle.ins_date}
                                        onhandleChange={onHandelChange}
                                        required={false}
                                    />
                                </div>
                            </div> */}
                            <div className={`${Style.row} ${Style.text_area}`}>

                                <TextAreaBox
                                    label="Note"
                                    placeholder="Enter Note"
                                    name="memo"
                                    value={edit? data.memo : vehicle.memo}
                                    onhandleChange={onHandelChange}
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