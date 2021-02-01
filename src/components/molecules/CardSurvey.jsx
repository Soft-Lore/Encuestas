import React from 'react'
import cardImage from '../../img/encuesta.svg'
import Modal from '../molecules/ModalLogIn'
import '../css/Card.css'
import { useActive } from '../hooks/index'

const CardSurvey = ({ id, title, author, question, buttonTitle, toggleSurvey }) => {
    const [active, toggleModal] = useActive();

    const deleteSurvey = () => {
        console.log('Encuesta borrada')
    }

    return(
        <div className="card">
            <div className="cardItem ">
                <img 
                    src={ cardImage } 
                    alt="Icono-encuesta" 
                    className="imgCard"
                />
                <h1 className="cardTitle">{ title }</h1>
            </div>
            <div className="cardItem">
                <p className="cardParagraph">
                    <span>Autor</span>
                    { author }
                </p>
                <p 
                    className="cardParagraph"
                >
                    <span>N° Preguntas</span> 
                    { question }
                </p>
            </div>
            <button 
                className="cardItem cardButton" 
                onClick={ () => toggleSurvey(id)}
            >
                { buttonTitle }
            </button>
            <Modal 
                state={ active }
                toggle={ toggleModal }
                title={ "Desea Eliminar la Encuesta?" }
                work={ deleteSurvey }
            />
        </div>
    )
}

export default CardSurvey