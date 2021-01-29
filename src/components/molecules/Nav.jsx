import React, { useState, useEffect } from 'react'
import { NavBar, NavButton, SectionButtons, NavOptions, SectionLogOut, LogOutOptions, ImgUser, ContainerOptions, NameUser } from '../styled/Nav';
import Modal from './ModalLogIn'
import axios from 'axios'
import user from '../../img/user1.svg'
import { useHistory } from 'react-router-dom'

const Nav = () => {
    const history = useHistory()
    const [profile, setProfile] = useState()
    const [active, setActive] = useState(false);
    const toggleLogOut = async () => {
        setActive(!active);
    }

    useEffect(() => {
        const getProfile = async () => {
            await axios.get('/api/profile')
                .then(resp => setProfile(resp.data.name))
                .catch(error => console.log(error))
        }

        getProfile();
    }, [])
    
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
                        <NavOptions onClick={ toggleLogOut }>
                            Cerrar Sesion
                        </NavOptions>
                    </li>
                </LogOutOptions>
            </SectionLogOut>
        </NavBar>
        <Modal 
            state={ active } 
            toggle={ toggleLogOut }
        />
        </>
    )
}

export default Nav