import React from 'react'
import Modal from 'react-modal'
import '../css/modal.css'

//Indicandole a la aplicacion a donde debe pertenecer este modal
Modal.setAppElement('#root')

const ModalLogIn = ({ state, toggle, title, work, note }) => {
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
            <span className="text-note">{ note }</span>
            <div>
                <button className="btn-modal cancel" onClick={ toggle }>Cancelar</button>
                <button className="btn-modal acepted" onClick={ work }>Aceptar</button>
            </div>
        </Modal>
    )
}

export default ModalLogIn