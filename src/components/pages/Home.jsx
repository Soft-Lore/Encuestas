import { useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import Cookies from 'universal-cookie'
import { CardSurvey } from '../molecules/index'

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
                <CardContainer>
                    <CardSurvey 
                        title="Color favorito"
                        author="Moises Eliel"
                        category="Gustos"
                        question="5"
                    />
                </CardContainer>
            </MySurveys>
        </>
    )
}

export default withRouter(Home)