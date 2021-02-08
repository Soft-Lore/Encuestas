import React from 'react'

const Errors = ({ error, secondary }) => {
    return(
        <p className={ secondary === "true" ?  "error error-profile" : "error" }>
            { error }
        </p>
    );
}

export default Errors;