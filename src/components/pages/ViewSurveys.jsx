import React, { useState } from 'react'
import { Nav } from '../molecules/index'
import { Errors } from '../atom/index'
import '../css/ViewSurvey.css'

const survey = {
    title: 'Encuesta 1',
    questions: [
        {
            name: '¿Color favorito?',
            options: [
                {
                    name: 'red'
                },
                {
                    name: 'blue'
                }
            ]
        },
        {
            name: '¿Asignatura favorita?',
            options: [
                {
                    name: 'matematicas'
                },
                {
                    name: 'español'
                },
                {
                    name: 'ciencias naturales'
                }
            ]
        },
        {
            name: '¿Convivencia?',
            options: [
                {
                    name: 'Zona rural'
                },
                {
                    name: 'Zona urbana'
                }
            ]
        },
    ]
}


const ViewSurveys = () => {
    const [result, setResult] = useState([])
    const [error, setError] = useState('')

    const validateOption = (name) => {
        const copiaState = result.filter(resp => resp.name !== name);
        const isName = result.find(resp => resp.name === name)
        return [copiaState, isName];
    }

    const setOption = (name, option) => {
        let [copy, isName] = validateOption(name)
        
        if(copy && isName !== undefined){
            const container = document.getElementById(isName.option + "Item").parentNode;
            container.classList.remove('repeat');
            
            setResult([
                ...copy,
                {
                    name: name,
                    option: option
                }
            ])
        } else{
            setResult([
                ...result,
                {
                    name: name,
                    option: option
                }
            ])
        }
    }

    const toggleOptions = ({ target }) => {
        const option = target.getAttribute('name');
        const name = target.getAttribute('data-question')
        const container = target.parentNode;

        setOption(name, option);
        container.classList.add('repeat');
    }

    const toggleSubmit = (e) => {
        e.preventDefault();
        if(result.length < survey.questions.length){
            return 'Complete la encuesta 😪😫';
        } else {
            console.log(result);
        }
    }

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
                            {survey.questions.map((resp, index) =>
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
                                                name={response.name}
                                                data-question={resp.name}
                                                onClick={ e => toggleOptions(e) }
                                                className="paragraph-survey"
                                                id={response.name + "Item"}
                                            >
                                                {response.name}
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