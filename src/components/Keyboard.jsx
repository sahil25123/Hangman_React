import React from 'react'
import KeyboardBtn from './KeyboardBtn';

export default function Keyboard({getInput, disabled}) {
    const getLetters = () => {
        let result = []
        for(let i = 65; i<65+26; i++){
            result.push(String.fromCharCode(i));
        }
        return result;
    }
    
    const letters = getLetters();
    const buttons = letters.map((letter) => {
        return (
            <KeyboardBtn 
                getInput={getInput} 
                letter={letter} 
                key={letter.charCodeAt(0)}
                disabled={disabled}
            />
        )
    })

    return (
        <div className="keyboard-container">{buttons}</div>
    )
}
