import React from 'react'
import { Link } from 'react-router-dom'
import SingImg from '../../img/signup.png'
import useForm from '../hooks/useForm'
import validate from '../SignUpValidation'
import '../css/SingUp.css'

const SingUp = () => {
    const { handleSubmit, usernameRef, emailRef, passwordRef, confPasswordRef, errors } = useForm(validate);

    return (
        <div className="singUp-content">
            <div className="side1">
                <div className="image-container">
                    <img src={ SingImg } alt="singup"/>
                </div>
            </div>
            <div className="side2">
                <div className="side2-content">
                    <div className="title-singup">
                        <h1>Registrarse</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                        <input
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Nombre de Usuario"
                            ref={usernameRef}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Correo"
                            ref={emailRef}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            ref={passwordRef}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <input
                            name="confirmPass"
                            type="password"
                            id="confirmPass"
                            placeholder="Confirmar contraseña"
                            ref={confPasswordRef}
                        />
                        {errors.confPassword && <p className="error">{errors.confPassword}</p>}
                        <div className="buttons">
                            <button className="signup-btn">Registrarse</button>
                            <Link to={'/login'} className="login-btn">Iniciar Sesion</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp