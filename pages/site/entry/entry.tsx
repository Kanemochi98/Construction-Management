
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import { DateInput, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
import { FormBtn } from '@/components/buttons';
import { TrashIcon } from '@/components/icons';
import { apiCreateSite, apiGetSite, apiUpdateSite, apiSoftDelete } from '@/pages/api/apiCreateSite';
import { apiGetPartners } from '@/pages/api/apiCreatePartner';
import { apiGetStaffs } from '@/pages/api/apiCreateStaff';
import { useSite } from '@/context/SiteContext';
import { Site } from '@/types/site';
import { ConfirmationModal } from '@/components/modal/ConfirmationModal';

export default function entry({ site, onHandleSubmit, onClose, edit, editRow }) {
    // export const Entry = ({ site, handleChange, onHandleSubmit, onClose, edit, editRow }) => {

    const { createSite, updateSite, softDeleteSite, fetchSiteId } = useSite();
    const [staff, setStaff] = useState([]);
    const [partner, setPartner] = useState([]);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    console.log('Site Entry :', site)
    useEffect(() => {
        (async () => {
            try {
                const company_representive = await apiGetStaffs();
                const partner_company = await apiGetPartners();
                setStaff(company_representive.data);
                setPartner(partner_company.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [])

    const [data, setData] = useState<Site>({
        name: "",
        partner_id: "",
        staff_id: "",
        startDate: "",
        endDate: "",
        address: "",
        memo: "",
        partner: "",
        staff: "",
    })

    useEffect(() => {
        if (edit && editRow) {
            (async () => {
                try {
                    const siteData = await fetchSiteId(editRow);
                    setData({
                        name: siteData.name || "",
                        partner_id: siteData.partner_id || "",
                        staff_id: siteData.staff_id || "",
                        startDate: siteData.startDate || "",
                        endDate: siteData.endDate || "",
                        address: siteData.address || "",
                        memo: siteData.memo || "",
                        partner: siteData.partner?.name || "",
                        staff: siteData.staff?.name || "",
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            })();
        } else {
            setData({
                name: "",
                partner_id: "",
                staff_id: "",
                startDate: "",
                endDate: "",
                address: "",
                memo: "",
                partner: "",
                staff: "",
            })
        }
    }, [edit])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Site Submit :',data);
        // try {
        //     const isEditing = edit && editRow;
        //     const result = isEditing
        //         ? await updateSite(editRow, data)
        //         : await createSite(data)

        //     if (!result) {
        //         console.error(`Failed to ${isEditing ? 'update' : 'create'} site.`)
        //     }
        //     console.log(`Site ${isEditing ? 'updated' : 'created'} successfully.`);
        //     onClose();
        // } catch (error) {
        //     console.error(`Error ${edit ? 'updating' : 'creating'} site:`, error);
        // }
    }

    const handleDelete = async () => {
        await softDeleteSite(editRow);
        setShowDeleteConfirm(false);
        onClose();
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prev) => (
            { ...prev, [name]: value }
        ))
    }

    return (
        <>
            {showDeleteConfirm && (
                <ConfirmationModal
                    message="Are you sure you want to delete this site?"
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteConfirm(false)}
                />
            )}
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
                                    value={data.name}
                                    onhandleChange={handleChange}


                                />
                            </div>
                            <div className={styles.row}>
                                <SelectBoxComponent
                                    label="Partner Company"
                                    required={true}
                                    options={partner}
                                    def_value="Select Partner Comapny"
                                    name={edit ? "partner" : "partner_id"}
                                    value={data.partner_id}
                                    // value={edit ? data.partner : data.partner_id}
                                    onhandleChange={handleChange}
                                />
                            </div>

                            <div className={styles.row}>
                                <SelectBoxComponent
                                    label="Company Representive"
                                    required={true}
                                    options={staff}
                                    def_value="Select Company Representive"
                                    name={edit ? "staff" : "staff_id"}
                                    value={data.staff_id}
                                    // value={edit? data.staff: data.staff_id}
                                    onhandleChange={handleChange}
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
                                        value={data.startDate.substring(0, 10)}
                                        // value={edit ? data.startDate.substring(0, 10) : site.startDate}
                                        onhandleChange={handleChange}

                                    />
                                </div>
                                <div className={styles.col}>
                                    <DateInput
                                        label="End Date"
                                        name="endDate"
                                        value={data.endDate.substring(0, 10)}
                                        // value={edit ? data.endDate.substring(0, 10) : site.endDate}
                                        onhandleChange={handleChange}

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
                                    value={data.address}
                                    onhandleChange={handleChange}
                                />
                            </div>
                            <div className={styles.row}>
                                <TextAreaBox
                                    label="Note"
                                    placeholder="Enter Note"
                                    name="memo"
                                    value={data.memo}
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
                            Cancle
                        </FormBtn>
                        {edit && (
                            <FormBtn
                                onClick={async () => {
                                    softDeleteSite(editRow);
                                    onClose();
                                }}
                                variant='delete'
                            >
                                <TrashIcon />
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
