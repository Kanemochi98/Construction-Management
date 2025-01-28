import Layout from '@/components/layouts/layout';
import { HomeIcon, StaffIcon, VehicleIcon, SiteIcon, PartnerIcon, ScheduleIcon, NotificaitonIcon } from '@/components/icons';
import {FormBtn, MenuBtn, ThemeToggle} from '@/components/buttons';
import { FormInput } from '@/components/inputs';
import style from './style.module.scss';

export default function Ui () {
    return (
        <Layout>
            <div className={style.ui_container}>
                <div className={style.ui_group}>
                    <h1 className={style.ui_header}>Icons</h1>
                    <div className={style.ui_item_wrapper}>
                        <HomeIcon />
                        <StaffIcon />
                        <VehicleIcon />
                        <SiteIcon />
                        <PartnerIcon />
                        <ScheduleIcon />
                        <NotificaitonIcon />
                    </div>
                </div>
                <div className={style.ui_group}>
                    <h1 className={style.ui_header}>Buttons</h1>
                    <div className={style.ui_item_wrapper}>
                        <FormBtn type='button' variant='cancel'>Cancel</FormBtn>
                        <FormBtn type='submit' variant='submit'>Save</FormBtn>
                        <MenuBtn/>
                        <ThemeToggle/>
                    </div>
                </div>
                <div className={style.ui_group}>
                    <h1 className={style.ui_header}>Inputs</h1>
                    <div className={style.ui_item_wrapper}>
                        <FormInput
                          label="Name"
                          id="name"
                          name="name"
                          required={true}
                          placeholder="Please enter your name"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}