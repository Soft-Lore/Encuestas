import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import SingImg from '../../img/signup.png'
import useForm from '../hooks/useForm'
import { Errors, TitleForm } from '../atom/index'
import '../css/SingUp.css'
import { SideImage } from '../molecules/index'

const SingUp = () => {
    const history = useHistory();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { values, captureUsername, captureEmail, capturePassword } = useForm(usernameRef, emailRef, passwordRef);

    const handleSubmit = e => {
        e.preventDefault();
        const valuesName = {
            username: values.username,
            email: values.email,
            password: values.password,
        }
        console.log(valuesName);
    }

    return (
        <div className="singUp-content">
            <SideImage image={ SingImg }/>
            <div className="side2">
                <div className="side2-content">
                    <TitleForm content="Registrarse"/>
                    <form onSubmit={e => handleSubmit(e)} className="form">
                        <input
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Nombre de Usuario"
                            ref={usernameRef}
                            onChange={captureUsername}
                        />
                        {values.errorUsername && <Errors error={values.errorUsername}/>}
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Correo"
                            ref={emailRef}
                            onChange={captureEmail}
                        />
                        {values.errorEmail && <Errors error={values.errorEmail}/>}
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            ref={passwordRef}
                            onChange={capturePassword}
                        />
                        {values.errorPassword && <Errors error={values.errorPassword}/>}
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