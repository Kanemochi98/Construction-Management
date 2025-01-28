import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { useSidebar } from '@/context/SidebarContext';
import { MenuIcon, FaSun, FaMoon } from '../icons';
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
