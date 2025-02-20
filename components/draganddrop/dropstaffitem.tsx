"use client";

import { Staff } from "@/type";
import Image from "next/image";
import { useState } from "react";
import styles from "@/pages/index.module.scss";

const DroppedStaffItem: React.FC<{ staff: Staff; onClick: () => void }> = ({ staff, onClick }) => {
  const [imageSrc, setImageSrc] = useState(`/images/User${staff.id}.jpg`);

  const handleImageError = () => {
    setImageSrc(`/images/User${staff.id}.png`); 
  };

  return (
    <div className={styles.droppedItem} onClick={onClick}>
      <Image
        className={styles.dropStaffImage}
        src={imageSrc}
        alt={staff.name}
        width={50}
        height={50}
        onError={handleImageError}
      />
      <span className={styles.staffName}>{staff.name.split(" ")[0]}</span>

    </div>
  );
};

export default DroppedStaffItem;