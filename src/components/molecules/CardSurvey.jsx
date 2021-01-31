import React, { useState } from 'react'
import '../css/Card.css'
import cardImage from '../../img/encuesta.svg'
import Modal from '../molecules/ModalLogIn'

const CardSurvey = ({ title, author, category, question, buttonTitle }) => {
    const [active, setActive] = useState();

    const toggleDelete = async () => {
        setActive(!active);
    }

    const deleteSurvey = () => {
        console.log('Encuesta borrada')
    }

    return(
        <div className="card">
            <div className="cardItem ">
                <img src={ cardImage } alt="" className="imgCard"/>
                <h1 className="cardTitle">{ title }</h1>
            </div>
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
            <button className="cardItem cardButton" onClick={toggleDelete}>
                { buttonTitle }
            </button>
            <Modal 
                state={ active }
                toggle={ toggleDelete }
                title={ "Desea Eliminar la Encuesta?" }
                work={ deleteSurvey }
            />
        </div>
    )
}

export default CardSurvey