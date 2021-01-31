import { useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import Modal from '../molecules/ModalSurvey'

const Home = () => {
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
                <CardContainer>
                    <CardSurvey 
                        title="Color favorito"
                        author="Moises Eliel"
                        category="Gustos"
                        question="5"
                        buttonTitle={ "Eliminar" }
                    />
                </CardContainer>
            </MySurveys>
            <Modal 
                state={ active }
                toggle={ toggle }
            />
        </>
        
    )
}

export default Home