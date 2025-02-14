import Styles from './styles.module.scss';
import { RightIcon } from '../icons';
import { useState, useEffect, useRef } from 'react';

export const DataList = ({cols, datas, isMobile, onEdit}) => {


    //  const [isMobile, setIsMobile] = useState(false);
        // useEffect(() => {
        //     if (typeof window !== 'undefined') {
        //       const handleResize = () => {
        //         if(window.innerWidth < 600) {

        //             onHandleMobile(window.innerWidth <= 600)
        //         } 
                

        //       };
        
        //       handleResize(); // Set initial value
        //       window.addEventListener('resize', handleResize);
        
        //     //   console.log(window.innerWidth)
        //       return () => {
        //         window.removeEventListener('resize', handleResize);
        //       };
        //     }
        // }, []);

        // row expend
        const [isExpended, setIsExpanded] = useState(false);
        const [isActiveRowId, setIsActiveRowId] = useState(null);
        const expendRow = (id, e) => {
            e.stopPropagation();
            setIsActiveRowId( id === isActiveRowId ? null : id)
            setIsExpanded(!isExpended);

        }

    // Table Scroll
    const scrollContainerRef = useRef(null);
    const [activeScrollRow, setActiveScrollRow] = useState(false)

    const handleHorizontalScroll = () => {
        if( scrollContainerRef.current ) {

            const scrollLeft = scrollContainerRef.current.scrollLeft;
            // setScrollPosition(scrollLeft);
            if (scrollLeft > 0 ) {
                setActiveScrollRow(true)
            }
            if(scrollLeft == 0) {
                setActiveScrollRow(false)
            }
        }
    }

    // set edit
    const handleEdit = (id) => {
        onEdit(id)
    }

    useEffect(()=>{

            const scrollContainer = scrollContainerRef.current;

            if (scrollContainer) {
                scrollContainer.addEventListener('scroll', handleHorizontalScroll);
              }
    
            return () => {
                if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleHorizontalScroll);
                }
            };
        // }
    },[])

    return (
        <>
        {
            isMobile ? 
            <div className={Styles.mobile_container}>
                {
                    datas.map((value) => (
                        // console.log(value["id"]);

                        <div 
                            key={value["id"]} 
                            className={Styles.row} 
                            onClick={() => handleEdit(value["id"])} 
                        >
                            <div className={Styles.data_container}>
                                <div key={value["id"]} className={Styles.img_container}>
                                    {
                                        value["img"] != undefined ? <img src={`/images/${value["img"]}`} alt="" /> : null
                                    }
                                    
                                </div>
                                <div className={Styles.grid_data}>
                                    {
                                        Object.keys(cols).map((header, i) => (
                                            header === "img" ? "" : 
                                                <div className={`${Styles.cell} ${isActiveRowId === value["id"] && Styles.expended}`} key={i}>
                                                    <span className={Styles.header}>{cols[header]}</span>
                                                    <span className={Styles.data}>{value[header]}</span>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                            <div className={Styles.arrow}>
                                <div  
                                    className={isActiveRowId === value["id"] ? `${Styles.down_arrow}` : `${Styles.right_arrow}`} 
                                    onClick={(e)=> expendRow(value["id"], e)} 
                                >
                                    <RightIcon />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> : 
            <div 
                className={Styles.table_container} 
                ref={scrollContainerRef}
            >
                <div className={Styles.table_header}>
                    {
                        
                        Object.keys(cols).map((value, index)=> (
                            <div className={Styles.col} key={index}>{cols[value]}</div>
                            
                        ))
                    }
                    <div className={Styles.col}>
                        
                    </div>
                </div>
                <div className={Styles.table_body}>
                    {
                        datas.map((row)=>(
                            // console.log(row.["id"])
                            <div 
                                className={Styles.row} 
                                key={row["id"]}  
                                onClick={() => {handleEdit(row["id"])}}
                            >
                                {
                                    Object.keys(cols).map((col,i)=>(
                                        col === "img" ?  
                                        <div key={i} className={`${Styles.cell} ${activeScrollRow && Styles.scroll_cell} `}>
                                            <div className={Styles.img_container}>
                                            {/* {console.log(typeof row["img"])} */}
                                            {
                                                row["img"] != undefined ?  <img src={`/images/${row["img"]}`} alt="" /> : null
                                            }
                                            
                                            </div>
                                        </div>
                                        : 
                                        <div key={i} className={`${Styles.cell} ${activeScrollRow && Styles.scroll_cell} `}>{row[col]}</div>
                                    ))
                                }
                                <div className={Styles.cell}>
                                    <RightIcon />
                                </div>
                            </div>
                        ))
                        
                    }
                    
                </div>
            </div> 
        }
        </>
    )
}

export const MobileList = ({cols, datas} ) => {
    return (
        <>
            <div className={Styles.list_container}>
                Mobile List
            </div>
        </>
    )
}