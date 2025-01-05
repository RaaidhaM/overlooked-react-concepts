import React from 'react'
import ReactDOM from 'react-dom'
import './modalStyles.css'

/* 1. Add the new DOM node <div id="modal-root"></div> in your index.html file.
   2. Use ReactDOM.createPortal to render the modal component into this node.
*/
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null // Don't render if modal is not open

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Render into #modal-root DOM node
  )
}

export default Modal
