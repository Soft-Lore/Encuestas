import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const sucessModal = ({ state, toggle, image, title, button }) => {
    return (
        <Modal
            isOpen={ state }
            onRequestClose={ toggle }
            className='Modal'
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
        >
            
        </Modal>
    )
}

export default sucessModal
