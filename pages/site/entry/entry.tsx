
import React from 'react'
import styles from './style.module.scss';
import { DateInput, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
import { FormBtn } from '@/components/buttons';

export default function entry({ site, onHandleChange, onHandleSubmit, onClose, edit, editRow}) {
    // console.log(site)
    console.log(editRow)
    const partner_company = [
        { id: 1, value: 'Company 1' },
        { id: 2, value: 'company 2' },
        { id: 3, value: 'Conpany 3' },
    ]

    const company_representive = [
        { id: 1, value: 'Person A' },
        { id: 2, value: 'Person B' },
        { id: 3, value: 'Person C' },
    ]
  return (
    <>
        <div className={styles.container} >
           <form className={styles.form_container}>

                <div className={styles.data_container}>
                    <div className={styles.first_col}>
                        <div className={styles.row}>
                            <InputComponent 
                                label="Site Name"
                                required={true}
                                placeholder="Enter Site Name"
                                name="name"
                                value={site.name}
                                onhandleChange={onHandleChange}
                                

                            />
                        </div>
                        <div className={styles.row}>
                           <SelectBoxComponent 
                                label="Partner Company"
                                required={true}
                                options={partner_company}
                                def_value="Select Partner Comapny"
                                name="partner"
                                value={site.partner}
                                onhandleChange={onHandleChange}
                           />
                        </div>

                        <div className={styles.row}>
                           <SelectBoxComponent 
                                label="Company Representive"
                                required={true}
                                options={company_representive}
                                def_value="Select Company Representive"
                                name="comapny"
                                value={site.comapny}
                                onhandleChange={onHandleChange}
                           />
                        </div>
                        
                    </div>
                    <div className={styles.second_col}>
                        {/* <div className={styles.row}> */}
                            <div className={`${styles.row} ${styles.two_col}`}>
                                <div className={styles.col}>
                                    <DateInput
                                        label="Start Date" 
                                        name="start_date"
                                        value={site.start_date}
                                        onhandleChange={onHandleChange}
                                       
                                    />
                                </div>
                                <div className={styles.col}>
                                    <DateInput 
                                        label="End Date"
                                        name="end_date"
                                        value={site.end_date}
                                        onhandleChange={onHandleChange}
                                       
                                    />
                                </div>
                            </div>
                        {/* </div> */}
                            <div className={styles.row}>
                                <InputComponent 
                                    label="Site Address"
                                    placeholder="Enter Site Address"
                                    required={false}
                                    name="address"
                                    value={site.address}
                                    onhandleChange={onHandleChange}
                                />
                            </div>
                            <div className={styles.row}>
                                <TextAreaBox 
                                    label="Note"
                                    placeholder="Enter Note"
                                    name="memo"
                                    value={site.memo}
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
                        Cancle
                    </FormBtn>
                    <FormBtn 
                        type='submit'
                        variant='submit'
                        onClick={onHandleSubmit}
                    >
                        {edit ? 'Update' : 'Save' }
                    </FormBtn>
                    
                </div>

           </form>
        </div>
    </>
  )
}
