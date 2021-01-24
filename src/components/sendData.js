import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const toggleSubmit = async (e, form, history) => {
    e.preventDefault()
    const request = {
        email: form.userEmail,
        password: form.password
    }
 
    await axios.post('/api/login', request)
    .then(resp => {
        return resp.data
    })
    .then(response => {
        if(response.isAuth){
            cookies.set('token', response, {path: '/'})
            history.push('/')
        }else {
            if(!response.isAuth){
                console.log(response);
            }
        }
    })
}