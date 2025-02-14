import Layout from '@/components/layouts/layout';
import Styles from './style.module.scss';
import { RightIcon } from '@/components/icons';
import type { Site } from '@/type';
import SiteItem from '@/pages/site/siteItem/index';
import { useEffect, useState } from 'react';
import siteData from '@/dummyData/site/data';
import { AddBtn, FilterBtn, SortingBtn } from '@/components/buttons';
import StaffEntryModel from '@/pages/staff/entry/index'; 

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
    const [site, setSite] = useState<Site[]>([]);
    useEffect(()=> {
        setSite(siteData);
    }, []);

    const [activeRowId, setActiveRowId] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const clickRow = (id: number) => {
        setIsExpanded(!isExpanded);
        setActiveRowId(id === activeRowId ? null : id);
    };

    const [activeFilterBtn, setActiveFilterBtn] = useState(false);
    const filterToggle = () => setActiveFilterBtn(!activeFilterBtn);
    
    const [activeSortingBtn, setActiveSortingBtn] = useState(false);
    const sortingToggle = () => setActiveSortingBtn(!activeSortingBtn);
    
    const [activeAddBtn, setActiveAddBtn] = useState(false);
    const addToggle = () => setActiveAddBtn(!activeAddBtn);
    const closeModal = () => setActiveAddBtn(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setSite((items) => {
                const oldIndex = items.findIndex(site => site.id === active.id);
                const newIndex = items.findIndex(site => site.id === over.id);
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
                        <div className={Styles.table_header}>
                            <div className={Styles.freeze_col}>NAME</div>
                            <div className={Styles.col}>CUSTOMER</div>
                            <div className={Styles.col}>STAFF</div>
                            <div className={Styles.col}>LOCATION</div>
                        </div>
                        <div className={Styles.table_body}>
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                                modifiers={[restrictToVerticalAxis]}
                            >
                                <SortableContext 
                                    items={site.map(site => site.id)} 
                                    strategy={verticalListSortingStrategy}
                                >    
                                    {site.map((site) => (
                                        <SiteItem site={site} key={site.id}/>
                                    ))}   
                                </SortableContext>
                            </DndContext>
                        </div>
                    </div>
                    <div className={Styles.list_container}>
                        {site.map((site) => (
                            <div className={`${Styles.row} ${isExpanded ? Styles.expanded : Styles.collapsed}`} key={site.id}>
                                <div className={Styles.data}>
                                    <div className={Styles.cell}>
                                        <span>Name</span>
                                        <span className={Styles.text}>{site.name}</span>
                                    </div>
                                    <div className={Styles.cell}>
                                        <span>Customer</span>
                                        <span className={Styles.text}>{site.customerName}</span>
                                    </div>
                                    <div className={Styles.cell}>
                                        <span>Staff</span>
                                        <span className={Styles.text}>{site.staffName}</span>
                                    </div>
                                </div>
                                <div className={Styles.arrow_container}>
                                    <div className={activeRowId === site.id ? Styles.down_arrow : Styles.right_arrow} onClick={() => clickRow(site.id)}>
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
