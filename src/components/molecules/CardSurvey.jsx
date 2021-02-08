import React, { useState, useEffect, useRef } from 'react'
import cardImage from '../../img/encuesta.svg'
import '../css/Card.css'

const CardSurvey = ({ id, title, author, question, buttonTitle, toggleSurvey }) => {
    const [show, setShow] = useState(false)
    const cardRef = useRef()

    useEffect(() => {
        const options = {
            threshold: 0
        }
        const showChapter = (entries, observer) => {
            const entry = entries[0];

            if(entry.isIntersecting){
                setShow(true);
                observer.disconnect();
            }
        }
        
        const observer = new IntersectionObserver(showChapter, options);
        
        observer.observe(cardRef.current);
    }, [])

    return(
        <div className="card" ref={ cardRef }>
           {
               show ? (
                   <>
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
                   </>
               ) : null
           }
        </div>
    )
}

export default CardSurvey