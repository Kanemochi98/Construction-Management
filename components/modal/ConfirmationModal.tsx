// components/modals/ConfirmationModal.tsx
import React from 'react';
import styles from './ConfirmationModal.module.scss'; // create this file for styling

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<Props> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onCancel} className={styles.cancel}>Cancel</button>
          <button onClick={onConfirm} className={styles.confirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};
