import React from 'react'
import { BiPlus } from 'react-icons/bi'

const CreateInput = ({ count, optionHandle, option }) => {
    const inputsNum = []
    const optionNum = []

    for (let i = 1; i <= count; i++) {
        inputsNum.push(i)
    }
    for (let i = 1; i <= option; i++) {
        optionNum.push(i)
        
    }
    return (
        <ul className="lista-inputs">
            {
                inputsNum.map(number => (
                    <li key={number}>
                        <div className="survey">
                            <input 
                                name="question"
                                type="text"
                                placeholder={"Pregunta " + number}
                                className="questions"
                            />
                            <div className="options-content">
                                <ul>
                                    {
                                        optionNum.map(number => (
                                            <li key={number}>
                                                <input
                                                    name="option"
                                                    type="text"
                                                    placeholder={"Option " + number}
                                                    className="options"
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <button className="add-option">
                                <BiPlus onClick={optionHandle}/>
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default CreateInput
