import React from 'react'
import { useSurveys } from '../hooks/index'
// import { Pie } from 'react-chartjs-2'

const MySurvey = ({ match }) => {
    const url = `/api/poll/${match.params.id}`;
    const survey = useSurveys(url)
    

    // survey && (
    //     console.log(survey.data.Poll.questions)
    // )

    return(
        <h1>My suyrvey</h1>
    )
}

export default MySurvey