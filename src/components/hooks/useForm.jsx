import { useState } from 'react'
import { validateUsername, validateEmail, validatePassword, validateConfPassword } from '../SignUpValidation'

const useForm = (usernameRef, emailRef, passwordRef, confPasswordRef) => {
    const [values, setValues] = useState({
        username: "",
        errorUsername: "",
        email: "",
        errorEmail: "",
        password: "",
        errorPassword: "",
        confPassword: "",
        errorConfPassword: ""
    });

    const captureUsername = () => {
        setValues({
            username: usernameRef.current.value,
            errorUsername: validateUsername(usernameRef.current.value),
            email: emailRef.current.value,
            errorEmail: "",
            password: passwordRef.current.value,
            errorPassword: "",
            confPassword: confPasswordRef.current.value,
            errorConfPassword: ""
        })
    }

    const captureEmail = () => {
        setValues({
            username: usernameRef.current.value,
            errorUsername: validateUsername(usernameRef.current.value),
            email: emailRef.current.value,
            errorEmail: validateEmail(emailRef.current.value),
            password: passwordRef.current.value,
            errorPassword: "",
            confPassword: confPasswordRef.current.value,
            errorConfPassword: ""
        })
    }

    const capturePassword = () => {
        setValues({
            username: usernameRef.current.value,
            errorUsername: validateUsername(usernameRef.current.value),
            email: emailRef.current.value,
            errorEmail: validateEmail(emailRef.current.value),
            password: passwordRef.current.value,
            errorPassword: validatePassword(passwordRef.current.value),
            confPassword: confPasswordRef.current.value,
            errorConfPassword: ""
        })
    }

    const captureConfPassword = () => {
        setValues({
            username: usernameRef.current.value,
            errorUsername: validateUsername(usernameRef.current.value),
            email: emailRef.current.value,
            errorEmail: validateEmail(emailRef.current.value),
            password: passwordRef.current.value,
            errorPassword: validatePassword(passwordRef.current.value),
            confPassword: confPasswordRef.current.value,
            errorConfPassword: validateConfPassword(confPasswordRef.current.value)
        })
    }

    return { values, captureUsername, captureEmail, capturePassword, captureConfPassword }
}

export default useForm