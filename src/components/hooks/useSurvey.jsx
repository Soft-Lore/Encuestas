import { useState, useEffect } from 'react'
import axios from 'axios'

const useSurvey = (id, profile, sucessHandle) => {
    const [survey, setSurvey] = useState();
    const [result, setResult] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`/api/poll/${id}`)
            .then(resp => {
                return resp.data
            })
            .then(response => setSurvey(response))
            .catch(error => console.log(error))
        }

        getData();
    }, [id])

    const validateOption = (name) => {
        const copiaState = result.filter(resp => resp.id_questions !== name);
        const isName = result.find(resp => resp.id_questions === name)
        return [copiaState, isName];
    }

    const setOption = (name, option) => {
        let [copy, isName] = validateOption(name)
        
        if(copy && isName !== undefined){
            const container = document.getElementById(isName.id_options + "Item").parentNode;
            container.classList.remove('repeat');
            
            setResult(
                [
                ...copy,
                {
                    user: profile._id,
                    id_questions: name,
                    id_options: option
                }
            ])
        } else{
            setResult([
                ...result,
                {
                    user: profile._id,
                    id_questions: name,
                    id_options: option
                }
            ])
        }
    }

    const toggleOptions = ({ target }) => {
        const option = target.getAttribute('name');
        const name = target.getAttribute('data-question')
        const container = target.parentNode;

        setOption(name, option);
        container.classList.add('repeat');
    }

    const sendData = (data) => {
        data.map(resp => axios.post(`/api/answer/Poll/${id}`, resp)
        .then(response => console.log(response))
        .catch(error => console.log(error)))
    }

    const toggleSubmit = (e) => {
        e.preventDefault();
        if(result.length < survey.Poll.questions.length){
            return 'Complete la encuesta 😪😫';
        } else {
           sendData(result);
           sucessHandle();
        }
    }

    return[survey, toggleOptions, toggleSubmit];
}

export default useSurvey