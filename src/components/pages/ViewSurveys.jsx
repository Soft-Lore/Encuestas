import React, { useState, useContext } from 'react'
import { Nav } from '../molecules/index'
import { Errors, Spinner } from '../atom/index'
import { useSurvey } from '../hooks/index'
import { Token } from '../tokenProvider'
import '../css/ViewSurvey.css'

const ViewSurveys = ({ match }) => {
    const id = match.params._id;
    const data = useContext(Token)
    const [survey, toggleOptions, toggleSubmit] = useSurvey(id, data);
    const [error, setError] = useState('')

    return (
        <>
        {
          survey ? (
            <>
                <Nav />
                <form 
                    className="viewSurvey form-viewsurvey" 
                    onSubmit={ e => setError(toggleSubmit(e)) }
                >
                    {
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
                    }
                    <button 
                        className="btn-view__survey"
                        type="submit"
                        >
                        Enviar Respuestas
                    </button>
                </form>
            </>
          ) : <Spinner />
        }
        </>
    )
}

export default ViewSurveys