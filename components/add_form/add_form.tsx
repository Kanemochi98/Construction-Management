import { InputComponent } from "../inputs"
import Style from './style.module.scss';
export const VehicleAddForm = ({ onHandelChange, vehicle, edit, editRow}) => {
    console.log(edit)
    console.log(editRow)
    return (
        <>
            <div className={Style.container}>
                {/* { onEdit && "Edit Mode"} */}
                <InputComponent 
                    label='Model' 
                    placeholder='Enter Vehicle Model'
                    required={true}
                    onhandleChange={onHandelChange}
                    name="model" 
                    value={vehicle.model}
                />
            </div>
        </>
    )
}

