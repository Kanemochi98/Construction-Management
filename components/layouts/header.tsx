import { ThemeToggle } from '@/components/buttons';
import { NotificaitonIcon } from '../icons';
import style from '@/styles/layouts/header.module.scss';
import Image from 'next/image';
import sampleImage from '@/public/images/sample.png';
import { useState } from 'react';
import { isatty } from 'tty';
import Link from 'next/link';

export default function Header ({toggleSidebar} : {toggleSidebar: () => void}) {
    
    const [isActiveProfile, setIsActiveProfile] = useState(false);
    const toggleProfile = (e) => {
        // e.stopPropagation();
        setIsActiveProfile(!isActiveProfile);
    }
    // console.log(isActiveProfile)
    
    return (
        <div className={style.header_container}> 
            <div className={style.logo}>
                <h1>Logo</h1>
            </div>
            <div className={style.header_right}>
                <ThemeToggle/>
                <NotificaitonIcon/>
                <div 
                    className={style.user_profile}
                    
                >
                    <Image
                        onClick={toggleProfile}
                        src={sampleImage}
                        alt='sample image'
                        width={40}
                        height={40}
                        style={{borderRadius: '50px', border: '1px solid #333333'}}
                    />

                    {
                        isActiveProfile && 
                        <div className={style.logout_container}>
                            <Link
                                href={"/login"}
                            >
                                Logout
                            </Link>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}