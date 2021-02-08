import { useSurveys, useGraphics, useActive } from '../hooks/index'
import { Spinner } from '../atom/index'
import { Nav, Modal } from '../molecules/index'
import { Doughnut } from 'react-chartjs-2'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import SadImage from '../../img/sad.svg'
import '../css/Grafica.css'

const MySurvey = ({ match }) => {
    const history = useHistory();
    const url = `/api/poll/${match.params.id}`;
    const [active, toggleActive] = useActive()
    const [survey] = useSurveys(url, true)
    const data = useGraphics(survey)
    let validate = 0;

    //Funcion para eliminar encuesta
    const deleteSurvey = async () => {
        let result;
        await axios.delete(url)
        .then(resp => result = resp.status)
        .catch(error => console.log(error))

        if(result === 200){
            toggleActive()
            history.push('/')
        }
    }
   
    return(
        <>
            <Nav />
            {
                data.labels !== undefined ? (
                    data.datasets.data[0].map(result => result !== 0 ? validate : validate++),
                    validate === data.datasets.data[0].length ? (
                        <div className="not-result graphic">
                            <p className="title-not-result"><span>Nota:</span> Aún no tenemos resultados para esta encuesta</p>
                            <img 
                                src={ SadImage } 
                                alt="Encuesta no respondida"
                                className="not-result-img"
                            />
                        </div>
                    ) : (
                         data.labels.map((resp, index) => 
                            <div key={ index * 20 } className="graphic">
                                <h3 className="title-result">{data.name[index]}</h3>
                                <Doughnut  
                                    key={index}
                                    data={{
                                        labels: resp,
                                        datasets:[{
                                            data: data.datasets.data[index],
                                            backgroundColor: data.datasets.backgroundColor[index]
                                        }]
                                    }}
                                    width={10}
                                    height={3}
                                    options={{ responsive: true }}
                                />
                        </div>)
                    )
                ) : <Spinner />
            }
            <button
                className="btn-delete__survey"
                onClick={toggleActive}
            >
                Eliminar encuesta
            </button>
            <Modal
                state={ active }
                toggle={ toggleActive }
                title="¿Estas seguto que deseas eliminar esta encuesta?"
                note="Nota: Si eliminas la encuesta, perderas todos los resultados obtenidos de la misma"
                work={deleteSurvey}
            />
        </>
    )
}

export default MySurvey