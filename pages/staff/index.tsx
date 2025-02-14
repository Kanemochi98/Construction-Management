// import Layout from '@/components/layouts/layout';
// import Styles from './style.module.scss';
// import { RightIcon } from '@/components/icons';

// import { useEffect, useState } from 'react';
// import data from '@/dummyData/data';
// import { AddBtn, FilterBtn, SortingBtn } from '@/components/buttons';
// import { SearchBar } from '@/components/inputs';

// interface Item {
//     id: number;
//     name: string;
//     department: string;
//     type: string;
//     address: string;
//     email: string;
//     phone: string;
// }


// export default function Staff () {

//     const [staffs, setStaffs] = useState<Item[]>([]);
//     useEffect(()=> {
//         setStaffs(data);
//     }, []);

//     const [ activeRowId, setActiveRowId ] = useState(null);
//     const [isExpanded, setIsExpanded] = useState(false);

//     const clickRow = (id) => {
//         setIsExpanded(!isExpanded);
//         setActiveRowId(id === activeRowId ? null : id)
//     }

//     // Filter State
//     const [ activeFilterBtn, setActiveFilterBtn ] = useState(false);
//     const filterToggle = () => {
//         setActiveFilterBtn(!activeFilterBtn)
//     }

//     //Sorting State
//     const [ activeSortingBtn, setActiveSortingBtn ] = useState(false);
//     const sortingToggle = () => {
//         setActiveSortingBtn(!activeSortingBtn)
//     }
//     //Add State
//     const [ activeAddBtn, setActiveAddBtn ] = useState(false);
//     const addToggle = () => {
//         setActiveAddBtn(!activeAddBtn)
//     }

//     //search state
//     const handlerSearch = (query) => {
//         console.log(query)
//     }

//     return (
//         <Layout>
//             <div className={Styles.container}>
//                 <div className={Styles.search_container}>
//                     <div className={Styles.search_bar}>
//                         <SearchBar onSearch={handlerSearch}  />
//                     </div>
//                     <div className={Styles.common_btn_bar}>
//                         <FilterBtn isActive={activeFilterBtn} onClick= {filterToggle} />
//                         <AddBtn isActive={activeAddBtn} onClick= {addToggle} />
//                         <SortingBtn isActive={activeSortingBtn} onClick= {sortingToggle} />
//                     </div>
                    
//                 </div>
//                 <div className={Styles.data_container}>
//                     <div className={Styles.table_container}>
//                         <div className={` ${Styles.table_header}`}>
//                             <div className={`${Styles.freeze_col} ${Styles.freeze_col1}`}>
//                                 <div className={Styles.img}></div>
//                             </div>
//                             <div className={`${Styles.freeze_col} ${Styles.freeze_col2}`}>NAME</div>
//                             <div className={`${Styles.col} ${Styles.dep}`}>DEPARTMENT</div>
//                             <div className={`${Styles.col} ${Styles.type}`}>TYPE</div>
//                             <div className={`${Styles.col} ${Styles.phone}`}>PHONE</div>
//                             <div className={`${Styles.col} ${Styles.add}`}>ADDRESS</div>
//                             <div className={`${Styles.col} ${Styles.email}`}>EMAIL</div>
//                             <div className={Styles.last_col}></div>
//                         </div>
//                         <div className={Styles.table_body}>
//                             {
//                                 staffs.map((staff)=>(
//                                     <div className={Styles.row} key={staff.id}>
//                                         <div className={`${Styles.freeze_col} ${Styles.freeze_col1}`}>
//                                             <div className={Styles.img}></div>
//                                         </div>
//                                         <div className={`${Styles.freeze_col} ${Styles.freeze_col2}`}>{ staff.name }</div>
//                                         <div className={`${Styles.col} ${Styles.dep}`}>{staff.department}</div>
//                                         <div className={`${Styles.col} ${Styles.type}`}>{staff.type}</div>
//                                         <div className={`${Styles.col} ${Styles.phone}`}>{staff.phone}</div>
//                                         <div className={`${Styles.col} ${Styles.add}`}>{staff.address}</div>
//                                         <div className={`${Styles.col} ${Styles.email}`}>{staff.email}</div>
//                                         <div className={Styles.last_col}>
//                                             <RightIcon />
//                                         </div>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                     <div className={Styles.list_container}>
//                         {
//                             staffs.map( staff => (
//                                 <div className={`${Styles.row} ${isExpanded ? Styles.expanded : Styles.collapsed}`  } key={staff.id}>
//                                     <div className={Styles.img}>

