import { ThemeToggle } from '@/components/buttons';
import { NotificaitonIcon } from '../icons';
import style from '@/styles/layouts/header.module.scss';
import Image from 'next/image';
import sampleImage from '@/public/images/sample.png';

export default function Header ({toggleSidebar} : {toggleSidebar: () => void}) {
    return (
        <div className={style.header_container}> 
            <div className={style.logo}>
                <h1>Logo</h1>
            </div>
            <div className={style.header_right}>
                <ThemeToggle/>
                <NotificaitonIcon/>
                <div className={style.user_profile}>
                    <Image
                        src={sampleImage}
                        alt='sample image'
                        width={40}
                        height={40}
                        style={{borderRadius: '50px', border: '1px solid #333333'}}
                    />
                    
                </div>
            </div>
        </div>
    )
}