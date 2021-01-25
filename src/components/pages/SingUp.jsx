import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SingImg from '../../img/signup.png'
import useForm from '../hooks/useForm'
import { Errors, TitleForm } from '../atom/index'
import '../css/SingUp.css'
import { SideImage } from '../molecules/index'
import axios from 'axios'

const SingUp = () => {
    const history = useHistory();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const { values, captureUsername, captureEmail, capturePassword } = useForm(usernameRef, emailRef, passwordRef);

    const handleSubmit = async e => {
        e.preventDefault();
        
        const data= {
            name: values.username,
            email: values.email,
            password: values.password
        }

        await axios.post('/api/signup', data)
            .then(resp => {
                return resp.data
            })
            .then(resp => {
                if(resp.isAuth) 
                    history.push('/');
                else
                    setError(resp.message);
            })
    }

    return (
        <div className="singUp-content">
            <SideImage image={ SingImg }/>
            <div className="side2">
                <div className="side2-content">
                    <TitleForm content="Registrarse"/>
                    <form onSubmit={e => handleSubmit(e)} className="form">
                        {
                            error ? (
                                <Errors error={ error }/>
                            ) : null
                        }
                        <input
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Nombre de Usuario"
                            ref={usernameRef}
                            onChange={captureUsername}
                            className="inputSingUp"
                        />
                        {values.errorUsername && <Errors error={values.errorUsername}/>}
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Correo"
                            ref={emailRef}
                            onChange={captureEmail}
                            className="inputSingUp"
                        />
                        {values.errorEmail && <Errors error={values.errorEmail}/>}
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            ref={passwordRef}
                            onChange={capturePassword}
                            className="inputSingUp"
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