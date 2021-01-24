import React from 'react'
import { useHistory } from 'react-router-dom'
import errorImg from '../../img/error404.png'
import '../css/Error.css'

const Error = () => {
    const history = useHistory();
    return (
        <div className="error404">
            <img src={errorImg} alt="error404Img"/>
            <p className="errorText">Error404: Page Not Found!</p>
            <div className="btn-back" onClick={() => history.push('/home')}>
                <span>Back</span>
            </div>
        </div>
    )
}

export default Error
