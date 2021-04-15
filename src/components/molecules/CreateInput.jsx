import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Input } from '../atom/index'

const CreateInput = ({ question, optionHandle, option }) => {
    return (
        <div className="survey">
            <Input 
                name="question"
                place="Pregunta"
                styles="questions"
                require={ question }
            />
            <ul>
                <li>
                    <Input 
                        name="Option"
                        place="Opción"
                        styles="options"
                        require={ option }
                    />
                </li>
            </ul>
            <button 
                className="add-option" 
                title="Añadir opción"
                onClick={optionHandle}
            >
                <BiPlus />
            </button>    
        </div>
    )
}

export default CreateInput
