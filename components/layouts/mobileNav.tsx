import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, StaffIcon, SiteIcon, PartnerIcon, VehicleIcon, ScheduleIcon } from '@/components/icons';
import style from '@/styles/layouts/mobileNav.module.scss';

export default function MobileNav () {
    const router = useRouter();

    const isActive = (path : any) => router.pathname === path;
    return (
        <div className={style.mobile_nav_container}>
            <ul>
                <li className={isActive('/') ? style.active : ''}>
                    <Link href='/'>
                        <span>
                            <HomeIcon />
                        </span>
                        <span>Home</span>
                    </Link>
                </li>
                <li className={isActive('/site') ? style.active : ''}>
                    <Link href='/site'>
                        <span>
                            <SiteIcon />
                        </span>
                        <span>Site</span>
                    </Link>
                </li>
                <li className={isActive('/staff') ? style.active : ''}>
                    <Link href='/staff'>
                        <span>
                            <StaffIcon />
                        </span>
                        <span>Staff</span>
                    </Link>
                </li>
                <li className={isActive('/vehicle') ? style.active : ''}>
                    <Link href='/vehicle'>
                        <span>
                            <VehicleIcon />
                        </span>
                        <span>Vehicle</span>
                    </Link>
                </li>
                <li className={isActive('/partner') ? style.active : ''}>
                    <Link href='/partner'>
                        <span>
                            <PartnerIcon />
                        </span>
                        <span>Partner</span>
                    </Link>
                </li>
                <li className={isActive('/schedule') ? style.active : ''}>
                    <Link href='/schedule '>
                        <span>
                            <ScheduleIcon />
                        </span>
                        <span>Schedule</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}