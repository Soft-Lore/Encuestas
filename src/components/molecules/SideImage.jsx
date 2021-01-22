import React from 'react'

const SideImage = ({ image }) => {
    return(
        <div className="side1">
            <div className="image-container">
                <img src={ image } alt="singup"/>
            </div>
        </div>
    )
}

export default SideImage