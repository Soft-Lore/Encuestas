import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const LogOut = async () => {
    const history = useHistory();
    
    const token = cookie.get('auth')
    
    if(token){
        await axios.get('/api/logout')
        .then(resp => resp)
        .catch(error => console.log(error))

        history.push('/login')
    } 
}

export default LogOut