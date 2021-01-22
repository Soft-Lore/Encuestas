import { useState, useRef } from 'react'

const useForm = validate => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confPassword: ""
    });

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setValues({
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confPassword: confPasswordRef.current.value
        })

        setErrors(validate(values))
    }

    return { handleSubmit, usernameRef, emailRef, passwordRef, confPasswordRef, errors }
}

export default useForm