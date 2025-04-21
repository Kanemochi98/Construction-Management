
import { FormBtn } from '@/components/buttons';
import styles from './style.module.scss';
import { ImageInputComponent, InputComponent, SelectBoxComponent, TextAreaBox } from '@/components/inputs';
import { apiCreateStaff, apiGetStaff, apiUpdateStaff } from '@/pages/api/apiCreateStaff';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { redirect,useRouter } from 'next/navigation';
// import { Staff } from '@/type';

// import { Value } from 'sass';

export const Entry = ({ onHandleImage, preview, staff, onHandleChange, edit, editRow, onClose }) => {
  // const router = useRouter();
  const departments = [
    { id: 1, value: 'Management' },
    { id: 2, value: 'HR' },
    { id: 3, value: 'Accounting' }
  ];

  const role = [
    { id: 1, value: "Adminstrator" },
    { id: 2, value: "On-Sites-Staff" }
  ];
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
          const staffData = await apiGetStaff(editRow);
          setData(staffData.data);
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

    let response;
    try {
      if (edit) {
        response = await apiUpdateStaff(editRow, { staff });
      } else {
        response = await apiCreateStaff({ staff });
        console.log(response);
      }

      // if (response && response.ok) {
      if (response) {
        console.log(`Staff ${edit ? 'updated' : 'created'} successfully!`);
        // router.push('/staff');
        // redirect('/staff');
        // router.push({
        //   pathname: '/staff'
        //   // query: { name: 'Someone' }
        // })
        onClose();
      } else {
        console.error(`Failed to ${edit ? 'update' : 'create'} staff`);
      }
    } catch (error) {
      console.error(`Error ${edit ? 'updating' : 'creating'} staff:`, error);
    }
    // console.log(res);


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
                  value={edit ? data.name : staff.name}
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
                  value={edit ? data.email : staff.email}
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
                  value={edit ? data.password : staff.password}
                  onhandleChange={onHandleChange}
                // style={{ display: edit ? "none" : "block" }}
                />
              </div>
              <div className={styles.row}>
                <InputComponent
                  label={'Phone'}
                  required={true}
                  type="number"
                  placeholder={'Enter Staff Phone No'}
                  name="phone"
                  value={edit ? data.phone : staff.phone}
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



                />
              </div>
              <div className={styles.row}>
                <SelectBoxComponent
                  label={"Department"}
                  options={departments}
                  required={true}
                  def_value="Select Department "
                  name="department"
                  // value={staff.department.value}
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
                  // value={staff.role}
                  onhandleChange={onHandleChange}
                />
              </div>

              <div className={styles.row}>
                <TextAreaBox
                  label={"Address"}
                  placeholder="Enter Staff Address"
                  required={false}
                  name="address"
                  value={edit ? data.address : staff.address}
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