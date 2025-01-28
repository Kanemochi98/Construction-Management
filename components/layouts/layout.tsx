import { useSidebar } from '@/context/SidebarContext'; // Import the context
import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';
import MobileNav from '@/components/layouts/mobileNav';
import style from '@/styles/layouts/layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isMini, toggleSidebar } = useSidebar(); 

  return (
    <div
      className={`${style.layout_container} ${isMini ? style.mini_sidebar : '' }`}
    >
      <div className={style.sidebar}>
        <Sidebar isMini={isMini} />
      </div>
      <div className={style.layout_rightside}>
        <div className={style.header}>
          <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className={style.main_content_container}>{children}</div>
        <div className={style.mobile_nav_container}>
          <MobileNav/>
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
