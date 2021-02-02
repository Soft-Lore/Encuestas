import React from 'react'
import LoadingImg from '../../img/loading.svg'
import '../css/Spinner.css'

const Spinner = () => {
    return(
        <div className="spinner">
            <img 
                src={ LoadingImg } 
                alt="Cargando..."
                className="spinner-img"
            />
            <h1 className="spinner-title">Cargando...</h1>
        </div>
    )
}

export default Spinner