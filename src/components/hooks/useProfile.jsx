import { useState, useEffect } from 'react'
import cookies from 'universal-cookie'
import { validateName, validatePassword } from '../Validates'
import axios from 'axios';

const cookie = new cookies()

//Desencriptar token
const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64));
}

const useProfile = () => {
    const userData = parseJwt(cookie.get('auth'))
    const [token, setToken] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [isPassword, setIsPassword] = useState();

    let [error, setError] = useState({
        name: ''
    })
    
    useEffect(() => {
        const initialState = async () => {
            await setToken({
                ...token,
                name: userData.name,
                email: userData.email
            })
        }

        initialState()
    }, [])

    const validateError = (name, element) => {
        if(name === 'name'){
            setError({
                name: validatePassword(element)
            })
        } else if (name === 'email') {
            setError({
                name: validateName(element)
            })
        } else if (name === 'newPassword'){
            setIsPassword(element)
            
        } else if (name === 'password'){
            if(element === isPassword){
                setError({
                    name: ""
                })
            }else{
                setError({
                    name: "Las contraseñas no coinciden"
                })
            }
        }
    }

    const toggleInput = async (e) => {
        const element = e.target.name
        const elementValue = e.target.value

        validateError(element, elementValue);

        await setToken({
            ...token,
            [element]: elementValue
        })
    }

    const updateProfile = async (name, email, password) => {
        await axios.put(`/api/users/${userData._id}`, {
            name: name,
            email: email,
            password: password
        })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const deleteAccount = async () => {
        await axios.delete(`/api/users/${userData._id}`)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const toggleSubmit = async (e) => {
        e.preventDefault();

        if(error.name.length > 0){
            setError({
                name: "Porfavor, revise los campos llenados previamente"
            })
        }else{
            updateProfile(token.name, token.email, token.password);
        }

    }
    
    return [token, toggleSubmit, toggleInput, error, deleteAccount];
}

export default useProfile