import React, { useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuBtn } from '@/components/buttons';
import { HomeIcon, StaffIcon, SiteIcon, PartnerIcon, VehicleIcon, ScheduleIcon } from '@/components/icons';
import style from '@/styles/layouts/sidebar.module.scss';

export default function SideNav({isMini} : {isMini: boolean}) {
  const router = useRouter();

  const isActive = (path:any) => router.pathname === path;

  return (
    <div className={`${style.sidebar} ${isMini ? style.mini : ''}`}>
      <div className={style.menu_toggle_container}>
        <MenuBtn/>
      </div>
      <ul>
        <li className={isActive('/') ? style.active : ''}>
          <Link href="/" className={style.sidebar_item}>
            <span className={style.icon}>
              <HomeIcon />
            </span>
            {!isMini && <span className={style.title}>Home</span>}
          </Link>
        </li>

        <li className={isActive('/staff') ? style.active : ''}>
          <Link href="/staff" className={style.sidebar_item}>
            <span className={style.icon}>
              <StaffIcon />
            </span>
            {!isMini && <span className={style.title}>Staff</span>}
          </Link>
        </li>

        <li className={isActive('/site') ? style.active : ''}>
          <Link href="/site" className={style.sidebar_item}>
            <span className={style.icon}>
              <SiteIcon />
            </span>
            {!isMini && <span className={style.title}>Site</span>}
          </Link>
        </li>

        <li className={isActive('/partner') ? style.active : ''}>
          <Link href="/partner" className={style.sidebar_item}>
            <span className={style.icon}>
              <PartnerIcon />
            </span>
            {!isMini && <span className={style.title}>Partner</span>}
          </Link>
        </li>

        <li className={isActive('/vehicle') ? style.active : ''}>
          <Link href="/vehicle" className={style.sidebar_item}>
            <span className={style.icon}>
              <VehicleIcon />
            </span>
            {!isMini && <span className={style.title}>Vehicle</span>}
          </Link>
        </li>

        <li className={isActive('/schedule') ? style.active : ''}>
          <Link href="/schedule" className={style.sidebar_item}>
            <span className={style.icon}>
              <ScheduleIcon/>
            </span>
            {!isMini && <span className={style.title}>Schedule</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}
