import { Site } from '@/type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Styles from '@/pages/site/style.module.scss';
import { DragIcon } from '@/components/icons';

type SiteItemProps = {
    site: Site;
};

export default function StaffItem({ site }: SiteItemProps) {
    const { id, name, customerName, staffName, location } = site;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div 
            ref={setNodeRef}   
            style={style}
            className={Styles.row}
        >    
          <div className={`${Styles.freeze_col} ${Styles.freeze_col1}`}>
              <div className={Styles.img}></div>
          </div>
          <div className={`${Styles.freeze_col} ${Styles.freeze_col2}`}>{name}</div>
          <div className={`${Styles.col} ${Styles.customerName}`}>{customerName}</div>
          <div className={`${Styles.col} ${Styles.staff_name}`}>{staffName}</div>
          <div className={`${Styles.col} ${Styles.location}`}>{location}</div>
          
          <div 
            className={Styles.last_col}
            {...attributes}
            {...listeners}
          >
              <DragIcon />
          </div>
        </div>
    );
}
