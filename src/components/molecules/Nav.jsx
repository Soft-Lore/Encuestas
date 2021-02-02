import React, { useContext } from 'react'
import Modal from './ModalLogIn'
import user from '../../img/user1.svg'
import { NavBar, NavButton, SectionButtons, NavOptions, SectionLogOut, LogOutOptions, ImgUser, ContainerOptions, NameUser } from '../styled/Nav';
import { useHistory } from 'react-router-dom'
import { useActive } from '../hooks/index'
import { Token } from '../tokenProvider'
import { logOut }  from '../functions/index'

const Nav = () => {
    const history = useHistory();
    const token = useContext(Token)
    const [active, toggleActive] = useActive();

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
                        { token.name }
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
            title={ "¿Estas seguro que deseas cerrar sesión?" }
            work={ logOut }
        />
        </>
    )
}

export default Nav