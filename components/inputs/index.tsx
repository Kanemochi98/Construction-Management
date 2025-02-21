import React, { useState } from "react";
import styles from "./style.module.scss"; 
import { ImageAddIcon, SearchIcon } from "../icons";

export function FormInput({ 
  label, 
  type = "text", 
  id, 
  name, 
  required = false,
  placeholder, 
  value, 
  onChange, 
  isTextarea = false,
  isSelect = false,  
  options = []       
}: any) {
  return (
    <div className={styles.form_group}>
      <label htmlFor={id}>{label}</label>
      {isSelect ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>{placeholder}</option>  
          {options.map(({option, index} : any) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ) : isTextarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export function SearchInput () {
  const SearchBar = () => {
    const [query, setQuery] = useState("");
    
  }
  return (
    <div className={styles.searchinput_container}>
      <form action="">
        <input 
          type="text" 
          placeholder="Search..."

        />
      </form>
    </div>
  )
}


// AZM
export const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const handlerChange = (e) => {
    setQuery(e.target.value);
  }

  const handlerSearch = () => {
    if(onSearch) {
      onSearch(query)
    }
  }
  return(
    <>
      <div className={styles.search_bar}>
        <input type="text" className={styles.search_box} value={query} onChange={handlerChange} />
        <button className={styles.search_btn} onClick={handlerSearch} ><SearchIcon /></button>
      </div>
    </>
  )
}

export const InputComponent = ({
    name, value, label, required, placeholder, onhandleChange}) => {

      return (
    <>
      <div className={styles.input_container}>
        <div className={styles.header}>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
          { required && <span className={styles.require}>require</span>}
        </div>
        <input 
          type="text" 
          className={styles.input_box} 
          placeholder={placeholder} 
          name={name}
          value={value}
          onChange={onhandleChange}
        />
      </div>
    </>
  )
}

export const ImageInputComponent = ({onHandleImage, preview}) => {

  return (
    <>
      <div className={styles.image_input}>
        <input 
          accept="image/*"
          type="file" 
          id="image"  
          onChange={onHandleImage}
         
        />
        {
          preview ? <label htmlFor="image">
            <img 
            className={styles.pre_image} 
            src={preview}
            alt="selected"
          />
          </label> : 
        
        <label htmlFor="image">
          <ImageAddIcon />
          
        </label>
        }
      </div>
    </>
  )
}

export const SelectBoxComponent = ({label, required, options,name ,value,  onhandleChange, def_value}) => {
  // console.log(options)

  // return null
  return (
    <div className={styles.input_container}>
        <div className={styles.header}>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
          { required && <span className={styles.require}>require</span>}
        </div>
        <select className={styles.select_box} value={value} name={name} id="" onChange={onhandleChange}>
          <option disabled>{def_value}</option>
          {
           options.map((option) => (
            <option key={option.id} value={option.id}>{option.value}</option>
           ))
          }
        </select>
      </div>
  )
}

export const DateInput = ({label, required, placeholder, name, value, onhandleChange}) => {
  return (
    // <div></div>
    <div className={styles.input_container}>
        <div className={styles.header}>
          <label htmlFor="" className={styles.label}>
            {label}
          </label>
          { required && <span className={styles.require}>require</span>}
        </div>
        <input 
          type="date" 
          className={styles.input_box} 
          placeholder={placeholder} 
          name={name}
          value={value}
          onChange={onhandleChange}
        />
      </div>
  )
}

export const TextAreaBox = ({label, required, placeholder, name, value, onhandleChange}) => {
  return (
    <div className={styles.input_container}>
      <div className={styles.header}>
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
        { required && <span className={styles.require}>require</span>}
      </div>
      <textarea 
        
        className={styles.text_area_box} 
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={onhandleChange}
      />
    </div>
  
  )
}