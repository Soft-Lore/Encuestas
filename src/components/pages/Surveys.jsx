import { useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, CardContainer } from '../styled/Home'
import { CardSurvey } from '../molecules/index'

const Surveys = () => {

    return (
        <>
            <Nav />
            <MySurveys>
                <CardContainer>
                    <CardSurvey
                        buttonTitle={ "Ver" }
                    />
                </CardContainer>
            </MySurveys>
        </>
    )
}

export default Surveys