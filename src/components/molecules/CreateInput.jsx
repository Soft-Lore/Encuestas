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
                        place="Option"
                        styles="options"
                        require={ option }
                    />
                </li>
            </ul>
            <button className="add-option">
                <BiPlus onClick={optionHandle}/>
            </button>    
        </div>
    )
}

export default CreateInput
