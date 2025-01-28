import React, { useState } from "react";
import styles from "./style.module.scss"; 

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
