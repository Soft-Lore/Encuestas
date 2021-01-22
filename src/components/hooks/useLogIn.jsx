import { useState } from 'react'
import { validateName, validatePassword } from '../Validates'


const useLogIn = (userName, password) => {
    let writeFinish;
    const [values, setValues] = useState({
        username: "",
        password: "",
        errorName: "",
        errorPassword: ""
    })

    const captureName = () => {
        clearTimeout(writeFinish)

        writeFinish = setTimeout(() => {
            setValues({
                username: userName.current.value,
                errorName: validateName(userName.current.value),
                password: password.current.value,
                errorPassword: ""
            })
        }, 100);
    }
    const capturePassword = () => {
        clearTimeout(writeFinish)

        writeFinish = setTimeout(() => {
            setValues({
                username: userName.current.value,
                errorName: validateName(userName.current.value),
                password: password.current.value,
                errorPassword: validatePassword(password.current.value)
            })
        }, 100);
    }

    return{ values, captureName, capturePassword }
}

export default useLogIn