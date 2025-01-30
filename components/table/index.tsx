import React, { useState, useEffect } from "react";
import { DragIcon } from "@/components/icons";
import dummyData from "@/dummyData/team/data";
import style from "./style.module.scss";

interface Item {
  id: number;
  name: string;
  color: string;
}

const NativeDndList = () => {
  const [items, setItems] = useState<Item[]>(dummyData);

  useEffect(() => {
    setItems(dummyData);
  }, []);

  const handleDragStart = (
    e: React.DragEvent<HTMLSpanElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (draggedIndex === index) return; // Prevent unnecessary updates

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div className={style.container_style}>
      {items.map((item, index) => (
        <div
          key={item.id}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={style.card_style}
        >
          {/* Drag handle */}
          <span
            className={style.dragIcon}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
          >
            <DragIcon />
          </span>

          {/* Colored box */}
          <span
            className={style.colorBox}
            style={{ backgroundColor: item.color }}
          ></span>

          {/* Item name */}
          <span className={style.itemName}>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default NativeDndList;
