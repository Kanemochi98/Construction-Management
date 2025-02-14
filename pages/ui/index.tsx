import Layout from '@/components/layouts/layout';
import { HomeIcon, StaffIcon, VehicleIcon, SiteIcon, PartnerIcon, ScheduleIcon, NotificaitonIcon, FilterIcon, SortingIcon, PlusIcons, SearchIcon } from '@/components/icons';
import {AddBtn, FilterBtn, FormBtn, MenuBtn, ThemeToggle} from '@/components/buttons';
import { DateInput, FormInput, InputComponent, SearchBar, SelectBoxComponent } from '@/components/inputs';
import style from './style.module.scss';
import { SearchComponent } from '@/components/search_component';

export default function Ui () {
    const types = [
        { id: 1, type: 'Car' },
        { id: 2, type: 'Bike' },
        { id: 3, type: 'Truck' },
       
      ];
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
                        <FilterIcon />
                        <SortingIcon />
                        <PlusIcons />
                        <SearchIcon />
                        <SearchComponent  />
                    </div>
                </div>
                <div className={style.ui_group}>
                    <h1 className={style.ui_header}>Buttons</h1>
                    <div className={style.ui_item_wrapper}>
                        <FormBtn type='button' variant='cancel'>Cancel</FormBtn>
                        <FormBtn type='submit' variant='submit'>Save</FormBtn>
                        <MenuBtn/>
                        <ThemeToggle/>
                        <FilterBtn />
                        <AddBtn />
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
                        <SearchBar />
                        <div style={{width: '500px', border: '1px solid red'}}>

                            <InputComponent 
                                label={"label"} 
                                required={true}   
                                placeholder='Enter Your label'
                            />
                            <SelectBoxComponent 
                                label="Label" 
                                required={true} 
                                options={types} 
                                def_value="Select One "
                            />
                            <DateInput />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}