import React, { useRef, useState } from 'react'
import SingImg from '../../img/signup.png'
import useForm from '../hooks/useForm'
import axios from 'axios'
import viewImage from '../../img/view.svg'
import { useHistory } from 'react-router-dom'
import { Errors, TitleForm } from '../atom/index'
import { SideImage } from '../molecules/index'
import { viewPassword } from '../functions/index'
import '../css/SingUp.css'

const SingUp = (props) => {
    const history = useHistory();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState();
    const { values, captureUsername, captureEmail, capturePassword } = useForm(usernameRef, emailRef, passwordRef);
    let active = false;

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
                if(resp.isAuth){
                    props.handle();
                    history.push('/');
                }
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
                    <form 
                        onSubmit={e => handleSubmit(e)} 
                        className="form"
                    >
                        {
                            error ? (
                                <Errors error={ error }/>
                            ) : null
                        }
                        <div className="username-content containerSignUp">
                            <input
                                name="username"
                                type="text"
                                id="username"
                                placeholder="Nombre de Usuario"
                                ref={usernameRef}
                                onChange={captureUsername}
                                className="input"
                                autoComplete="off"
                                />
                        </div>
                        {values.errorUsername && <Errors error={values.errorUsername}/>}
                        <div className="email-content containerSignUp">
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Correo"
                                ref={emailRef}
                                onChange={captureEmail}
                                className="input"
                                autoComplete="off"
                                />
                        </div>
                        {values.errorEmail && <Errors error={values.errorEmail}/>}
                        <div className="password-content containerSignUp">
                            <input
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                ref={passwordRef}
                                onChange={capturePassword}
                                className="input"
                                autoComplete="off"
                            />
                            <img 
                                src={ viewImage } 
                                alt="Ver"
                                className="viewPasswordSignUp"
                                onClick={ () => active = viewPassword(active, passwordRef) }
                            />
                        </div>
                        {values.errorPassword && <Errors error={values.errorPassword}/>}
                        <div className="buttons">
                            <button className="signup-btn">Registrarse</button>
                            <button 
                                className="login-btn" 
                                onClick={() => history.push('/login')}
                            >
                                Iniciar Sesion
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp