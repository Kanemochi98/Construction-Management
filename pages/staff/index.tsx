import Layout from '@/components/layouts/layout';
import Styles from './style.module.scss';
import { RightIcon } from '@/components/icons';

import { useEffect, useState } from 'react';
import data from '@/dummyData/data';
import { AddBtn, FilterBtn, SortingBtn } from '@/components/buttons';

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
    }, []);

    const [ activeRowId, setActiveRowId ] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const clickRow = (id) => {
        setIsExpanded(!isExpanded);
        setActiveRowId(id === activeRowId ? null : id)
    }

    // Filter State
    const [ activeFilterBtn, setActiveFilterBtn ] = useState(false);
    const filterToggle = () => {
        setActiveFilterBtn(!activeFilterBtn)
    }

    //Sorting State
    const [ activeSortingBtn, setActiveSortingBtn ] = useState(false);
    const sortingToggle = () => {
        setActiveSortingBtn(!activeSortingBtn)
    }
    //Add State
    const [ activeAddBtn, setActiveAddBtn ] = useState(false);
    const addToggle = () => {
        setActiveAddBtn(!activeAddBtn)
    }
    

    return (
        <Layout>
            <div className={Styles.container}>
                <div className={Styles.search_container}>
                    <FilterBtn isActive={activeFilterBtn} onClick= {filterToggle} />
                    <AddBtn isActive={activeAddBtn} onClick= {addToggle} />
                    <SortingBtn isActive={activeSortingBtn} onClick= {sortingToggle} />
                </div>
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
                    <div className={Styles.list_container}>
                        {
                            staffs.map( staff => (
                                <div className={`${Styles.row} ${isExpanded ? Styles.expanded : Styles.collapsed}`  } key={staff.id}>
                                    <div className={Styles.img}>

                                    </div>
                                    <div className={Styles.data}>
                                        <div className={Styles.cell}>
                                            <span>name</span>
                                            <span className={Styles.text}>{staff.name}</span>
                                            <span className={Styles.text}>{staff.type}</span>
                                        </div>
                                        <div className={Styles.cell}>
                                            <span>Department</span>
                                            <span className={Styles.text}>{staff.department}</span>
                                        </div>
                                        <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
                                            <span>Phone</span>
                                            <span className={Styles.text}>{staff.phone}</span>
                                        </div>
                                        <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
                                            <span>Email</span>
                                            <span className={Styles.text}>{staff.email}</span>
                                        </div>
                                        <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
                                            <span>Address</span>
                                            <span className={Styles.text}>{staff.address}</span>
                                        </div>
                                    </div>
                                    <div className={Styles.arrow_container}  >
                                        <div className={ activeRowId === staff.id ?`${Styles.down_arrow}` : ` ${Styles.right_arrow}`} onClick={()=>{clickRow(staff.id)}}>
                                            <RightIcon />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}