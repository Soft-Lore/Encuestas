import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import { useActive, useSurveys } from '../hooks/index'
import { Spinner } from '../atom/index'
import { useHistory } from 'react-router-dom'
import { Token } from '../functions/index'
import Modal from '../molecules/ModalSurvey'

const Home = () => {
    const history = useHistory();
    const data = Token();
    const url = `/api/userAllpoll/${data._id}`;
    const [active, toggleActive] = useActive();
    const [surveys, extra] = useSurveys(url)

    //Redirigir a los detalles de una encuesta
    const toggleSurvey = id => {
        history.push(`/mysurvey/${id}`);
    }

    return (
        <>
            {
                surveys && data ? (
                    <>
                        <Nav />
                        <MySurveys>
                            <ButtonAddSurvey onClick={ toggleActive }>
                                Crear Nueva encuesta
                                <IconAdd />
                            </ButtonAddSurvey>
                            <CardContainer>
                                {
                                    surveys.data.userDB.map((resp, index)=>
                                        <CardSurvey
                                            key={index}
                                            title={resp.description}
                                            author={data.name}
                                            question={resp.questions.length}
                                            buttonTitle= "Ver"
                                            toggleSurvey={ () => toggleSurvey(resp._id)}
                                        />
                                    )
                                }
                            </CardContainer>
                        </MySurveys>
                        <Modal 
                            state={ active }
                            toggle={ toggleActive }
                            reload={ extra }
                        />
                    </>
                ) : <Spinner />
            }
        </>
    )
}

export default Home