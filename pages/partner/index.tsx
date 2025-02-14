// 'use client'
import { VehicleAddForm } from '@/components/add_form/add_form';
import Layout from '@/components/layouts/layout';
import { useEffect, useState } from 'react';
import React from 'react';
import Styles from './styles.module.scss'
import { SearchComponent } from '@/components/search_component';
import { DataList } from '@/components/list';
import { Modal } from '@/components/modal/Modal';

export default function Partner () {

  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if(window.innerWidth < 600) {

            setIsMobile(window.innerWidth <= 600)
        } else {
          setIsMobile(false )
        }
      };

      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);

    //   console.log(window.innerWidth)
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
}, []);
 
  // Search 
  const [searchValue, setSearchValue] = useState('');
  const handlerSearchChange = (event) => {
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
  const handleEdit = (id) => {
    setActiveEdit(true)
    setEditRow(id)
  }
  
  // Filter
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => {
    setActiveFilter(!activeFilter);
  }

  // Sorting

  
    const col = {
   
    img: "",
    company_name: "COMPANY NAME",
    company: "ADDRESS",
    manager: "TOTAL ",
    address: "ADMINSTRATOR",

    };
    
    const data = [
        { id: 1, company_name: "Company A", company: "123 Main St", manager: 50, address: "John Doe" },
        { id: 2, company_name: "Company B", company: "456 Oak St", manager: 75, address: "Jane Smith" },
        { id: 3, company_name: "Company C", company: "789 Maple Ave", manager: 20, address: "Alice Johnson" },
        { id: 4, company_name: "Company D", company: "321 Elm St", manager: 100, address: "Bob Brown" },
        { id: 5, company_name: "Company E", company: "654 Pine St", manager: 30, address: "Charlie White" },
        { id: 6, company_name: "Company F", company: "987 Cedar Ave", manager: 60, address: "Diana Green" },
        { id: 7, company_name: "Company G", company: "159 Birch St", manager: 45, address: "Edward Blue" },
        { id: 8, company_name: "Company H", company: "753 Spruce St", manager: 80, address: "Fiona Black" },
        { id: 9, company_name: "Company I", company: "852 Ash St", manager: 25, address: "George Red" },
        { id: 10, company_name: "Company J", company: "951 Palm St", manager: 90, address: "Hannah Purple" }
        ];


    interface Vehicle {
      img: string;
      model: string;
      plate: string;
      type: string;
      ins_date: string;
      reg_date: string;
    }
    // handle input value
    const [vehicle, setVehicle]:Vehicle = useState({
      img: "",
      model: "",
      plate: "",
      type: "",
      ins_date: "",
      reg_date: ""
      
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setVehicle((prev) => (
        {...prev, [name]:value}
      ))
    }
    

    return (
      <Layout>
      {
        (isMobile && activeAdd) || (isMobile && activeEdit ) ? 
        <VehicleAddForm 
          edit={activeEdit} 
          editRow={eidtRow} 
          onHandelChange={handleChange} 
          vehicle={vehicle}  
        /> :
      
      <div className={Styles.container}>
        <div className={Styles.search_container}>
          <SearchComponent
            onSearchValue={searchValue} 
            onSearchChage={handlerSearchChange} 
            onSearchSubmit={handlerSearchSubmit}
            onFilterActive={activeFilter}
            onHandleFilter={handleFilter}
            onAddActive = {activeAdd}
            onHandleAdd = {handleAdd}
          />
        </div>
        <div className={Styles.data_container}>
          <DataList
            cols={col} 
            datas={data} 
            isMobile={isMobile} 
            // edit={activeEdit}   
            onEdit={handleEdit}  
          />
        </div>
        
        <Modal
          isOpen={activeAdd || activeEdit}
          onClose={() => {
            setActiveAdd(false)
            setActiveEdit(false)
          }}
          title="Vehicle Add Form" 
        >
          <VehicleAddForm 
            onHandelChange={handleChange} 
            vehicle={vehicle} 
            edit={activeEdit} 
            editRow={eidtRow}
           
          />
        </Modal>
      </div>
     }
    </Layout>
    )
}