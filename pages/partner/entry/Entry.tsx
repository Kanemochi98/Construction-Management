import React from 'react'
import styles from './style.module.scss'
import { FormBtn } from '@/components/buttons'
import { InputComponent, TextAreaBox } from '@/components/inputs'
import Partner from '..'

export default function Entry({partner, onHandleChange, onHandleSubmit, edit, editRow, onClose }) {
    // console.log(onHandelChange)
    
    return (
    <div className={styles.container}>
        <form 
            className={styles.form_container}
            onSubmit={onHandleSubmit}
        >
            <div className={styles.data_container}>
                <div className={styles.first_col}>
                    <div className={styles.row}>
                        <InputComponent 
                            label="Company Name"
                            placeholder="Enter Company Name"
                            required={true}
                            name="name"
                            value={partner.name}
                            onhandleChange={onHandleChange}
                        />
                    </div>
                    <div className={styles.row}>
                        <InputComponent 
                            label="Fax"
                            placeholder="Enter Fax Number"
                            required={false}
                            name="fax"
                            value={partner.fax}
                            onhandleChange={onHandleChange}
                        />
                    </div>
                </div>
                <div className={styles.second_col}>
                    <div className={styles.row}>
                        <InputComponent 
                            label="Phone"
                            placeholder="Enter Phone Number"
                            required={false}
                            name="phone"
                            value={partner.phone}
                            onhandleChange={onHandleChange}
                        />
                    </div>
                    <div className={styles.row}>
                        <TextAreaBox 
                            label="Address"
                            placeholder="Enter Address"
                            required={false}
                            name="address"
                            value={partner.address}
                            onhandleChange={onHandleChange}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.button_container}>
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
  )
}
