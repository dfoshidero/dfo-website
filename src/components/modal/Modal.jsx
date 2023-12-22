import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../utils/modalContext';
import './Modal.scss';

function Modal() {
  const { closeModal, modalContent, isModalOpen } = useContext(ModalContext);
  const [modalOpen, setModalOpen] = useState(false);

  // Close the modal when the backdrop is clicked
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Add the event listener when the modal is open
      document.addEventListener('click', handleBackdropClick);
      setModalOpen(true);
    } else {
      // Remove the event listener when the modal is closed
      document.removeEventListener('click', handleBackdropClick);
      setModalOpen(false);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [isModalOpen, closeModal]);

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
