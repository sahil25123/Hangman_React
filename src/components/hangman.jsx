    import React, { use, useState } from 'react'
    import randomWord from '../words'
    import Header from './Header';
    import Man from './MAn';


    export default function Hangman() {
        const [currentWord, setCurrentWord] = useState("");
        const [hint, setHint] = useState("");
        const [attemps , setAttemps] = useState(6);

        const [worngGuess , setWrongGuess] = useState(0);
        const [isGameOver, setIsGameOver] = useState(false);
        const [ isWinner , setIsWinner] = useState(false);


        // const handleRandmonWord = ()=>{
        //     const selected = randomWord();
        //     setCurrentWord(selected.word);
        //     setHint(selected.hint);
        //     console.log(hint);

        // }
    return (
        <div>
            <div>
                <Header/>
                <Man/>
               
            </div>
        
        </div>
    )
    }
