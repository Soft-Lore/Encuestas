import { useEffect, useState } from 'react'
import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd } from '../styled/Home'
import axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        axios.get('/api/users')
            .then(resp => setUsers(Object(resp).data.users))
    }, [])

    return (
        <>
            <Nav />
            <MySurveys>
                <ButtonAddSurvey secondary>
                    Crear Nueva encuesta
                    <IconAdd />
                </ButtonAddSurvey>
            </MySurveys>
        </>
    )
}

export default Home