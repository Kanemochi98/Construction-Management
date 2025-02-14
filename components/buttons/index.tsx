import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useSidebar } from '@/context/SidebarContext';
import { MenuIcon, FaSun, FaMoon, FilterIcon, PlusIcons, SortingIcon } from '../icons';
import style from './style.module.scss';



export function FormBtn({ type = "button", variant = "default", children, onClick } : any) {
  const classNames = `${style.btn} ${style[`${variant}_btn`]}`;

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export function MenuBtn() {
  const { isMini, toggleSidebar } = useSidebar();
  return (
    <button onClick={toggleSidebar} className={style.menu_btn}>
      <MenuIcon />
    </button>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`${style.theme_btn}`}>
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  );
}


// AZM
// Parent Button
const Btn = ({name, icon, type, isActive, onClick }) => {
 
  return(
    <>
      <button onClick={onClick}  type={type} className={`${style.button} ${isActive ? style.active_btn : '' }`}> <span className={style.icon}>{icon}</span> <span className={style.name}>{name}</span> </button>
    </>
  )
}

// Child Btn
export const FilterBtn = ({onFilterActive, onHandleFilter}) => {
 
  return(
    <Btn icon={<FilterIcon />} name={"Filter"} type={"button"} isActive={onFilterActive} onClick={onHandleFilter}  />
  )
}

export const AddBtn = ({onAddActive, onHandleAdd}) => {
  return(
    <Btn icon={<PlusIcons />} name={"Add"} type={"button"} isActive={onAddActive} onClick={onHandleAdd} />
  )
}

export const SortingBtn = ({isActive, onClick}) => {
  return(
    <Btn icon={<SortingIcon />} name={"Sorting"} type={"button"} isActive={isActive} onClick={onClick} />
  )
}

// export 