//                                     </div>
//                                     <div className={Styles.data}>
//                                         <div className={Styles.cell}>
//                                             <span>name</span>
//                                             <span className={Styles.text}>{staff.name}</span>
//                                             <span className={Styles.text}>{staff.type}</span>
//                                         </div>
//                                         <div className={Styles.cell}>
//                                             <span>Department</span>
//                                             <span className={Styles.text}>{staff.department}</span>
//                                         </div>
//                                         <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
//                                             <span>Phone</span>
//                                             <span className={Styles.text}>{staff.phone}</span>
//                                         </div>
//                                         <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
//                                             <span>Email</span>
//                                             <span className={Styles.text}>{staff.email}</span>
//                                         </div>
//                                         <div className={activeRowId === staff.id ?`${Styles.cell}` : `${Styles.no_cell}`}>
//                                             <span>Address</span>
//                                             <span className={Styles.text}>{staff.address}</span>
//                                         </div>
//                                     </div>
//                                     <div className={Styles.arrow_container}  >
//                                         <div className={ activeRowId === staff.id ?`${Styles.down_arrow}` : ` ${Styles.right_arrow}`} onClick={()=>{clickRow(staff.id)}}>
//                                             <RightIcon />
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }











// import { StaffAddForm, VehicleAddForm } from '@/components/add_form/add_form';

import Layout from '@/components/layouts/layout';
import { useEffect, useState } from 'react';
import React from 'react';
import Styles from './style.module.scss'
import { SearchComponent } from '@/components/search_component';
import { DataList } from '@/components/list';
import { Modal } from '@/components/modal/Modal';
import StaffEntryModel from './entry';

export default function Staff () {

  
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
    name: "NAME",
    department: "DEPARTMENT",
    phone: "PHONE",
    email: "EMAIL",
    address: "ADDRESS",
    note: "NOTE"
    };
    
    const data = [
        { id: 1, img: "s1.jpg", name: "John Doe", department: "HR", phone: "123-456-7890", email: "john@example.com", address: "123 Main St", note:"something" },
        { id: 2, img: "s1.jpg", name: "Jane Smith", department: "Finance", phone: "234-567-8901", email: "jane@example.com", address: "456 Oak St" },
        { id: 3, img: "s1.jpg", name: "Alice Johnson", department: "IT", phone: "345-678-9012", email: "alice@example.com", address: "789 Maple Ave" },
        { id: 4, img: "s1.jpg", name: "Bob Brown", department: "Marketing", phone: "456-789-0123", email: "bob@example.com", address: "321 Elm St" },
        { id: 5, img: "s1.jpg", name: "Charlie White", department: "Sales", phone: "567-890-1234", email: "charlie@example.com", address: "654 Pine St", note:"something" },
        { id: 6, img: "s1.jpg", name: "Diana Green", department: "Engineering", phone: "678-901-2345", email: "diana@example.com", address: "987 Cedar Ave" },
        { id: 7, img: "s1.jpg", name: "Edward Blue", department: "Legal", phone: "789-012-3456", email: "edward@example.com", address: "159 Birch St" },
        { id: 8, img: "s1.jpg", name: "Fiona Black", department: "R&D", phone: "890-123-4567", email: "fiona@example.com", address: "753 Spruce St" },
        { id: 9, img: "s1.jpg", name: "George Red", department: "Support", phone: "901-234-5678", email: "george@example.com", address: "852 Ash St" },
        { id: 10, img: "s1.jpg", name: "Hannah Purple", department: "Admin", phone: "012-345-6789", email: "hannah@example.com", address: "951 Palm St" }
        ];


    interface Staff {
      img: string,
      name: string,
      department: string,
      phone: string,
      email: string,
      address: string,
      note: string
    }
    // handle input value
    const [staffValue, setStaffValue]:Staff = useState({
      img: "",
      name: "",
      department: "",
      phone: "",
      email: "",
      address: "",
      note: ""
      
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setStaffValue((prev) => (
        {...prev, [name]:value}
      ))
    }
    

    return (
      <Layout>
      {
        (isMobile && activeAdd) || (isMobile && activeEdit ) ? 
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
          title={ !activeEdit ? 'Staff Add Form ' : 'Staff Edit Form'}
        >
          <StaffEntryModel 
            onHandelChange={handleChange} 
            staffs={staffValue} 
            edit={activeEdit} 
            editRow={eidtRow}
           
          />
        </Modal>
      </div>
     }
    </Layout>
    )
}