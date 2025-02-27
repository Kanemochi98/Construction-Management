import { FormBtn } from '@/components/buttons'
import Style from './style.module.scss'
import { DateInput, ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs'
import { DataList } from '@/components/list';

export const Entry = ({edit, editRow, onClose, vehicle, onHandelChange, onHandleImage, onHandleSubmit, preview  }) => {

    const vehicleType = [
        { id: 1, value: 'Car' },
        { id: 2, value: 'Bike' },
        { id: 3, value: 'Truck' },
        { id: 4, value: 'Bus' },
        { id: 5, value: 'Van' },
        { id: 6, value: 'SUV' },
        { id: 7, value: 'Motorcycle' },
        { id: 8, value: 'Scooter' },
        { id: 9, value: 'Bicycle' },
        { id: 10, value: 'Tractor' }
      ];


     console.log(editRow)

    return (
        <>
            <div className={Style.container}>
                <form className={Style.form_container}  
                    onSubmit={onHandleSubmit}
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
                                    value={vehicle.model}
                                    name="model"
                                />
                            </div>
                            <div className={Style.row}>
                                <SelectBoxComponent 
                                    label={'Type'} 
                                    required={true}
                                    options = {vehicleType}
                                    onhandleChange={onHandelChange}
                                    value={vehicle.type}
                                    name="type"
                                    def_value="Select Vehicle Type"
                                />
                            </div>
                            <div className={`${Style.row} ${Style.two_col}`}>
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
                                    preview={preview}
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
                                    name="note"
                                    value={vehicle.note}
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