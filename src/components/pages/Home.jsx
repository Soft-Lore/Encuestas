import { useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import { useActive, useSurveys } from '../hooks/index'
import { Spinner } from '../atom/index'
import { useHistory } from 'react-router-dom'
import { Token } from '../functions/index'
import Modal from '../molecules/ModalSurvey'
import Pagination from '../molecules/Pagination'

const Home = () => {
    const history = useHistory();
    const [page, setPage] = useState(1);
    const [active, toggleActive] = useActive();
    const data = Token();
    const url = `/api/userAllpoll/${data._id}`;
    const [surveys, extra, totalPages, surveysPerPage] = useSurveys(url)

    const toggleSurvey = id => {
        history.push(`/mysurvey/${id}`);
    }

    const lastIndex = page * surveysPerPage;
    const firstIndex = lastIndex - surveysPerPage;
    const currentSurveys = surveys && (surveys.data.userDB.slice(firstIndex, lastIndex))
    const paginate = numPage => setPage(numPage);

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
                                    currentSurveys.map((resp, index)=>
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
                            <Pagination 
                                page={page}
                                totalPages={totalPages}
                                paginate={paginate}
                            />
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