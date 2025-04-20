import React, { useEffect, useState } from 'react'
import randomWord from '../words'
import Header from './Header';
import Man from './Man';
import DisplayBoard from './DisplayBoard';
import Input from "./Input";
import './Hangman.css';

export default function Hangman() {
    const [currentWord, setCurrentWord] = useState("");
    const [hint, setHint] = useState("");
    const [attempts, setAttempts] = useState(6);
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWinner, setIsWinner] = useState(false);
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [gamesWon, setGamesWon] = useState(0);

    const startNewGame = () => {
        const selected = randomWord();
        setCurrentWord(selected.word);
        setHint(selected.hint);
        setAttempts(6);
        setGuessedLetter([]);
        setWrongGuess(0);
        setIsGameOver(false);
        setIsWinner(false);
    };

    useEffect(() => {
        startNewGame();
    }, []);

    useEffect(() => {
        if (currentWord && currentWord.split('').every(letter => 
            guessedLetter.includes(letter) || !/[A-Z]/.test(letter))) {
            setIsWinner(true);
            setIsGameOver(true);
            setGamesWon(prev => prev + 1);
            setGamesPlayed(prev => prev + 1);
        }
    }, [guessedLetter, currentWord]);

    useEffect(() => {
        if (wrongGuess >= attempts) {
            setIsGameOver(true);
            setGamesPlayed(prev => prev + 1);
        }
    }, [wrongGuess, attempts]);

    const getGuessedWord = () => {
        if (!currentWord) return [];
        return currentWord.split("").map(letter => 
            guessedLetter.includes(letter) || !/[A-Z]/.test(letter) ? letter : '_'
        );
    }

    const getInput = ({ letter }) => {
        if (isGameOver || guessedLetter.includes(letter)) return;
        
        setGuessedLetter([...guessedLetter, letter]);
        
        if (!currentWord.includes(letter)) {
            setWrongGuess(prev => prev + 1);
        }
    }

    return (
        <div className="game-container">
            <h1 className="game-title">Hangman Game</h1>
            
            <div className="stats">
                <div className="stat-item">
                    Games Played: {gamesPlayed}
                </div>
                <div className="stat-item">
                    Games Won: {gamesWon}
                </div>
                <div className="stat-item">
                    Win Rate: {gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0}%
                </div>
            </div>

            <Man wrongGuesses={wrongGuess} />
            
            <div className="word-display">
                {getGuessedWord().join(" ")}
            </div>
            
            {hint && <p className="hint-text">Hint: {hint}</p>}
            
            <div className="attempts-left">
                Attempts Left: {attempts - wrongGuess}
            </div>

            <Input getInput={getInput} disabled={isGameOver} />
            
            {isGameOver && (
                <div className={`game-over ${isWinner ? 'winner' : 'loser'}`}>
                    <h2 className="game-result">
                        {isWinner ? "Congratulations! You won!" : "Game Over!"}
                    </h2>
                    <p className="final-word">The word was: {currentWord}</p>
                    <button 
                        className="new-game-btn"
                        onClick={startNewGame}
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    )
}
