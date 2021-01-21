import { Nav } from '../molecules/index'
import { MySurveys, ButtonAddSurvey, IconAdd } from '../styled/Home'

const Home = () => {
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