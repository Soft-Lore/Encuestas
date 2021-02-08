import React from 'react'

const Input = ({ require, name, place, styles, key, secondary }) => {
    return(
        <input 
            type="text"
            name={ name }
            placeholder={ place }
            className={ styles }
            ref={ require }
            key={ key }
            disabled={ secondary === "true" ? true : null }
            autoComplete="off"
        />
    );
}

export default Input