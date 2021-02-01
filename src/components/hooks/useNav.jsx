import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const useNav = () => {
    const history = useHistory();
    const [profile, setProfile] = useState()

    useEffect(() => {
        const getProfile = async () => {
            await axios.get('/api/profile')
                .then(resp => setProfile(resp.data.name))
                .catch(error => console.log(error))
        }

        getProfile();
    }, [])

    const logOut = async () => {
        const token = cookie.get('auth')
        
        if(token){
            await axios.get('/api/logout')
            .then(resp => resp)
            .catch(error => console.log(error))

            history.push('/login')
        } 
    }

    return [profile, logOut];
}

export default useNav