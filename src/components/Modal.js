import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    const handleCloseModal = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal">
                <button className="modal-close-button" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;