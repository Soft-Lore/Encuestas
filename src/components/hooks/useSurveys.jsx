import { useState, useEffect } from 'react'
import axios from 'axios'

const useSurveys = (url)=> {
    const [surveys, setSurveys] = useState();

    useEffect(() => {
        const getSurvey = async () => {
            await axios.get(url)
                .then(resp => {
                    setSurveys(resp)
                }).catch(error => console.log(error))
        }

        getSurvey();
    }, [url])

    return surveys;
}

export default useSurveys