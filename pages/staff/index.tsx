
import Layout from '@/components/layouts/layout';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Styles from './style.module.scss'
import { SearchComponent } from '@/components/search_component';
import { DataList } from '@/components/list';
import { Modal } from '@/components/modal/Modal';
import { Entry } from './entry';
import { apiGetStaffs, apiCreateStaff } from '../api/apiCreateStaff';
import { sassNull } from 'sass';

export default function Staff() {

  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const didFetchRef = useRef(false)
  useEffect(() => {
    if (didFetchRef.current === false) {
      didFetchRef.current = true
      // fetchData()
    }

    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth < 600) {

          setIsMobile(window.innerWidth <= 600)
        } else {
          setIsMobile(false)
        }
      };

      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const staffData = await apiGetStaffs();
        setData(staffData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [loading])

  // Search 
  const [searchValue, setSearchValue] = useState('');
  const handlerSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value)
  }
  const handlerSearchSubmit = () => {
    if (searchValue.trim() !== '') {
      console.log(searchValue.trim())
    }
  }

  // Add
  const [activeAdd, setActiveAdd] = useState(false);
  const handleAdd = () => {
    setActiveAdd(!activeAdd)
  }


  // edit 
  const [activeEdit, setActiveEdit] = useState(false);
  const [eidtRow, setEditRow] = useState(null);
  const handleEdit = (id: React.SetStateAction<null>) => {
    setActiveEdit(true)
    setEditRow(id)
    // console.log(id)
  }

  // Filter
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => {
    setActiveFilter(!activeFilter);
  }

  // Sorting

  const col = {
    img: "",
    name: "NAME",
    department: "DEPARTMENT",
    phone: "PHONE",
    email: "EMAIL",
    // address: "ADDRESS",
    // note: "NOTE"
  };


  // const data = [
  //     { id: 1, img: "s1.jpg", name: "John Doe", department: "HR", phone: "123-456-7890", email: "john@example.com", address: "123 Main St", note:"something" },
  //     { id: 2, img: "s1.jpg", name: "Jane Smith", department: "Finance", phone: "234-567-8901", email: "jane@example.com", address: "456 Oak St" },
  //     { id: 3, img: "s1.jpg", name: "Alice Johnson", department: "IT", phone: "345-678-9012", email: "alice@example.com", address: "789 Maple Ave" },
  //     { id: 4, img: "s1.jpg", name: "Bob Brown", department: "Marketing", phone: "456-789-0123", email: "bob@example.com", address: "321 Elm St" },
  //     { id: 5, img: "s1.jpg", name: "Charlie White", department: "Sales", phone: "567-890-1234", email: "charlie@example.com", address: "654 Pine St", note:"something" },
  //     { id: 6, img: "s1.jpg", name: "Diana Green", department: "Engineering", phone: "678-901-2345", email: "diana@example.com", address: "987 Cedar Ave" },
  //     { id: 7, img: "s1.jpg", name: "Edward Blue", department: "Legal", phone: "789-012-3456", email: "edward@example.com", address: "159 Birch St" },
  //     { id: 8, img: "s1.jpg", name: "Fiona Black", department: "R&D", phone: "890-123-4567", email: "fiona@example.com", address: "753 Spruce St" },
  //     { id: 9, img: "s1.jpg", name: "George Red", department: "Support", phone: "901-234-5678", email: "george@example.com", address: "852 Ash St" },
  //     { id: 10, img: "s1.jpg", name: "Hannah Purple", department: "Admin", phone: "012-345-6789", email: "hannah@example.com", address: "951 Palm St" }
  //     ];


  interface Staff {
    image: string,
    name: string,
    department: string,
    phone: string,
    email: string,
    address: string,
    role: string
  }
  // handle input value
  const [staff, setStaff]: Staff = useState({
    image: "",
    name: "",
    department: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    role: ""

  });

  // base64img save
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result as string;
          // console.log('Base64 Image Data:', base64String);
          setStaff((prev: any) => (
            { ...prev, image: base64String }
          ));
          // Set preview
          setPreview(base64String);
        };

        reader.readAsDataURL(file); // Convert file to base64
        // setPreview(URL.createObjectURL(file));
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStaff((prev: any) => (
      { ...prev, [name]: value }
    ))
  }

  // console.log(staff)

  return (
    <Layout>
      {
        (isMobile && activeAdd) || (isMobile && activeEdit) ?
          <StaffEntryModel
            edit={activeEdit}
            editRow={eidtRow}
            onHandelChange={handleChange}
            staffs={staffValue}
          /> :

          <div className={Styles.container}>
            <div className={Styles.search_container}>
              <SearchComponent
                onSearchValue={searchValue}
                onSearchChage={handlerSearchChange}
                onSearchSubmit={handlerSearchSubmit}
                onFilterActive={activeFilter}
                onHandleFilter={handleFilter}
                onAddActive={activeAdd}
                onHandleAdd={handleAdd}
              />
            </div>
            <div className={Styles.data_container}>
              <DataList
                cols={col}
                datas={data}
                isMobile={isMobile}
                onEdit={handleEdit}
              />
            </div>

            <Modal
              isOpen={activeAdd || activeEdit}
              onClose={() => {
                setActiveAdd(false)
                setActiveEdit(false)
              }}
              title={!activeEdit ? 'Staff Add Form ' : 'Staff Edit Form'}
            >
              {/* <StaffEntryModel 
            onHandelChange={handleChange} 
            staffs={staffValue} 
            edit={activeEdit} 
            editRow={eidtRow}
          /> */}
              <Entry
                onHandleChange={handleChange}
                onHandleImage={handleImageChange}
                preview={preview}
                staff={staff}
                edit={activeEdit}
                editRow={eidtRow}
                onClose={() => {
                  setActiveAdd(false)
                  setActiveEdit(false)
                  setLoading(true)
                }}
              />
            </Modal>
          </div>
      }
    </Layout>
  )
}