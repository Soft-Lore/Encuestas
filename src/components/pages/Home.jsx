import { useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd } from '../styled/Home'
import Cookies from 'universal-cookie'
import Modal from '../molecules/ModalSurvey'

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

    const [active, setActive] = useState(false)
    const toggle = async () => {
        setActive(!active)
    }

    return (
        <>
            <Nav />
            <MySurveys>
                <ButtonAddSurvey onClick={ toggle }>
                    Crear Nueva encuesta
                    <IconAdd />
                </ButtonAddSurvey>
            </MySurveys>
            <Modal 
                state={ active }
                toggle={ toggle }
            />
        </>
        
    )
}

export default withRouter(Home)