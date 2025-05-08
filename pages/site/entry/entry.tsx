
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import { DateInput, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
import { FormBtn } from '@/components/buttons';
import { apiCreateSite, apiGetSite, apiUpdateSite, apiSoftDelete } from '@/pages/api/apiCreateSite';
import { apiGetPartners } from '@/pages/api/apiCreatePartner';
import { apiGetStaffs } from '@/pages/api/apiCreateStaff';

export default function entry({ site, onHandleChange, onHandleSubmit, onClose, edit, editRow }) {
    // export const Entry = ({ site, onHandleChange, onHandleSubmit, onClose, edit, editRow }) => {
    // console.log(site)
    console.log(editRow)
    // const partner_company = [
    //     { id: 1, value: 'Company 1' },
    //     { id: 2, value: 'company 2' },
    //     { id: 3, value: 'Conpany 3' },
    // ]

    // const company_representive = [
    //     { id: 1, value: 'Person A' },
    //     { id: 2, value: 'Person B' },
    //     { id: 3, value: 'Person C' },
    // ];
    const [companyRepresentive, setCompanyRepresentive] = useState([]);
    const [partnerCompany, setpartnerCompany] = useState([]);

    
    useEffect(() => {
        (async () => {
            try {
                const company_representive = await apiGetStaffs();
                const partner_company = await apiGetPartners();
                setCompanyRepresentive(company_representive.data);
                setpartnerCompany(partner_company.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [])
    console.log("Site Entry");
    console.log(companyRepresentive);
    console.log(partnerCompany);
    const [data, setData] = useState({
        name: "",
        partner_id: "",
        staff_id: "",
        startDate: "",
        endDate: "",
        address: "",
        memo: "",
    })

    useEffect(() => {
        if (edit && editRow) {
            (async () => {
                try {
                    const siteData = await apiGetSite(editRow);
                    setData(siteData.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        } else {
            setData({
                name: "",
                partner_id: "",
                staff_id: "",
                start_date: "",
                end_date: "",
                address: "",
                memo: ""
            })
        }
    }, [edit])

    console.log(data);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let response;
        try {
            if (edit) {
                response = await apiUpdateSite(editRow, { site });
            } else {
                response = await apiCreateSite({ site });
                console.log(response);
            }

            if (response) {
                console.log(`Staff ${edit ? 'updated' : 'created'} successfully!`);
                onClose();
            } else {
                console.error(`Failed to ${edit ? 'update' : 'create'} site`);
            }
        } catch (error) {
            console.error(`Error ${edit ? 'updating' : 'creating'} site:`, error);
        }
        // console.log(site);
    }

    const handleDelete = async () => {
        if (edit && editRow) {
            try {
                const response = await apiSoftDelete(editRow);
                if (response) {
                    console.log('Staff Deleted successfully!');
                    onClose();
                } else {
                    console.error('Failed to delete staff ');
                }
            } catch (error) {
                console.error('Error deleting staff:', error)
            }
        }
    }

    return (
        <>
            <div className={styles.container} >
                <form className={styles.form_container} onSubmit={handleSubmit}>

                    <div className={styles.data_container}>
                        <div className={styles.first_col}>
                            <div className={styles.row}>
                                <InputComponent
                                    label="Site Name"
                                    required={true}
                                    placeholder="Enter Site Name"
                                    name="name"
                                    value={edit ? data.name : site.name}
                                    onhandleChange={onHandleChange}


                                />
                            </div>
                            <div className={styles.row}>
                                <SelectBoxComponent
                                    label="Partner Company"
                                    required={true}
                                    options={partnerCompany}
                                    def_value="Select Partner Comapny"
                                    name="partner_id"
                                    value= {data.staff_id || ""} 
                                    onhandleChange={onHandleChange}
                                />
                            </div>

                            <div className={styles.row}>
                                <SelectBoxComponent
                                    label="Company Representive"
                                    required={true}
                                    options={companyRepresentive}
                                    def_value="Select Company Representive"
                                    name="staff_id"
                                    // value={site.comapny}
                                    value={edit ? data.staff_id : companyRepresentive.id}
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
                                        name="startDate"
                                        value={edit ? data.startDate.substring(0, 10) : site.startDate}
                                        onhandleChange={onHandleChange}

                                    />
                                </div>
                                <div className={styles.col}>
                                    <DateInput
                                        label="End Date"
                                        name="endDate"
                                        value={edit ? data.endDate.substring(0, 10) : site.endDate}
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
                                    value={edit ? data.address : site.address}
                                    onhandleChange={onHandleChange}
                                />
                            </div>
                            <div className={styles.row}>
                                <TextAreaBox
                                    label="Note"
                                    placeholder="Enter Note"
                                    name="memo"
                                    value={edit ? data.memo : site.memo}
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
                        {edit && (
                            <FormBtn
                                onClick={handleDelete}
                                variant='delete'
                            >
                                Delete
                            </FormBtn>
                        )}
                        <FormBtn
                            type='submit'
                            variant='submit'
                            onClick={onHandleSubmit}
                        >
                            {edit ? 'Update' : 'Save'}
                        </FormBtn>

                    </div>

                </form>
            </div>
        </>
    )
}
