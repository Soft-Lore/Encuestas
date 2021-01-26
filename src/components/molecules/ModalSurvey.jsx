import React, { useState } from 'react'
import Modal from 'react-modal'
import '../css/ModalSurvey.css'
import { BiAddToQueue, BiSend } from 'react-icons/bi'
import CreateInput from './CreateInput'

Modal.setAppElement('#root')

const ModalSurvey = ({ state, toggle }) => {
    const [number, setNumber] = useState(1);
    const [option, setOption] = useState(1);

    const inputHandle = (e) => {
        e.preventDefault();
        setNumber(number + 1);
    }

    const optionHandle = (e) => {
        e.preventDefault();
        setOption(option + 1)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Modal
            isOpen={ state }
            onRequestClose={ toggle }
            style={
                {
                    overlay: {
                        position: 'fixed',
                        zIndex: '100',
                        top: '0',
                        left: '0',
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        background: 'white',
                        outline: 'none',
                        width: '50rem',
                        height: 'auto',
                        maxHeight: '488px',
                        boxShadow: '0 0 34px 0 rgba(0, 0, 0, 0.24)',
                        overflowY: 'auto',
                        position: 'relative'
                    }
                }
            }
            className="modal-survey"
        >
            <div className="modal-head">
                <h1 className="modal-title">Crear nueva encuesta</h1>
                <button className="modal-close" onClick={ toggle }>X</button>
            </div>
            <form className="modal-body" onSubmit={handleSubmit}>
                <div className="survey-head">
                    <div className="survey-title">
                        <input
                            name="title"
                            type="text"
                            placeholder="Titulo de encuesta"
                            id="title"
                            className="title"
                        />
                    </div>
                    <div className="tools-buttons">
                        <button className="add btn">
                            <BiAddToQueue className="icon" onClick={inputHandle}/>
                        </button>
                        <button className="send btn">
                            <BiSend className="icon"/>
                        </button>
                    </div>
                </div>
                <div className="survey-body">
                    <CreateInput
                        count={ number }
                        optionHandle={ optionHandle }
                        option={ option }
                    />
                </div>
            </form>
        </Modal>
    )
}

export default ModalSurvey
