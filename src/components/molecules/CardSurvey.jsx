import React from 'react'
import '../css/Card.css'
import cardImage from '../../img/encuesta.svg'

const CardSurvey = ({ title, author, category, question }) => {
    return(
        <div className="card">
            <button className="cardItem ">
                <img src={ cardImage } alt="" className="imgCard"/>
                <h1 className="cardTitle">{ title }</h1>
            </button>
            <div className="cardItem">
                <p 
                    className="cardParagraph"
                >
                    <span>Autor</span>
                    { author }
                </p>
                <p 
                    className="cardParagraph"
                >
                    <span>Categoria</span>
                    { category }
                </p>
                <p 
                    className="cardParagraph"
                >
                    <span>N° Preguntas</span> 
                    { question }
                </p>
            </div>
            <button className="cardItem cardButton">
                Editar
            </button>
        </div>
    )
}

export default CardSurvey