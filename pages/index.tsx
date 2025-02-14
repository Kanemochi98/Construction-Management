"use client";

import Layout from "@/components/layouts/layout";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import data from "@/dummyData/home/data";
import { Home, Staff } from "@/type";
import { AddCarIcon, AddStaffIcon } from "@/components/icons";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import ListBox from "@/components/draganddrop/listbox";
import DropBox from "@/components/draganddrop/dropbox";
// import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import Image from "next/image";
import {} from "@/components/icons"

const HomePage = () => {
  const [siteData, setSiteData] = useState<Home[]>([]);
  const [staffs] = useState<Staff[]>([
    {
      id: 1,
      name: "Kaung Kaung",
      department: "Department 1",
      type: "Part time",
      address: "address 1",
      email: "staff@gmail.com",
      phone: "123456678",
      dropZoneId: "1",
      imageURL: "/images/user1.jpg",
    },
    {
      id: 2,
      name: "Lwin Ng Tun",
      department: "Department 2",
      type: "Full time",
      address: "address 2",
      email: "staff@gmail.com",
      phone: "123456678",
      dropZoneId: "2",
      imageURL: "/images/user2.png",
    },
    {
      id: 3,
      name: "Hsu Aung",
      department: "Department 3",
      type: "Part time",
      address: "address 3",
      email: "staff@gmail.com",
      phone: "123456678",
      dropZoneId: "3",
      imageURL: "/images/user3.png",
    },
    {
      id: 4,
      name: "Aung Zaw Myo",
      department: "Department 4",
      type: "Full time",
      address: "address 4",
      email: "staff@gmail.com",
      phone: "123456678",
      dropZoneId: "4",
      imageURL: "/images/user4.jpg",
    },
    {
      id: 5,
      name: "Nay Htet",
      department: "Department 5",
      type: "Full time",
      address: "address 5",
      email: "staff@gmail.com",
      phone: "123556678",
      dropZoneId: "5",
      imageURL: "/images/user5.png",
    },
    {
      id: 6,
      name: "Aung Chan Nyein",
      department: "Department 6",
      type: "Full time",
      address: "address 6",
      email: "staff@gmail.com",
      phone: "123666678",
      dropZoneId: "6",
      imageURL: "/images/user6.jpg",
    },
    // {
    //   id: 7,
    //   name: "StaffName 7",
    //   department: "Department 7",
    //   type: "Full time",
    //   address: "address 7",
    //   email: "staff@gmail.com",
    //   phone: "123777778",
    //   dropZoneId: "7",
    //   imageURL: "/images/user7.jpg",
    // },
    // {
    //   id: 8,
    //   name: "StaffName 8",
    //   department: "Department 8",
    //   type: "Full time",
    //   address: "address 8",
    //   email: "staff@gmail.com",
    //   phone: "123888878",
    //   dropZoneId: "8",
    //   imageURL: "/images/user8.jpg",
    // },
    // {
    //   id: 9,
    //   name: "StaffName 9",
    //   department: "Department 9",
    //   type: "Full time",
    //   address: "address 9",
    //   email: "staff@gmail.com",
    //   phone: "123999978",
    //   dropZoneId: "9",
    //   imageURL: "/images/user9.png",
    // },
    // {
    //   id: 10,
    //   name: "StaffName 10",
    //   department: "Department 10",
    //   type: "Full time",
    //   address: "address 10",
    //   email: "staff@gmail.com",
    //   phone: "1231010101078",
    //   dropZoneId: "10",
    //   imageURL: "/images/user10.jpg",
    // },
  ]);

  const [droppedStaffs, setDroppedStaffs] = useState<Record<string, Staff[]>>(
    {}
  );
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      const dropZoneId = over.id.toString();

      const movedStaff = staffs.find(
        (staff) => staff.id.toString() === active.id
      );
      if (movedStaff) {
        setDroppedStaffs((prev) => ({
          ...prev,
          [dropZoneId]: prev[dropZoneId]
            ? [...prev[dropZoneId], movedStaff]
            : [movedStaff],
        }));
      }
    }
  };

  const handleDroppedStaffClick = (dropZoneId: string, staff: Staff) => {
    setSelectedStaff({ ...staff, dropZoneId });
  };

  const handleRemoveAndReturn = () => {
    if (selectedStaff) {
      setDroppedStaffs((prev) => ({
        ...prev,
        [selectedStaff.dropZoneId]:
          prev[selectedStaff.dropZoneId]?.filter(
            (staff) => staff.id !== selectedStaff.id
          ) || [],
      }));
      setSelectedStaff(null);
    }
  };

  useEffect(() => {
    setSiteData(data);
  }, []);

  return (
    <Layout>
      <DndContext onDragEnd={handleDragEnd} >
        <div className={styles.home_container}>
          <div className={styles.home_schedule}>
            {siteData.map((site) => (
              <div key={site.siteName} className={styles.home_item_container}>
                <div className={styles.site_info_wrapper}>
                  <h3 className={styles.site_header}>{site.siteName}</h3>
                  <div className={styles.site_info}>
                    <span>{site.customerName}</span>
                    <span>{site.staffName}</span>
                    <span>{site.location}</span>
                  </div>
                </div>
                <div className={styles.home_right}>
                  <div className={styles.staff_drop_list}>
                    <DropBox
                      dropZoneId={site.siteName}
                      droppedStaffs={droppedStaffs[site.siteName] || []}
                      onStaffClick={(staff) =>
                        handleDroppedStaffClick(site.siteName, staff)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.drag_drop_container}>
            <div className={styles.drag_drop_header}>
              <AddStaffIcon />
            </div>
            
            <ListBox staffs={staffs} />
          </div>
          {selectedStaff && (
            <div className={styles.modal}>
              <div className={styles.modal_content}>
                <h3 className={styles.modal_header}>Details</h3>
                <div className={styles.modal_info}>
                  <Image
                    src={selectedStaff.imageURL}
                    alt={selectedStaff.name}
                    width={100}
                    height={100}
                  />
                  <div className={styles.detail_info}>
                    <p>Name: {selectedStaff.name}</p>
                    <p>Email: {selectedStaff.email}</p>
                    <p>Phone: {selectedStaff.phone}</p>
                    <p>Department: {selectedStaff.department}</p>
                  </div>
                </div>
                <button className={styles.button} onClick={handleRemoveAndReturn}>
                  Remove & Return
                </button>
                <button
                  className={styles.button}
                  onClick={() => setSelectedStaff(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </DndContext>
    </Layout>
  );
};

export default HomePage;
