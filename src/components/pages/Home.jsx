import { useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import { parseJwt } from '../functions/decryptToken'
import Modal from '../molecules/ModalSurvey'
import cookies from 'universal-cookie'
import Provider from '../tokenProvider'

const cookie = new cookies();

const Home = () => {
    const data = cookie.get('auth');
    const token = parseJwt(data)
    const [active, setActive] = useState(false)
    const toggle = async () => {
        setActive(!active)
    }

    return (
        <Provider value={ token }>
            <Nav />
            <MySurveys>
                <ButtonAddSurvey onClick={ toggle }>
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
            <Modal 
                state={ active }
                toggle={ toggle }
            />
        </Provider>
        
    )
}

export default Home