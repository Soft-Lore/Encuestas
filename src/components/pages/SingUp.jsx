import React from 'react'
import SingImg from '../../img/signup.png'
import '../css/SingUp.css'

const SingUp = () => {
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
                    <form className="form">
                        <input
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Nombre de Usuario"
                        />
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Correo"
                        />
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                        />
                        <input
                            name="confirmPass"
                            type="password"
                            id="confirmPass"
                            placeholder="Confirmar contraseña"
                        />
                        <div className="buttons">
                            <button className="signup-btn">Registrarse</button>
                            <button className="login-btn">Iniciar Sesion</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp