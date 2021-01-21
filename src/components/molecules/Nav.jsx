import React from 'react'
import { NavBar, NavButton, SectionButtons, NavLogOut } from '../styled/Nav';

const Nav = () => {
    return(
        <NavBar>
            <SectionButtons>
                <NavButton to="/home" secondary>
                    Mis Encuestas
                </NavButton>
                <NavButton to="/surveys">
                    Responder Encuestas
                </NavButton>
            </SectionButtons>
            <NavLogOut secondary>
                Cerrar Sesion
            </NavLogOut>
        </NavBar>
    )
}

export default Nav