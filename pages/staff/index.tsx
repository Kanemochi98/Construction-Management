import Layout from '@/components/layouts/layout';
import Styles from './style.module.scss';
import { RightIcon } from '@/components/icons';

import { useEffect, useState } from 'react';
import data from '@/dummyData/data';

interface Item {
    id: number;
    name: string;
    department: string;
    type: string;
    address: string;
    email: string;
    phone: string;
}


export default function Staff () {

    const [staffs, setStaffs] = useState<Item[]>([]);
    useEffect(()=> {
        setStaffs(data);
    }, [])

    console.log(staffs)
    return (
        <Layout>
            <div className={Styles.container}>
                <div className={Styles.search_container}></div>
                <div className={Styles.data_container}>
                    <div className={Styles.table_container}>
                        <div className={` ${Styles.table_header}`}>
                            <div className={`${Styles.freeze_col} ${Styles.freeze_col1}`}>
                                <div className={Styles.img}></div>
                            </div>
                            <div className={`${Styles.freeze_col} ${Styles.freeze_col2}`}>NAME</div>
                            <div className={`${Styles.col} ${Styles.dep}`}>DEPARTMENT</div>
                            <div className={`${Styles.col} ${Styles.type}`}>TYPE</div>
                            <div className={`${Styles.col} ${Styles.phone}`}>PHONE</div>
                            <div className={`${Styles.col} ${Styles.add}`}>ADDRESS</div>
                            <div className={`${Styles.col} ${Styles.email}`}>EMAIL</div>
                            <div className={Styles.last_col}></div>
                        </div>
                        <div className={Styles.table_body}>
                            {
                                staffs.map((staff)=>(
                                    <div className={Styles.row} key={staff.id}>
                                        <div className={`${Styles.freeze_col} ${Styles.freeze_col1}`}>
                                            <div className={Styles.img}></div>
                                        </div>
                                        <div className={`${Styles.freeze_col} ${Styles.freeze_col2}`}>{ staff.name }</div>
                                        <div className={`${Styles.col} ${Styles.dep}`}>{staff.department}</div>
                                        <div className={`${Styles.col} ${Styles.type}`}>{staff.type}</div>
                                        <div className={`${Styles.col} ${Styles.phone}`}>{staff.phone}</div>
                                        <div className={`${Styles.col} ${Styles.add}`}>{staff.address}</div>
                                        <div className={`${Styles.col} ${Styles.email}`}>{staff.email}</div>
                                        <div className={Styles.last_col}>
                                            <RightIcon />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}