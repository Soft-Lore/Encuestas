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
                <div>
                    <h1>Usuarios</h1>
                    <ul>
                        {
                            users.map(m => <li>{m.name}</li>)
                        }
                    </ul>
                    <h1>Id</h1>
                    <ul>
                        {
                            users.map(m => <li>{m._id}</li>)
                        }
                    </ul>
                </div>
            </MySurveys>
        </>
    )
}

export default Home