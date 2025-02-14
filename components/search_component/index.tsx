import { useState } from 'react';
import { SearchIcon } from '../icons';
import Styles from './Styles.module.scss';
import { AddBtn, FilterBtn, SortingBtn } from '../buttons';


export const SearchComponent = ({onSearchValue, onSearchChage, onSearchSubmit, onAddActive, onHandleAdd, onFilterActive, onHandleFilter}) => {
    
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.search_container}>
                    <div className={Styles.search_bar}>
                        <input 
                            type="text" 
                            value={onSearchValue} 
                            onChange={onSearchChage} 
                            placeholder='Search...' 
                            className={Styles.search_box}  
                        />
                        <button 
                            type='button'
                            className={Styles.search_btn}
                            onClick={onSearchSubmit}
                        >
                            <SearchIcon />
                        </button>
                    </div>
                </div>
                <div className={Styles.btn_container}>
                    <FilterBtn
                        onFilterActive={onFilterActive}
                        onHandleFilter={onHandleFilter}
                    />
                    <SortingBtn
                       
                    />
                    <AddBtn 
                        onAddActive={onAddActive}  
                        onHandleAdd={onHandleAdd}
                    />
                </div>
            </div>
        </>
    )
}