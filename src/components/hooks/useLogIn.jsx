import { useState } from 'react'
import { validateEmail, validatePassword } from '../functions/index'


const useLogIn = (userEmail, password) => {
    const [form, setForm] = useState({
        userEmail: "",
        password: "",
        errorEmail: "",
        errorPassword: ""
    })

    const captureEmail = () => {
        setForm({
            ...form,
            userEmail: userEmail.current.value,
            errorEmail: validateEmail(userEmail.current.value)
        })
    }
    const capturePassword = () => {
        setForm({
            ...form,
            password: password.current.value,
            errorPassword: validatePassword(password.current.value)
        })
    }

    return{ form, captureEmail, capturePassword }
}

export default useLogIn