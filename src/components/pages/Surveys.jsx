import React, { useState, useEffect } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'
import axios from 'axios'
import '../css/Surveys.css'
import Pagination from 'components/molecules/Pagination'

const Surveys = () => {
    const [surveyCard, setSurveyCard] = useState();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const surveysPerPage = 16;

    useEffect(() => {
        const getSurvey = async () => {
            await axios.get('/api/allPoll')
                .then(resp => {
                    setSurveyCard(resp.data.Poll)
                    setTotalPages(Math.ceil(resp.data.Poll.length / surveysPerPage))
                }).catch(error => console.log(error))
        }

        getSurvey();
    }, [])

    console.log(totalPages);

    const lastIndex = page * surveysPerPage;
    const firstIndex = lastIndex - surveysPerPage;
    const currentSurveys = surveyCard && (surveyCard.slice(firstIndex, lastIndex))

    const paginate = numPage => setPage(numPage)

    return (
        <>
            <Nav />
            <MySurveys>
                <CardContainer>
                    {
                        surveyCard && (
                                currentSurveys.map((response, index) =>
                                    <div className="surveys" key={index}>
                                        <CardSurvey
                                            title={response.description}
                                            author
                                            question={response.questions.length}
                                            buttonTitle={ "Ver" }
                                        />
                                    </div>
                                )
                            )
                    }
                </CardContainer>
                <Pagination
                    page={ page }
                    totalPages={ totalPages }
                    paginate={ paginate }
                />
            </MySurveys>
        </>
    )
}

export default Surveys