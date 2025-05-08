
import { FormBtn } from '@/components/buttons';
import styles from './style.module.scss';
import { ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
import { apiCreateStaff, apiGetStaff, apiSoftDelete, apiUpdateStaff } from '@/pages/api/apiCreateStaff';
import { useEffect, useState } from 'react';
import { useStaff } from '@/context/StaffContext';
import { StaffList } from '@/types/staff'
// import { useRouter } from 'next/router';
// import { redirect,useRouter } from 'next/navigation';
// import { Staff } from '@/type';

// import { Value } from 'sass';
const departments = [
  { id: 'Management', name: 'Management' },
  { id: 'HR', name: 'HR' },
  { id: 'Accounting', name: 'Accounting' }
];

const role = [
  { id: "Adminstrator" , name: "Adminstrator" },
  { id: "Manager", name: "Manager" },
  { id: "On-Sites-Staff", name: "On-Sites-Staff" }
];

export const Entry = ({ 
  onHandleImage, 
  preview, 
  staff, 
  // onHandleChange, 
  edit, editRow, onClose }) => {
  // const router = useRouter();

  const { fetchStaffId ,createStaff, updateStaff, softDeleteStaff } = useStaff();  

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    role: '',
    address: '',
    image: '',
  });

  useEffect(() => {
    if (edit && editRow) {
      (async () => {
        try {
          const staffData = await fetchStaffId(editRow);
          setData(staffData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    } else {
      setData({
        name: '',
        email: '',
        password: '',
        phone: '',
        department: '',
        role: '',
        address: '',
        image: '',
      });
      //   setEditImg("");
    }
  }, [edit])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isEditing = edit && editRow;
      const result = isEditing
        ? await updateStaff(editRow, data)
        : await createStaff(data)

      if(!result) {
        console.error(`Failed to ${isEditing? 'update' : 'create'} staff.`)
      }
      console.log(`Staff ${isEditing ? 'updated' : 'created'} successfully.`);
      onClose();
    } catch (error) {
      console.error(`Error ${edit ? 'updating' : 'creating'} staff:`, error);
    }

  }

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
  
      setData((prev) => (
        { ...prev, [name]: value }
      ))
    }

  return (

    <>
      <div className={styles.container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.data_container}>
            <div className={styles.first_col}>
              <div className={styles.row}>
                <InputComponent
                  label={'Name'}
                  required={true}
                  type="text"
                  placeholder={'Enter Staff Name'}
                  name="name"
                  value={data.name}
                  onhandleChange={onHandleChange}

                />
              </div>
              <div className={styles.row}>
                <InputComponent
                  label={'Email'}
                  required={true}
                  type="text"
                  placeholder={'Enter Staff Email'}
                  name="email"
                  value={data.email}
                  onhandleChange={onHandleChange}

                />
              </div>
              <div className={styles.row}>
                <InputComponent
                  label={'Password'}
                  required={true}
                  type="text"
                  placeholder={'Enter Staff Password'}
                  name="password"
                  value={data.password} 
                  onhandleChange={onHandleChange}
                />
              </div>
              <div className={styles.row}>
                <InputComponent
                  label={'Phone'}
                  required={true}
                  type="number"
                  placeholder={'Enter Staff Phone No'}
                  name="phone"
                  value={data.phone}
                  onhandleChange={onHandleChange}

                />
              </div>
            </div>
            <div className={styles.second_col}>
              <div className={styles.row}>
                <ImageInputComponent
                  onHandleImage={onHandleImage}
                  required={false}
                  preview={edit ? data.image : preview}
                  // preview={edit ? data.image : preview}
                />
              </div>
              <div className={styles.row}>
                <SelectBoxComponent
                  label={"Department"}
                  options={departments}
                  required={true}
                  def_value="Select Department"
                  name="department"
                  value={data.department}
                  onhandleChange={onHandleChange}
                />
              </div>

              <div className={styles.row}>
                <SelectBoxComponent
                  label={"Role"}
                  options={role}
                  required={true}
                  def_value="Select Role "
                  name="role"
                  value={data.role}
                  onhandleChange={onHandleChange}
                />
              </div>

              <div className={styles.row}>
                <TextAreaBox
                  label={"Address"}
                  placeholder="Enter Staff Address"
                  required={false}
                  name="address"
                  value={data.address}
                  onhandleChange={onHandleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles.button_container}>
            <FormBtn
              onClick={onClose}
            >
              Cancel
            </FormBtn>
            {edit && (
              <FormBtn 
                onClick={async () => {
                  softDeleteStaff(editRow!);
                  onClose();
                  
                  }
                }
                variant='delete'
              >
                Delete
              </FormBtn>
            )}
            <FormBtn
              type='submit'
              variant='submit'
            >
              {edit ? 'Update' : 'Save'}
            </FormBtn>
          </div>
        </form>
      </div>
    </>

  )
}