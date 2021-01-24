import React, { useState } from 'react'
import { NavBar, NavButton, SectionButtons, NavLogOut } from '../styled/Nav';
import Modal from './ModalLogIn'

const Nav = () => {
    const [active, setActive] = useState(false);
    const toggleLogOut = async () => {
        setActive(!active);
    }
    
    return(
        <>
        <NavBar>
            <SectionButtons>
                <NavButton to="/home">
                    Mis Encuestas
                </NavButton>
                <NavButton to="/surveys">
                    Responder Encuestas
                </NavButton>
            </SectionButtons>
            <NavLogOut onClick={ toggleLogOut }>
                Cerrar Sesion
            </NavLogOut>
        </NavBar>
        <Modal 
            state={ active } 
            toggle={ toggleLogOut }
        />
        </>
    )
}

export default Nav