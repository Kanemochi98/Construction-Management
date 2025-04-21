import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { FormBtn } from '@/components/buttons'
import { InputComponent, TextAreaBox } from '@/components/inputs'
import { apiCreatePartner, apiGetPartner, apiUpdatePartner } from '@/pages/api/apiCreatePartner';
// import Partner from '..'

export const Entry = ({ onHandleChange, partner, edit, editRow, onClose }) => {
    // console.log(onHandelChange)
    const [data, setData] = useState({
        name: "",
        fax: "",
        phone: "",
        address: ""
    });

    // const [data, setData] = useState([]);
    useEffect(() => {
        if (edit && editRow) {
            (async () => {
                try {
                    const partnerData = await apiGetPartner(editRow);
                    setData(partnerData.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        } else {
            setData({
                name: "",
                fax: "",
                phone: "",
                address: ""
            });
        }
    }, [edit, editRow])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(partner);
        let response;
        try {
            if (edit) {
                response = await apiUpdatePartner(editRow, { partner });
            } else {
                response = await apiCreatePartner({partner});
                console.log(response);
            }

            if (response) {
                console.log(`Partner ${edit ? 'updated' : 'created'} successfully!`);
                onClose();
            } else {
                console.error(`Failed to ${edit ? 'update' : 'create'} partner`);
            }
        } catch (error) {
            console.error(`Error ${edit ? 'updating' : 'creating'} partner:`, error);
        }
        // console.log(res);


    }
    return (
        <div className={styles.container}>
            <form
                className={styles.form_container}
                onSubmit={handleSubmit}
            >
                <div className={styles.data_container}>
                    <div className={styles.first_col}>
                        <div className={styles.row}>
                            <InputComponent
                                label="Company Name"
                                placeholder="Enter Company Name"
                                required={true}
                                name="name"
                                value={edit ? data.name : partner.name}
                                onhandleChange={onHandleChange}
                            />
                        </div>
                        <div className={styles.row}>
                            <InputComponent
                                label="Fax"
                                placeholder="Enter Fax Number"
                                required={false}
                                name="fax"
                                value={edit ? data.fax : partner.fax}
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
                                value={edit ? data.phone : partner.phone}
                                onhandleChange={onHandleChange}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextAreaBox
                                label="Address"
                                placeholder="Enter Address"
                                required={false}
                                name="address"
                                value={edit ? data.address : partner.address}
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
