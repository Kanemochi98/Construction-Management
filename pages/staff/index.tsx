import React, {useState} from 'react';
import Layout from '@/components/layouts/layout';
import style from './style.module.scss';
import dummyData from '@/dummyData/data';
import ModalBox from './entry/index';

export default function Staff() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState<any>(null);

    const openModal = (staff: any) => {
        setSelectedStaff(staff);
        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);
    return (
        <Layout>
            <div className={style.staff_container}>
                <div className={style.staff_list_header}>
                    <div>
                        
                    </div>
                    <div>
                        <button onClick={openModal}> + Add </button>
                    </div>
                </div>
                {/* <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={`${style.cell} ${style.freeze_header}`}>Name</th>
                            <th className={style.cell}>Email</th>
                            <th className={style.cell}>Phone</th>
                            <th className={style.cell}>Address</th>
                            <th className={style.cell}>Status</th>
                            <th className={style.cell}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((staff, index) => (
                            <tr key={index}>
                                <td className={`${style.cell} ${style.freeze_column}`}>{staff.name}</td>
                                <td className={style.cell}>{staff.email}</td>
                                <td className={style.cell}>{staff.phone}</td>
                                <td className={style.cell}>{staff.address}</td>
                                <td className={style.cell}>{staff.status}</td>
                                <td className={style.cell}>Edit/Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                {isModalOpen && <ModalBox closeModal={closeModal} staff={selectedStaff}/>}
            </div>
        </Layout>
    );
}
