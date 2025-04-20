import React from 'react'
import Keyboard from './Keyboard'

export default function Input({getInput, disabled}) {
    return (
        <div className="input-container">
            <Keyboard getInput={getInput} disabled={disabled}/>
        </div>
    )
}
