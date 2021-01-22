import React from 'react'
import { useHistory } from 'react-router-dom'
import SingImg from '../../img/signup.png'
import useForm from '../hooks/useForm'
import validate from '../SignUpValidation'
import { Errors, TitleForm } from '../atom/index'
import '../css/SingUp.css'
import { SideImage } from '../molecules/index'

const SingUp = () => {
    const { handleSubmit, usernameRef, emailRef, passwordRef, confPasswordRef, errors } = useForm(validate);
    const history = useHistory()

    return (
        <div className="singUp-content">
            <SideImage image={ SingImg }/>
            <div className="side2">
                <div className="side2-content">
                    <TitleForm content="Registrarse"/>
                    <form onSubmit={handleSubmit} className="form">
                        <input
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Nombre de Usuario"
                            ref={usernameRef}
                        />
                        {errors.username && <Errors error={errors.username}/>}
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Correo"
                            ref={emailRef}
                        />
                        {errors.email && <Errors error={errors.email}/>}
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            ref={passwordRef}
                        />
                        {errors.password && <Errors error={errors.password}/>}
                        <input
                            name="confirmPass"
                            type="password"
                            id="confirmPass"
                            placeholder="Confirmar contraseña"
                            ref={confPasswordRef}
                        />
                        {errors.confPassword && <Errors error={errors.confPassword}/>}
                        <div className="buttons">
                            <button className="signup-btn">Registrarse</button>
                            <button className="login-btn" onClick={() => history.push('/login')}>Iniciar Sesion</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp