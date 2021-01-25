import { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd } from '../styled/Home'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const Home = () => {
    const history = useHistory()

    useEffect(() => {
        const token = cookie.get('auth')

        if(token){
            history.push('/')
        }else {
            history.push('/login')
        }
    
    }, [history])

    return (
        <>
            <Nav />
            <MySurveys>
                <ButtonAddSurvey>
                    Crear Nueva encuesta
                    <IconAdd />
                </ButtonAddSurvey>
            </MySurveys>
        </>
    )
}

export default withRouter(Home)