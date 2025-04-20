import React from 'react'

export default function DisplayBoard({word}) {
  return (
    <div>
        <div className='display-board-container'>
        {word.map((letter, index) => (
                <h2 key={`${letter}-${index}`} className="display-board-letter">
                    {letter}
                </h2>
            ))}
        </div>
      
    </div>
  )
}
