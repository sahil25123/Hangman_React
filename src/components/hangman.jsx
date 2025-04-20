import React, { use, useState } from 'react'
import randomWord from '../words'
import Header from './Header';
import Man from './MAn';
import DisplayBoard from './DisplayBoard';
import Input from "./Input";


    export default function Hangman() {
        const [currentWord, setCurrentWord] = useState("");
        const [hint, setHint] = useState("");
        const [attemps , setAttemps] = useState(6);
        const [guessedLetter, setGuessedLetter]= useState([]);
        const [worngGuess , setWrongGuess] = useState(0);
        const [isGameOver, setIsGameOver] = useState(false);
        const [ isWinner , setIsWinner] = useState(false);


        // const handleRandmonWord = ()=>{
        //     const selected = randomWord();
        //     setCurrentWord(selected.word);
        //     setHint(selected.hint);
        //     console.log(hint);

        // }


         const getGuessedWord=()=>{
            const  selected= randomWord();
            const wordLetters = selected.word.split(""); // Split the actual word string
             return wordLetters;

        }
    return (
        <div>
            <div>
                <Header/>
                <Man/>
                <DisplayBoard word={getGuessedWord()}/>
                <Input/>
               
            </div>
        
        </div>
    )
    }
