import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import CreateInput from './CreateInput'
import axios from 'axios'
import { BiAddToQueue, BiSend } from 'react-icons/bi'
import { Errors } from '../atom/index'
import { Token } from '../functions/index'
import '../css/ModalSurvey.css'
import sucessImg from '../../img/sucess.png'

Modal.setAppElement('#root')

const ModalSurvey = ({ state, toggle }) => {
    const data = Token();
    const inputTitle = useRef()
    const inputQuestion = useRef()
    const inputOption = useRef()
    const [options, setOptions] = useState([])
    const [error, setError] = useState()
    const [survey, setSurvey] = useState({
        created_by: "",
        description: '',
        questions: []
    })

    const inputHandle = (e) => {
        e.preventDefault();

        const name = inputQuestion.current.value;

        if(!inputTitle.current.value && !name) {
            setError('Los campos no pueden estar vacios')
        } else if(!inputTitle.current.value) {
            setError('Añada un titulo a la encuesta')
        } else if(!name) {
            setError('Añada una pregunta a la encuesta')
        } else if(options.length < 2 || options.length === 0) {
            setError('Añade 2 o mas opciones')
        } else {
            setSurvey({
                created_by: data._id,
                description: inputTitle.current.value,
                questions: [
                    ...survey.questions,
                    {
                        name,
                        options
                    }
                ]
            })
    
            inputQuestion.current.value = "";
            setOptions([]);
        }
    }

    const optionHandle = (e) => {
        e.preventDefault();

        const name = inputOption.current.value

        if(!name) {
            setError('Añade opciones a tus preguntas')
        } else {
            setOptions([
                ...options,
                name
            ])
            inputOption.current.value = "";
        }
    }

    const postSurvey = async (data) => {
        await axios.post('/api/poll', data)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!survey.questions || !survey.description) {
            setError('Asegurate de haber llenado correctamente los campos')
        } else {  
            postSurvey(survey)
            setError()
            setSurvey()
            const sucess = document.getElementById('sucess')
            sucess.style.display = 'flex'
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }
    }

    return (
        <Modal
            isOpen={ state }
            onRequestClose={ toggle }
            style={
                {
                    overlay: {
                        position: 'fixed',
                        zIndex: '100',
                        top: '0',
                        left: '0',
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        background: 'white',
                        outline: 'none',
                        width: '50rem',
                        height: 'auto',
                        maxHeight: '500px',
                        boxShadow: '0 0 34px 0 rgba(0, 0, 0, 0.24)',
                        overflowY: 'auto',
                        position: 'relative'
                    }
                }
            }
            className="modal-survey"
        >
            <div className="modal-head">
                <h1 className="modal-title">Crear nueva encuesta</h1>
                <button className="modal-close" onClick={ toggle }>X</button>
            </div>
            <form className="modal-body" onSubmit={handleSubmit}>
                <div className="survey-head">
                    <input
                        name="title"
                        type="text"
                        placeholder="Titulo de encuesta"
                        id="title"
                        className="survey-title"
                        ref={ inputTitle }
                        autoComplete="off"
                    />
                    <div className="tools-buttons">
                        <button 
                            className="add btn" 
                            onClick={inputHandle}
                            title="Añadir nueva pregunta"
                        >
                            <BiAddToQueue 
                                className="icon"
                            />
                        </button>
                        <button 
                            className="send btn"
                            title="Enviar encuesta"
                        >
                            <BiSend 
                                className="icon"
                            />
                        </button>
                    </div>
                </div>
                {
                    error && <Errors error={error}/>
                }
                <div className="survey-body">
                    <CreateInput
                        optionHandle={ optionHandle }
                        option={ inputOption }
                        question={ inputQuestion }
                        key="one"
                        />  
                </div>
            </form>
            <div className="survey-body">
                    {
                        survey && (
                            survey.questions.map((resp, index) =>
                                <div className="survey" key={ index * 20}>
                                    <h1 
                                        key={ index }
                                    >
                                        {resp.name}
                                    </h1>
                                    <ul>
                                    {
                                        resp.options.map((response, i) =>  <li key={ i }>
                                            <p
                                                key={ i }
                                            >
                                                {response}
                                            </p>
                                        </li>)
                                    }
                                    </ul>
                                </div>
                            )
                        )
                    }
            </div>
            <div className="sucess-content" id="sucess">
                <img className="sucess-img" src={sucessImg} alt=""/>
                <h1 className="sucess-title">Encuesta se creo correctamente.👍😁</h1>
            </div>   
        </Modal>
    )
}

export default ModalSurvey
