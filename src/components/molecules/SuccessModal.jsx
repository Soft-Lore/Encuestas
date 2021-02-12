import React from 'react'
import Modal from 'react-modal'
import '../css/modal.css'

Modal.setAppElement('#root')

const sucessModal = ({ state, toggle, image, title, button }) => {
    return (
        <Modal
            isOpen={ state }
            onRequestClose={ toggle }
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            className='modal'
            style={
                {
                    overlay:{
                        backgroundColor: 'rgba(184, 184, 184, .4)',
                        zIndex: 99
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            }
        >
            <img className="success-img" src={ image } alt="modal-img"/>
            <span className="message-modal">{ title }</span>
            <button className="btn-modal acepted" onClick={ button }>Aceptar</button>
        </Modal>
    )
}

export default sucessModal
