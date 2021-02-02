import React from 'react'
import cardImage from '../../img/encuesta.svg'
import '../css/Card.css'

const CardSurvey = ({ id, title, author, question, buttonTitle, toggleSurvey }) => {


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
        </div>
    )
}

export default CardSurvey