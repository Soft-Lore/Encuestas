import { useState, useEffect } from 'react'

const useGraphics = survey => {
    const [data, setData] = useState([{
        labels: []
    }])
    
    const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'gray', 'orange', 'pink'];

    useEffect(() => {
        survey && (
            setData(
                {
                    name: survey.map(rp => {return rp.name}),
                    labels: survey.map(rp => rp.options.map(resp => {return resp.option})),
                    datasets: {
                        data: survey.map(rp => rp.options.map(resp => {return resp.rate})),
                        backgroundColor: survey.map(rp => rp.options.map((resp, index) => {return colors[index]}))
                    }
                })
        )
    }, [survey])

    return data;
}

export default useGraphics