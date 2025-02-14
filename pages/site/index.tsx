// 'use client'
import { VehicleAddForm } from '@/components/add_form/add_form';
import Layout from '@/components/layouts/layout';
import { useEffect, useState } from 'react';
import React from 'react';
import Styles from './styles.module.scss'
import { SearchComponent } from '@/components/search_component';
import { DataList } from '@/components/list';
import { Modal } from '@/components/modal/Modal';

export default function Site () {

  
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
    name: "SITE NAME",
    company: "COMPANY NAME",
    manager: "MANAGER",
    address: "ADDRESS",
    note: "NOTE"

    };
    
    const data = [
      { id: 1, name: "Site A", company: "Company A", manager: "Manager A", address: "Address A", note: "Note A" },
      { id: 2, name: "Site B", company: "Company B", manager: "Manager B", address: "Address B", note: "Note B" },
      { id: 3, name: "Site C", company: "Company C", manager: "Manager C", address: "Address C", note: "Note C" },
      { id: 4, name: "Site D", company: "Company D", manager: "Manager D", address: "Address D", note: "Note D" },
      { id: 5, name: "Site E", company: "Company E", manager: "Manager E", address: "Address E", note: "Note E" },
      { id: 6, name: "Site F", company: "Company F", manager: "Manager F", address: "Address F", note: "Note F" },
      { id: 7, name: "Site G", company: "Company G", manager: "Manager G", address: "Address G", note: "Note G" },
      { id: 8, name: "Site H", company: "Company H", manager: "Manager H", address: "Address H", note: "Note H" },
      { id: 9, name: "Site I", company: "Company I", manager: "Manager I", address: "Address I", note: "Note I" },
      { id: 10, name: "Site J", company: "Company J", manager: "Manager J", address: "Address J", note: "Note J" }
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