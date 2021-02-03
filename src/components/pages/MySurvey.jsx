import { useSurveys, useGraphics } from '../hooks/index'
import { Spinner } from '../atom/index'
import { Nav } from '../molecules/index'
import { Pie } from 'react-chartjs-2'
import SadImage from '../../img/sad.svg'
import '../css/Grafica.css'

const MySurvey = ({ match }) => {
    const url = `/api/poll/${match.params.id}`;
    const survey = useSurveys(url, true)
    const data = useGraphics(survey)
    let validate = 0;
   
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
                                <Pie 
                                    key={index}
                                    data={{
                                        labels: resp,
                                        datasets:[{
                                            data: data.datasets.data[index],
                                            backgroundColor: data.datasets.backgroundColor[index]
                                        }]
                                    }}  
                                    options={{
                                        responsive:true
                                    }}
                                />
                        </div>)
                    )
                ) : <Spinner />
            }
        </>
    )
}

export default MySurvey