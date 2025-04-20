import React from 'react'
import KeyboardBtn from './KeyboardBtn';

export default function Keyboard() {
    const getLetters = ()=>{
        let result= []
    for(let i = 65; i<65+26; i++){
        result.push(String.fromCharCode(i));
    }
    return result;
}
const letters=getLetters();
const buttons = letters.map((letter)=>{
    return (
        <KeyboardBtn letter={letter} key={letter.charCodeAt(0)}/>
    )
})

     
  return (
    <div className='Keyboard-container'>{buttons}
        

      
    </div>
  )
}
