import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ModalContext } from '../../utils/modalContext';
import './Modal.scss';

function Modal() {
  const { closeModal, modalContent, isModalOpen } = useContext(ModalContext);
  const [modalOpen, setModalOpen] = useState(false);

  // Memoize the handleBackdropClick function
  const handleBackdropClick = useCallback((e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleBackdropClick);
      setModalOpen(true);
    } else {
      document.removeEventListener('click', handleBackdropClick);
      setModalOpen(false);
    }

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isModalOpen, handleBackdropClick]); // Now handleBackdropClick can be safely added as a dependency

  if (!modalOpen) return null;

  return (
    <div className={`modal-backdrop ${modalOpen ? 'open' : ''}`}>
      <div className={`modal ${modalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          {modalContent}
        </div>
      </div>
    </div>
  );
}

export default Modal;
