import { useState, useEffect } from 'react'
import axios from 'axios'

const useSurveys = (url, optional)=> {
    const [surveys, setSurveys] = useState();

    useEffect(() => {
        const getSurvey = async () => {
            await axios.get(url)
                .then(resp => {
                    optional ? setSurveys(resp.data.Poll.questions) : setSurveys(resp)
                }).catch(error => console.log(error))
        }

        getSurvey();
    }, [url, optional])


    return surveys;
}

export default useSurveys