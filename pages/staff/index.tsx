import Layout from '@/components/layouts/layout';
import Styles from './style.module.scss';
import { RightIcon } from '@/components/icons';
import type { Staff } from '@/type';
import StaffItem from '@/pages/staff/stafflistbody/index';
import { useEffect, useState } from 'react';
import data from '@/dummyData/data';
import { AddBtn, FilterBtn, SortingBtn } from '@/components/buttons';
import StaffEntryModel from '@/pages/staff/entry/index'; 

//DND
import {
    DndContext, 
    DragEndEvent,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";



export default function Staff () {

    const [staffs, setStaffs] = useState<Staff[]>([]);
    useEffect(()=> {
        setStaffs(data);
    }, []);

    const [ activeRowId, setActiveRowId ] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const clickRow = ({id} : any) => {
        setIsExpanded(!isExpanded);
        setActiveRowId(id === activeRowId ? null : id);
    }

    const [ activeFilterBtn, setActiveFilterBtn ] = useState(false);
    const filterToggle = () => {
        setActiveFilterBtn(!activeFilterBtn);
    }

    const [ activeSortingBtn, setActiveSortingBtn ] = useState(false);
    const sortingToggle = () => {
        setActiveSortingBtn(!activeSortingBtn);
    }

    const [activeAddBtn, setActiveAddBtn] = useState(false);
    const addToggle = () => {
        setActiveAddBtn(!activeAddBtn);
    }

    const closeModal = () => {
        setActiveAddBtn(false);
    }


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            setStaffs((items) => {
                const oldIndex = items.findIndex(staff => staff.id === active.id);
                const newIndex = items.findIndex(staff => staff.id === over.id);
                
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <Layout>
            <div className={Styles.container}>
                <div className={Styles.search_container}>
                    <FilterBtn isActive={activeFilterBtn} onClick={filterToggle} />
                    <AddBtn isActive={activeAddBtn} onClick={addToggle} />
                    <SortingBtn isActive={activeSortingBtn} onClick={sortingToggle} />
                </div>
                <div className={Styles.data_container}>
                    <div className={Styles.table_container}>
                        <div className={`${Styles.table_header}`}>
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
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                            modifiers={[restrictToVerticalAxis]}
                        >
                            <SortableContext 
                                items={staffs.map(staff => staff.id)} 
                                strategy={verticalListSortingStrategy}
                            >    
                                {staffs.map((staff) => (
                                    <StaffItem staff={staff} key={staff.id}/>
                                ))}   
                            </SortableContext>
                        </DndContext>
                            
                        </div>
                    </div>
                    <div className={Styles.list_container}>
                        {staffs.map((staff) => (
                            <div className={`${Styles.row} ${isExpanded ? Styles.expanded : Styles.collapsed}`} key={staff.id}>
                                <div className={Styles.img}></div>
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
                                    <div className={activeRowId === staff.id ? `${Styles.cell}` : `${Styles.no_cell}`}>
                                        <span>Phone</span>
                                        <span className={Styles.text}>{staff.phone}</span>
                                    </div>
                                    <div className={activeRowId === staff.id ? `${Styles.cell}` : `${Styles.no_cell}`}>
                                        <span>Email</span>
                                        <span className={Styles.text}>{staff.email}</span>
                                    </div>
                                    <div className={activeRowId === staff.id ? `${Styles.cell}` : `${Styles.no_cell}`}>
                                        <span>Address</span>
                                        <span className={Styles.text}>{staff.address}</span>
                                    </div>
                                </div>
                                <div className={Styles.arrow_container}>
                                    <div className={activeRowId === staff.id ? `${Styles.down_arrow}` : ` ${Styles.right_arrow}`} onClick={() => { clickRow(staff.id) }}>
                                        <RightIcon />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {activeAddBtn && <StaffEntryModel closeModal={closeModal} staff={null} />}
        </Layout>
    );
}
