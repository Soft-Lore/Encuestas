import React from 'react'
import Modal from 'react-modal'
import '../css/modal.css'

Modal.setAppElement('#root')

const ModalLogIn = ({ state, toggle, title, work }) => {
    return(
        <Modal 
            isOpen={ state }
            onRequestClose={ toggle }
            style={
                {
                    overlay:{
                        backgroundColor: 'rgba(184, 184, 184, .4)',
                        zIndex: 20
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            }
            className="modal"
        >
            <h1 className="title-modal">{ title }</h1>
            <div>
                <button className="btn-modal cancel" onClick={ toggle }>Cancelar</button>
                <button className="btn-modal acepted" onClick={ work }>Aceptar</button>
            </div>
        </Modal>
    )
}

export default ModalLogIn