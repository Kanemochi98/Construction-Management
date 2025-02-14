import { Staff } from '@/type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Styles from '@/pages/staff/style.module.scss';
import { DragIcon } from '@/components/icons';

type StaffItemProps = {
    staff: Staff;
};

export default function StaffItem({ staff }: StaffItemProps) {
    const { id, name, department, type, phone, address, email } = staff;
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
          <div className={`${Styles.col} ${Styles.dep}`}>{department}</div>
          <div className={`${Styles.col} ${Styles.type}`}>{type}</div>
          <div className={`${Styles.col} ${Styles.phone}`}>{phone}</div>
          <div className={`${Styles.col} ${Styles.add}`}>{address}</div>
          <div className={`${Styles.col} ${Styles.email}`}>{email}</div>
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
