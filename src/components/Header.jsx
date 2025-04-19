import React from 'react';

export default function Header({ attempts }) {
  return (
    <div className="header-container">
      <div className='header'>
        <h2>Hangman Game</h2> 
        <h3>Enter a letter one by one to guess the correct word</h3>
        {attempts !== undefined && (
          <h3>
            You have {" "}
            <span className='live-span'>{attempts}</span> 
            {" "}lives left
          </h3>
        )}
      </div>
    </div>
  );
}

