import React, { useState, useEffect } from 'react'
import { NavBar, NavButton, SectionButtons, NavOptions, SectionLogOut, LogOutOptions, ImgUser, ContainerOptions, NameUser } from '../styled/Nav';
import Modal from './ModalLogIn'
import axios from 'axios'
import user from '../../img/user1.svg'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

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

    const logOut = async () => {
        const token = cookie.get('auth')
        
        if(token){
            await axios.get('/api/logout')
            .then(resp => resp)
            .catch(error => console.log(error))

            history.push('/login')
        } 
    }
    
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
            title={ "Desea Cerrar la Sesion" }
            work={ logOut }
        />
        </>
    )
}

export default Nav