import React from 'react'
import Modal from './ModalLogIn'
import user from '../../img/user1.svg'
import { NavBar, NavButton, SectionButtons, NavOptions, SectionLogOut, LogOutOptions, ImgUser, ContainerOptions, NameUser } from '../styled/Nav';
import { useHistory } from 'react-router-dom'
import { useActive, useNav } from '../hooks/index'

const Nav = () => {
    const history = useHistory();
    const [active, toggleActive] = useActive();
    const [profile, logOut] = useNav();

    return(
        <>
        <NavBar>
            <SectionButtons>
                <NavButton to="/" secondary="true">
                    Mis Encuestas
                </NavButton>
                <NavButton to="/surveys">
                    Responder Encuestas
                </NavButton>
            </SectionButtons>
            <SectionLogOut>
                <ContainerOptions>
                    <ImgUser src={ user } alt=""/>
                    <NameUser>
                        { profile }
                    </NameUser>
                </ContainerOptions>
                <LogOutOptions>
                    <li>
                        <NavOptions onClick={ () => history.push('/profile') }>
                            Editar Perfil
                        </NavOptions>
                    </li>
                    <li>
                        <NavOptions onClick={ toggleActive }>
                            Cerrar Sesion
                        </NavOptions>
                    </li>
                </LogOutOptions>
            </SectionLogOut>
        </NavBar>
        <Modal 
            state={ active } 
            toggle={ toggleActive }
            title={ "Desea Cerrar la Sesion" }
            work={ logOut }
        />
        </>
    )
}

export default Nav