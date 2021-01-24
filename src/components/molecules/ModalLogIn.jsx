import React from 'react'
import Modal from 'react-modal'
import '../css/modal.css'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'

const cookie = new Cookies()
Modal.setAppElement('#root')

const ModalLogIn = ({ state, toggle }) => {
    const history = useHistory()
    const logOut = async () => {
        const token = cookie.get('auth')
        if(token){
            await axios.get('/api/logout')
            .then(resp => console.log(resp))
            .catch(error => console.log(error))

            history.push('/login')
        } 
    }

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
            <h1 className="title-modal">¿Desea cerrar sesion?</h1>
            <div>
                <button className="btn-modal cancel" onClick={ toggle }>Cancelar</button>
                <button className="btn-modal acepted" onClick={ logOut }>Aceptar</button>
            </div>
        </Modal>
    )
}

export default ModalLogIn