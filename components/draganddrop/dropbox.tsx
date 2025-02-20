"use client";

import { useDroppable } from "@dnd-kit/core";
import styles from "@/pages/index.module.scss";
import { Staff } from "@/type";
import DroppedStaffItem from "./dropstaffitem"; 

const DropBox: React.FC<{ dropZoneId: string; droppedStaffs: Staff[]; onStaffClick: (staff: Staff) => void }> = ({ dropZoneId, droppedStaffs, onStaffClick }) => {
  const { isOver, setNodeRef } = useDroppable({ id: dropZoneId });

  return (
    <div ref={setNodeRef} className={`${styles.dropBox} ${isOver ? styles.dropBoxOver : ""}`}>
      {droppedStaffs.length === 0 ? (
        <p className={styles.emptyMessage}>Assign Staff Here!</p>
      ) : (
        droppedStaffs.map((staff) => (
          <DroppedStaffItem key={staff.id} staff={staff} onClick={() => onStaffClick(staff)} />
        ))
      )}
    </div>
  );
};

export default DropBox;
