// import { useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd,CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import { useActive, useSurveys } from '../hooks/index'
import { Spinner } from '../atom/index'
import { useHistory } from 'react-router-dom'
import Modal from '../molecules/ModalSurvey'
import Provider,  { defaultValue } from '../tokenProvider'


const Home = () => {
    const history = useHistory();
    const [active, toggleActive] = useActive();
    const url = `/api/userAllpoll/${defaultValue._id}`;
    const surveys = useSurveys(url)

    const toggleSurvey = id => {
        history.push(`/mysurvey/${id}`);
    }

    return (
        <>
            {
                surveys ? (
                  <Provider value={ defaultValue }>
                      <Nav />
                      <MySurveys>
                          <ButtonAddSurvey onClick={ toggleActive }>
                              Crear Nueva encuesta
                              <IconAdd />
                          </ButtonAddSurvey>
                          <CardContainer>
                            {
                                surveys.data.userDB.map((resp, index)=>  <CardSurvey
                                    key={index}
                                    title={resp.description}
                                    author={defaultValue.name}
                                    question={resp.questions.length}
                                    buttonTitle= "Ver"
                                    toggleSurvey={ () => toggleSurvey(resp._id)}
                                />)
                            }
                          </CardContainer>
                      </MySurveys>
                      <Modal 
                          state={ active }
                          toggle={ toggleActive }
                      />
                  </Provider>
                ) : <Spinner />
            }
        </>
      
        
    )
}

export default Home