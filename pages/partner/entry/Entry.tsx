import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { FormBtn } from '@/components/buttons'
import { InputComponent, TextAreaBox } from '@/components/inputs'
import { usePartner } from '@/context/PartnerContex';
// import Partner from '..'

export const Entry = ({ partner, edit, editRow, onClose }) => {

    const { createPartner, updatePartner, softDeletePartner, fetchPartnerId } = usePartner();
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
                    const partnerData = await fetchPartnerId(editRow);
                    setData(partnerData);
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
        try {
            const isEditing = edit && editRow;
            const result = isEditing
                ? await updatePartner(editRow, data)
                : await createPartner(data)

            if (!result) {
                console.error(`Failed to ${isEditing ? 'update' : 'create'} partner.`)
            }
            console.log(`Partner ${isEditing ? 'updated' : 'created'} successfully.`);
            onClose();
        } catch (error) {
            console.error(`Error ${edit ? 'updating' : 'creating'} partner:`, error);
        }

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prev) => (
            { ...prev, [name]: value }
        ))
    }


    // const handleDelete = async () => {
    //     if (edit && editRow ) {
    //       try{
    //         const response = await apiSoftDelete(editRow);
    //         if (response) {
    //           console.log('Partner Deleted successfully!');
    //           onClose();
    //         } else {
    //           console.error('Failed to delete partner ');
    //         }
    //       } catch (error) {
    //         console.error('Error deleting partner:', error)
    //       }
    //     }
    //   }

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
                                value={data.name}
                                onhandleChange={handleChange}
                            />
                        </div>
                        <div className={styles.row}>
                            <InputComponent
                                label="Fax"
                                placeholder="Enter Fax Number"
                                required={false}
                                name="fax"
                                value={data.fax}
                                onhandleChange={handleChange}
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
                                value={data.phone}
                                onhandleChange={handleChange}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextAreaBox
                                label="Address"
                                placeholder="Enter Address"
                                required={false}
                                name="address"
                                value={data.address}
                                onhandleChange={handleChange}
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
                    {edit && (
                        <FormBtn
                            onClick={async () => {
                                softDeletePartner(editRow!);
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
    )
}
