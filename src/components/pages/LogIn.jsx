import React, { useRef, useState } from 'react'
import LogInImage from '../../img/login.png'
import { SideImage } from '../molecules/index'
import { TitleForm, Errors } from '../atom/index'
import { useHistory } from 'react-router-dom'
import { useLogIn } from '../hooks/index'
import axios from 'axios'
import '../css/LogIn.css'
import viewImage from '../../img/view.svg'
import { viewPassword } from '../functions/index'

const LogIn = (props) => {
    const history = useHistory()
    const email = useRef()
    const password = useRef()
    const [error, setError] = useState()
    let active = false;
    const { form, captureEmail, capturePassword } = useLogIn(email, password)

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
                    <TitleForm content="Iniciar Sesion"/>
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
                            />
                        </div>
                            {
                                form.errorEmail && <Errors error={ form.errorEmail }/> 
                            }
                        <div className="formPassword containerForm">
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="Ingrese su Contraseña"
                                className="input inputPassword"
                                onChange={ capturePassword }
                                ref={ password }
                            />
                            <img 
                                src={ viewImage } 
                                alt="Ver"
                                className="viewPassword"
                                onClick={ () => active = viewPassword(active, password) }
                            />
                        </div>
                            {
                                form.errorPassword &&  <Errors error={ form.errorPassword }/>
                            }
                        <div className="buttons">
                            {
                                error ? (
                                    <Errors error={ error }/>
                                ): null
                            }
                            <button 
                                className="signup-btn"
                            >
                                Entrar
                            </button>
                            <button 
                                className="login-btn" 
                                onClick={() => history.push('/singup')}>
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