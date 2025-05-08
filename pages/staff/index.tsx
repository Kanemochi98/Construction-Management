import Layout from '@/components/layouts/layout';
import { useEffect, useRef, useState } from 'react';
import Styles from './style.module.scss';
import { SearchComponent } from '@/components/search_component';
import { DataList } from '@/components/list';
import { Modal } from '@/components/modal/Modal';
import { Entry } from './entry';
import { useStaff } from '@/context/StaffContext';
import { StaffList } from '@/types/staff';

export default function Staff() {
  const { staffList, createStaff } = useStaff(); // context
  const [isMobile, setIsMobile] = useState(false);
  const didFetchRef = useRef(false);

  // Search state
  const [searchValue, setSearchValue] = useState('');
  const handlerSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handlerSearchSubmit = () => {
    if (searchValue.trim() !== '') {
      console.log(searchValue.trim());
    }
  };

  // Add
  const [activeAdd, setActiveAdd] = useState(false);
  const handleAdd = () => setActiveAdd(!activeAdd);

  // Edit
  const [activeEdit, setActiveEdit] = useState(false);
  const [editRow, setEditRow] = useState<StaffList | null>(null);
  const handleEdit = (staff: StaffList) => {
    setActiveEdit(true);
    setEditRow(staff);
  };

  // Filter
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => setActiveFilter(!activeFilter);

  // Staff form state
  const [staff, setStaff] = useState<StaffList>({
    image: '',
    name: '',
    department: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    role: '',
  });

  // Base64 preview
  const [preview, setPreview] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setStaff(prev => ({ ...prev, image: base64String }));
        setPreview(base64String);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStaff(prev => ({ ...prev, [name]: value }));
  };

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const col = {
    img: '',
    name: 'NAME',
    department: 'DEPARTMENT',
    phone: 'PHONE',
    email: 'EMAIL',
  };

  return (
    <Layout>
      {(isMobile && (activeAdd || activeEdit)) ? (
        <Entry
          onHandleChange={handleChange}
          onHandleImage={handleImageChange}
          preview={preview}
          staff={staff}
          edit={activeEdit}
          editRow={editRow}
          onClose={() => {
            setActiveAdd(false);
            setActiveEdit(false);
          }}
        />
      ) : (
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
              datas={staffList}
              isMobile={isMobile}
              onEdit={handleEdit}
            />
          </div>

          <Modal
            isOpen={activeAdd || activeEdit}
            onClose={() => {
              setActiveAdd(false);
              setActiveEdit(false);
            }}
            title={activeEdit ? 'Staff Edit Form' : 'Staff Add Form'}
          >
            <Entry
              onHandleChange={handleChange}
              onHandleImage={handleImageChange}
              preview={preview}
              staff={staff}
              edit={activeEdit}
              editRow={editRow}
              onClose={() => {
                setActiveAdd(false);
                setActiveEdit(false);
              }}
            />
          </Modal>
        </div>
      )}
    </Layout>
  );
}
