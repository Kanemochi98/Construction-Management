 import React, { useState } from 'react'
 import styles from './styles.module.scss'
import { CloseEyeIcon, OpenEyeIcon } from '../icons'
import { redirect } from 'next/dist/server/api-utils';
 
 export default function Login() {

  const [eye, setEye] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  })
  const onHandleChange = (e) => {
    const {name, value} = e.target;
    setUserData((prev) => (
      {...prev, [name]: value }
    ))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData)

    
  }

   return (
     <div className={styles.container}>
       <div className={styles.form_container}>
        <h2 className={styles.logo}>LOGO</h2>
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <span className={styles.header}>LOGIN</span>
            <div className={styles.row}>
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                id='email' 
                placeholder='Enter User Name'
                name='userName'
                value={userData.userName}
                onChange={onHandleChange}
              
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="password">Password</label>
              <div className={styles.pwd_row}>
                <input 
                  type={ eye ? 'text' : 'password'} 
                  placeholder='Enter Your Password'
                  name='password'
                  value={userData.password}
                  onChange={onHandleChange}
                />
                <div className={styles.eye}
                  onClick={()=> setEye(!eye)}
                >
                  {
                    eye ? <OpenEyeIcon /> : <CloseEyeIcon />
                  }
                </div>
              </div>
            </div>
            <div className={styles.row}>
            <button
              className={styles.btn}
              type='submit'
            >
              LOGIN
            </button>
            </div>
            
        </form>
        <div className={styles.image}>
            <img 
                src="" alt="" 

            />
        </div>
       </div>
     </div>
   )
 }
 