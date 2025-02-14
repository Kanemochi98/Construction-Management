"use client";

import { useDraggable } from "@dnd-kit/core";
import { Staff } from "@/type";
import styles from "@/pages/index.module.scss";
import Image from "next/image";
import { useState } from "react";

const DraggableItem: React.FC<{ staff: Staff }> = ({ staff }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: staff.id.toString(),
  });

  const [imageSrc, setImageSrc] = useState(`/images/User${staff.id}.jpg`);

  const handleImageError = () => {
    setImageSrc(`/images/User${staff.id}.png`); 
  };

  // Apply cursor styles dynamically based on isDragging state
  const cursorClass = isDragging ? styles.dragging : styles.grab;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`${styles.draggableItem} ${cursorClass}`} // Apply dynamic cursor class
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
      }}
    >
      <Image
        className={styles.staffImage}
        src={imageSrc}
        alt={staff.name}
        width={50}
        height={50}
        onError={handleImageError}
      />
      <span className={styles.staffName}>{staff.name}</span>
    </div>
  );
};

const ListBox: React.FC<{ staffs: Staff[] }> = ({ staffs }) => {
  return (
    <div className={styles.dndListBody}>
      {staffs.map((staff) => (
        <DraggableItem key={staff.id} staff={staff} />
      ))}
    </div>
  );
};

export default ListBox;
