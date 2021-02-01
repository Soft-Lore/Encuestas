import { validateUsername, validateEmail, validatePassword } from '../functions/Validates'
import { useState } from 'react'

const useForm = (usernameRef, emailRef, passwordRef) => {
    const [values, setValues] = useState({
        username: "",
        errorUsername: "",
        email: "",
        errorEmail: "",
        password: "",
        errorPassword: "",
    });

    const captureUsername = () => {
        setValues({
            username: usernameRef.current.value,
            errorUsername: validateUsername(usernameRef.current.value),
            email: emailRef.current.value,
            errorEmail: "",
            password: passwordRef.current.value,
            errorPassword: "",
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
        })
    }

    return { values, captureUsername, captureEmail, capturePassword }
}

export default useForm