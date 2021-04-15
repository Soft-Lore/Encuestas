import React, { useState, useEffect } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, CardContainer, NotPoll } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import { Spinner } from '../atom/index'
import Pagination from 'components/molecules/Pagination'
import { useHistory } from 'react-router-dom'
import { usePaginate } from '../hooks/index';
import axios from 'axios'

const Surveys = () => {
    const [surveyCard, setSurveyCard] = useState();
    const [totalPages, setTotalPages] = useState(0)
    const history = useHistory();
    const {page, surveysPerPage, paginate, currentSurveys} = usePaginate(surveyCard)

    useEffect(() => {
        const getSurvey = async () => {
            await axios.get('/api/allPoll')
                .then(resp => {
                    setSurveyCard(resp.data.Poll)
                    setTotalPages(Math.ceil(resp.data.Poll.length / surveysPerPage))
                }).catch(error => console.log(error))
        }

        getSurvey();
    }, [surveysPerPage])

    const toggleSurvey = id => {
        history.push(`/viewsurvey/${id}`)
    }

    return (
        <>
          {
            surveyCard ? (
                <>
                  <Nav />
                  <MySurveys>
                    {
                        !currentSurveys.length ? (
                            <NotPoll>Aún no hay encuestas por mostrar 😪😫</NotPoll>
                        ) : (
                        <div>
                          <CardContainer>
                            {
                              currentSurveys.map((response, index) =>
                                <CardSurvey
                                    id={ response._id }
                                    key={response._id}
                                    title={response.description}
                                    author={response.author}
                                    question={response.questions.length}
                                    buttonTitle={ "Ver" }
                                    toggleSurvey={ toggleSurvey }
                                />
                              )   
                            }
                          </CardContainer>
                          <Pagination
                            page={ page }
                            totalPages={ totalPages }
                            paginate={ paginate }
                          />
                        </div>
                      )
                    }
                  </MySurveys>
                </>
            ) : <Spinner />
          }
        </>
    )
}

export default Surveys