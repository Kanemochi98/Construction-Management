
import { FormBtn } from '@/components/buttons';
import styles from './style.module.scss';
import { ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
// import { Value } from 'sass';

export const Entry = ({onHandleImage, preview, staff, onHandleChange, edit, onClose}) => {

  const departments = [
    {id: 1, value: 'Management'},
    {id: 2, value: 'HR'},
    {id: 3, value: 'Accounting'}
  ];

  const row = [
    {id: 1, value: "Adminstrator"},
    {id: 2, value: "On-Sites-Staff"}
  ];

  return (

    <>
      <div className={styles.container}>
        <form className={styles.form_container} >
            <div className={styles.data_container}>
              <div className={styles.first_col}>
                <div className={styles.row}>
                  <InputComponent 
                    label={'Name'}
                    required={true}
                    type="text"
                    placeholder={'Enter Staff Name'}
                    name="name"
                    value={staff.name}
                    onhandleChange={onHandleChange}

                  />
                </div>
                <div className={styles.row}>
                  <InputComponent 
                    label={'Email'}
                    required={true}
                    type="text"
                    placeholder={'Enter Staff Email'}
                    name = "email"
                    value={staff.email}
                    onhandleChange={onHandleChange}
                    
                  />
                </div>
                <div className={styles.row}>
                  <InputComponent 
                    label={'Password'}
                    required={true}
                    type="text"
                    placeholder={'Enter Staff Password'}
                    name="password"
                    value={staff.password}
                    onhandleChange={onHandleChange}
                    
                  />
                </div>
                <div className={styles.row}>
                  <InputComponent 
                    label={'Phone'}
                    required={true}
                    type="number"
                    placeholder={'Enter Staff Phone No'}
                    name="phone"
                    value={staff.phone}
                    onhandleChange={onHandleChange}
                    
                  />
                </div>
              </div>
              <div className={styles.second_col}>
                <div className={styles.row}>
                  <ImageInputComponent 
                    onHandleImage={onHandleImage}
                    required={false}
                    preview={preview}
                    


                  />
                </div>
                <div className={styles.row}>
                  <SelectBoxComponent 
                    label={"Department"}
                    options={departments}
                    required={true}
                    def_value="Select Department "
                    name="department"
                    value={staff.department}
                    onhandleChange={onHandleChange}
                  />
                </div>

                <div className={styles.row}>
                  <SelectBoxComponent 
                    label={"Row"} 
                    options={row}
                    required={true}
                    def_value="Select Row "
                    name="row"
                    value={staff.row}
                    onhandleChange={onHandleChange}
                  />
                </div>
                
                <div className={styles.row}>
                  <TextAreaBox 
                    label={"Address"}
                    placeholder="Enter Staff Address"
                    required={false}
                    name="address"
                    value={staff.address}
                    onhandleChange={onHandleChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.button_container}>
              <FormBtn
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