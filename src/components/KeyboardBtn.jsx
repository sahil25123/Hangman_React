import React from 'react'

export default function KeyboardBtn({letter}) {
    const handleClick= ()=>{
        
    }

  return (
    <div>

        <button className='keyboard-btn' onClick={handleClick} type='button'>
            {letter}
        </button>
      
    </div>
  )
}
