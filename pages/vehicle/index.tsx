import Layout from '@/components/layouts/layout';
import Styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { DataList } from '@/components/list';
import { SearchComponent } from '@/components/search_component';
import { Modal } from '@/components/modal/Modal';
import { Entry } from './entry/entry';
import { apiGetVehicles } from '../api/apiCreateVehicle';

export default function Vehicle() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
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

      //   console.log(window.innerWidth)
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const vehicleData = await apiGetVehicles();
        setData(vehicleData.data);
        console.log("Listing Vehicle");
        console.log(vehicleData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    })();
  }, [loading])


  // Search 
  const [searchValue, setSearchValue] = useState('');
  const handlerSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const handlerSearchSubmit = () => {
    if (searchValue.trim() !== '') {
      console.log(searchValue.trim())
    }
  }

  type id = string | number;

  // Add
  const [activeAdd, setActiveAdd] = useState(false);
  const handleAdd = () => {

    setActiveAdd(!activeAdd)
  }


  // edit 
  const [activeEdit, setActiveEdit] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const handleEdit = (id: id) => {
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
    model: "MODEL",
    type: "Type",
    licenEndDate: "REGISTRATION EXP DATE",
    InsuranceEndDate: "INSURENCE EXP DATE",
    memo: "Note",
    //  plate: "LINSENSE PLATE",
    //  type: "Type",
    //  ins_date: "INSURENCE EXP DATE",
    //  reg_date: "REGISTRATION EXP DATE"
  };

  // const data = [
  //   {
  //     id: 1,
  //     img: "v1.jpg",
  //     model: "Toyota Camry",
  //     plate: "ABC1234",
  //     type: "Sedan",
  //     ins_date: "2025-01-15",
  //     reg_date: "2024-12-31"
  //   },
  //   {
  //     id: 2,
  //     img: "v1.jpg",
  //     model: "Honda Accord",
  //     plate: "XYZ5678",
  //     type: "Sedan",
  //     ins_date: "2025-02-20",
  //     reg_date: "2024-11-15"
  //   },
  //   {
  //     id: 3,
  //     img: "v1.jpg",
  //     model: "Ford F-150",
  //     plate: "LMN8901",
  //     type: "Truck",
  //     ins_date: "2025-03-10",
  //     reg_date: "2025-01-05"
  //   },
  //   {
  //     id: 4,
  //     img: "v1.jpg",
  //     model: "Chevrolet Tahoe",
  //     plate: "JKL3456",
  //     type: "SUV",
  //     ins_date: "2025-04-25",
  //     reg_date: "2025-02-20"
  //   },
  //   {
  //     id: 5,
  //     img: "v1.jpg",
  //     model: "Tesla Model S",
  //     plate: "TES1234",
  //     type: "Electric",
  //     ins_date: "2025-05-18",
  //     reg_date: "2024-11-30"
  //   },
  //   {
  //     id: 6,
  //     img: "v1.jpg",
  //     model: "BMW X5",
  //     plate: "BMW9876",
  //     type: "SUV",
  //     ins_date: "2025-06-12",
  //     reg_date: "2025-03-15"
  //   },
  //   {
  //     id: 7,
  //     img: "v1.jpg",
  //     model: "Audi A4",
  //     plate: "AUD4321",
  //     type: "Sedan",
  //     ins_date: "2025-07-05",
  //     reg_date: "2025-02-10"
  //   },
  //   {
  //     id: 8,
  //     img: "v1.jpg",
  //     model: "Mercedes-Benz C-Class",
  //     plate: "MBZ7654",
  //     type: "Sedan",
  //     ins_date: "2025-08-30",
  //     reg_date: "2025-04-25"
  //   },
  //   {
  //     id: 9,
  //     img: "v1.jpg",
  //     model: "Jeep Wrangler",
  //     plate: "JEP1234",
  //     type: "SUV",
  //     ins_date: "2025-09-15",
  //     reg_date: "2025-06-10"
  //   }
  // ];


  // interface Vehicle {

  //   image: File | null;
  //   model: string;
  //   type: string;
  //   ins_date: string;
  //   reg_date: string;
  // }
  interface Vehicle {

    image: File | null;
    model: string;
    type: string;
    memo: string;
    InsuranceEndDate: string;
    licenEndDate: string;
  }
  // handle input value
  const [vehicle, setVehicle] = useState<Vehicle>({
    image: null,
    model: "",
    type: "",
    memo:"",
    InsuranceEndDate: "",
    licenEndDate: ""
  });

  const [preview, setPreview] = useState(null);


const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result as string;
          // console.log('Base64 Image Data:', base64String);
          setVehicle((prev: any) => (
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

    setVehicle((prev) => (
      { ...prev, [name]: value }
    ))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(vehicle);
  }
  // console.log(editRow);

  return (
    <Layout>
      {
        (isMobile && activeAdd) || (isMobile && activeEdit) ?
          <Entry
            edit={activeEdit}
            editRow={eidtRow}
            onHandelChange={handleChange}
            onHandleImage={handleImageChange}
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
                onAddActive={activeAdd}
                onHandleAdd={handleAdd}
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
              title={!activeEdit ? 'Vehicle Add Form' : 'Vehicle Edit Form'}
            >
              <Entry
                onHandleImage={handleImageChange}
                onHandelChange={handleChange}
                onHandleSubmit={handleSubmit}
                preview={preview}
                vehicle={vehicle}
                edit={activeEdit}
                editRow={editRow}
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