import React, { useRef } from 'react'
import '../css/Profile.css'
import { useProfile } from '../hooks/index'
import { Errors } from '../atom/index'
import { Nav } from '../molecules/index'
import viewImage from '../../img/view.svg'
import { viewPassword } from '../functions/index'

const Profile = () => {
    const [userdates, toggleSubmit,toggleInput, error, deleteAccount] = useProfile()
    const errors = error.name;
    const password = useRef()
    const confPassword = useRef();
    let active = false;

    return(
       <>
       <Nav />
        {
            userdates && (
                <div className="profile-container">
                    <div className="profile">
                        <header className="profile-header">
                            <h1 className="profile-title">
                                Información personal
                            </h1>
                        </header>
                        {
                           errors ? <Errors error={ errors } secondary="true"/> : null
                        }
                        <form className="profile-form" onSubmit={ e => toggleSubmit(e) }>
                            <section className="profile-section profile-dates">
                                <label 
                                    className="lbl lbl-name"
                                >
                                    Nombre
                                </label>
                                <input 
                                    className="inputText input-name"
                                    name="name"
                                    type="text"
                                    defaultValue={ userdates.name }
                                    onChange={ e => toggleInput(e) }
                                    autoComplete="off"
                                    required
                                />
                                <label 
                                    className="lbl lbl-email"
                                >
                                    Correo electronico
                                </label>
                                <input 
                                    className="inputText input-email"
                                    type="text"
                                    name="email"
                                    defaultValue={ userdates.email }
                                    onChange={ e => toggleInput(e) }
                                    autoComplete="off"
                                    required
                                />
                            </section>
                            <h1 className="profile-title change-Password">
                                Cambiar contraseña
                            </h1>
                            <section className="profile-section profile-password">
                                <label 
                                    className="lbl lbl-newPassoword"
                                >
                                    Nueva contraseña
                                </label>
                                <div className="containerInputPassword">
                                    <input 
                                        className="inputText input-newPassword"
                                        type="password"
                                        onChange={ e => toggleInput(e) }
                                        autoComplete="off"
                                        name="newPassword"
                                        ref={ confPassword }
                                    />
                                    <img 
                                        src={ viewImage } 
                                        alt="Ver"
                                        className="viewPassword viewPasswordProfile"
                                        onClick={ () => active = viewPassword(active, confPassword) }
                                    />
                                </div>
                                <label 
                                    className="lbl lbl-confirmPassword"
                                >
                                    Confirmar nueva contraseña
                                </label>
                                <div className="containerInputPassword">
                                    <input
                                        className="inputText input-confirmPassword"
                                        type="password"
                                        name="password"
                                        onChange={ e => toggleInput(e) }
                                        autoComplete="off"
                                        ref={ password }
                                    />
                                    <img 
                                        src={ viewImage } 
                                        alt="Ver"
                                        className="viewPassword viewPasswordProfile"
                                        onClick={ () => active = viewPassword(active, password) }
                                    />
                                </div>
                            </section>
                            <button 
                                type="submit" 
                                className="buttonProfile sendData"
                            >
                                Guardar Datos
                            </button>
                            <button className="buttonProfile deleteAccount" onClick={ deleteAccount }>
                                Eliminar cuenta
                            </button>
                        </form>
                    </div>
                </div>
            )
        }
       </>
    )
}

export default Profile