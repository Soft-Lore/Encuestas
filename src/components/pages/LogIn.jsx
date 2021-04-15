import React, { useRef, useState } from 'react'
import LogInImage from '../../img/login.png'
import axios from 'axios'
import viewImage from '../../img/view.svg'
import { SideImage } from '../molecules/index'
import { TitleForm, Errors } from '../atom/index'
import { useHistory } from 'react-router-dom'
import { useLogIn } from '../hooks/index'
import { viewPassword } from '../functions/index'
import '../css/LogIn.css'

const LogIn = (props) => {
    const history = useHistory()
    const email = useRef()
    const password = useRef()
    const [error, setError] = useState()
    const { form, captureEmail, capturePassword } = useLogIn(email, password)
    let active = false;

    const toggleSubmit = async (e) => {
        e.preventDefault()
        const request = {
            email: form.userEmail,
            password: form.password
        }
     
       if(!request.email || !request.password){
            setError("Los datos estan vacios como el corazón de ella. (Llenalos) 😣😥")
       } else{
            await axios.post('/api/login', request)
            .then(resp => {
                return resp.data
            })
            .then(response => {
                if(response.isAuth){
                    props.handle();
                    history.push('/');
                }else {
                    if(!response.isAuth){
                        setError(response.message)
                    }
                }
            })
       }
    }

    return (
        <div className="singUp-content">
            <SideImage image={ LogInImage }/>
            <div className="side2">
                <div className="side2-content">
                    <TitleForm content="Iniciar Sesión"/>
                    <form 
                        className="form form-login"
                        onSubmit={ e => toggleSubmit(e) }
                    >
                        <div className="formEmail containerForm">
                            <input
                                name="userEmail"
                                type="email"
                                required
                                placeholder="Ingrese su Email"
                                className="input inputEmail"
                                ref={ email }
                                onChange={ captureEmail }
                                autoComplete="off"
                            />
                        </div>
                        {form.errorEmail && <Errors error={ form.errorEmail } />}
                        <div className="formPassword containerForm">
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="Ingrese su Contraseña"
                                className="input inputPassword"
                                onChange={ capturePassword }
                                ref={ password }
                                autoComplete="off"
                            />
                            <img 
                                src={ viewImage } 
                                alt="Ver"
                                className="viewPassword"
                                onClick={ () => active = viewPassword(active, password) }
                            />
                        </div>
                        {form.errorPassword &&  <Errors error={ form.errorPassword } />}
                        <div className="buttons">
                            {
                                error ? (
                                    <Errors error={ error }/>
                                ): null
                            }
                            <button className="signup-btn">Entrar</button>
                            <button 
                                className="login-btn" 
                                onClick={() => history.push('/singup')}
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn