import React from 'react'
import { Cards, CardItem, CardHeader, CardButton, CardHeaders } from '../styled/index'

const CardSurvey = () => {
    return(
        <Cards>
            <CardHeaders>
                <h1>Titulo Encuesta</h1>
                <CardHeader src="https://www.cibagas.cl/wp-content/themes/options/images/skins/headers/full_width/header-purpleHaze.jpg" alt=""/>
            </CardHeaders>
            <CardItem two>
                <p>Author: Steven Rocha</p>
                <p>Categoria: Accion</p>
                <p>N° Preguntas: 10</p>
            </CardItem>
            <CardButton>
                Editar
            </CardButton>
        </Cards>
    )
}

export default CardSurvey