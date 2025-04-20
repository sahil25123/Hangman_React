import React from 'react'

export default function KeyboardBtn({letter, getInput, disabled}) {
    const handleClick = () => {
        if (!disabled) {
            getInput({ letter });
        }
    }

    return (
        <button 
            className="keyboard-btn" 
            onClick={handleClick} 
            disabled={disabled}
            type="button"
        >
            {letter}
        </button>
    )
}
