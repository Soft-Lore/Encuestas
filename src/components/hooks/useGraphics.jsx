import { useState, useEffect } from 'react'

const useGraphics = survey => {
    const [data, setData] = useState([{
        labels: []
    }])
    
    
    useEffect(() => {
        const colors = ['#da1e37', '#0466c8', '#2ec4b6', '#fdffb6', '#cdb4db', '#81b29a', '#6761df', '#adb5bd'];
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