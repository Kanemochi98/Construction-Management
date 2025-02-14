import { CloseIcon } from '../icons';
import Styles from './Styles.module.scss';

export const Modal = ({children, isOpen, onClose, title}) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains(Styles.modal_overlay)) {
          onClose();
        }
      };
    return(
        <div 
            className={Styles.modal_overlay}
            onClick={handleOverlayClick}
        >
             <div className={Styles.modal_content}>
                <div className={Styles.modal_header}>
                    <div className={Styles.modal_name}>
                        {title}
                    </div>
                    <div 
                        className={Styles.close}
                        onClick={onClose}    
                    >
                        <CloseIcon />
                    </div>
                </div>
                <div className={Styles.modal_children} >
                    {children}
                </div>
             </div>
        </div>
    )
}