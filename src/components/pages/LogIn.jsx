import React, { useRef } from 'react'
import { SideImage } from '../molecules/index'
import LogInImage from '../../img/login.png'
import { TitleForm, Errors } from '../atom/index'
import { useHistory } from 'react-router-dom'
import { useLogIn } from '../hooks/index'

const LogIn = () => {
    const history = useHistory()
    const email = useRef()
    const password = useRef()

    const { values, captureName, capturePassword } = useLogIn(email, password)

    const sendData = (e) => {
        e.preventDefault()
        const val = {
            username: values.username,
            password: values.password
        }
        console.log(val);
    }

    return (
        <div className="singUp-content">
            <SideImage image={ LogInImage }/>
            <div className="side2">
                <div className="side2-content">
                    <TitleForm content="Iniciar Sesion"/>
                    <form className="form form-login" onSubmit={ e => sendData(e) }>
                        <input
                            name="username"
                            type="email"
                            required
                            placeholder="Ingrese su Email"
                            className="input"
                            ref={ email }
                            onChange={ captureName }
                        />
                        {
                            values.errorName && <Errors error={ values.errorName }/> 
                        }
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Ingrese su Contraseña"
                            className="input"
                            onChange={ capturePassword }
                            ref={ password }
                        />
                        {
                            values.errorPassword &&  <Errors error={ values.errorPassword }/>
                        }
                        <div className="buttons">
                            <button className="signup-btn">Entrar</button>
                            <button className="login-btn" onClick={() => history.push('/singup')}>Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn