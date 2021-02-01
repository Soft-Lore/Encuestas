import React, { useState } from 'react'
import { Nav } from '../molecules/index'
import { Errors } from '../atom/index'
import { descript } from '../functions/index'
import { useSurvey } from '../hooks/index'
import cookies from 'universal-cookie'
import '../css/ViewSurvey.css'

const cookie = new cookies();

const ViewSurveys = ({ match }) => {
    const id = match.params._id;
    const profile = descript(cookie.get('auth'))
    const [survey, toggleOptions, toggleSubmit] = useSurvey(id, profile);
    const [error, setError] = useState('')

    return (
        <>
            <Nav />
            <form 
                className="viewSurvey form-viewsurvey" 
                onSubmit={ e => setError(toggleSubmit(e)) }
            >
                {
                    survey && (
                        <div className="survey-body">
                            <h1 className="title-survey">
                                { survey.title }
                            </h1>
                            {
                                error && (
                                    <Errors error={ error }/>
                                )
                            }
                            {survey.Poll.questions.map((resp, index) =>
                                <div
                                    className="survey"
                                    key={ index * 20}
                                >
                                    <h3 key={ index }>
                                        {resp.name}
                                    </h3>
                                    <ul className="list-survey">
                                    {
                                        resp.options.map((response, i) =>  
                                        <li 
                                            key={ i } 
                                            className="options-survey"
                                        >
                                            <p
                                                key={ i }
                                                name={response._id}
                                                data-question={resp._id}
                                                onClick={ e => toggleOptions(e) }
                                                className="paragraph-survey"
                                                id={response._id + "Item"}
                                            >
                                                {response.option}
                                            </p>
                                        </li>)
                                    }
                                    </ul>
                                </div>)
                            }
                    </div>      
                    )
                }
                <button 
                    className="btn-view__survey"
                    type="submit"
                >
                    Enviar Respuestas
                </button>
            </form>
        </>
    )
}

export default ViewSurveys