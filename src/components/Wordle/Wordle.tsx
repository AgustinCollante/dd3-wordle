import React, {useState, useEffect} from "react";
import Row from "../Row/Row";
import RowCurrent from "../Row/RowCurrent";
import RowEmpty from "../Row/RowEmpty";
import Keyboard from "../Keyboard/Keyboard";
import { GameStatus } from "../../util/types";
import useKeyboard from "../../hooks/useKeyboard";
import { letters } from "../../util/functions";
import { randomWord, normalizeWord } from "../../util/functions";

const Wordle = () => {
    const [wordToGuess, setwordToGuess] = useState<string>("SABIO");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

    useEffect(() => {
        setwordToGuess(randomWord()); 

    }, [])

    useEffect(() => {
        onEnter();
    }, [currentWord])


    const handleKeyPressed = (event: KeyboardEvent) => {
        const letter = event.key.toUpperCase();
        onKeyPressed(letter);
  
    }

    const onKeyPressed = (key:string) => {
        if(gameStatus !== GameStatus.Playing) return;
    
        if(key === "BACKSPACE" && currentWord.length > 0){
            onDelete();
            return;
        } 
       
        if(letters.includes(key)){
            onInput(key);
            return;
        }
    }

    const onInput = (letter: string) => {
        const word = currentWord + letter;
        setCurrentWord(word);
    }

    const onDelete = () => {
        let word = currentWord.slice(0,-1);
        setCurrentWord(word);
    }

    const onEnter = () => {
        if(currentWord.length < 5 && turn <= 5) return;
        if(currentWord === wordToGuess){
            setCompletedWords([...completedWords, wordToGuess]);
            setGameStatus(GameStatus.Won)
            return;
        }
        if(turn === 5){
            setCompletedWords([...completedWords, currentWord]);
            setGameStatus(GameStatus.Lost);
            return;
        }
        setCompletedWords([...completedWords, currentWord])
        setTurn( turn + 1 );
        setCurrentWord("");
        return;
    }

    useKeyboard('keydown', handleKeyPressed)

    return(
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="h-24 w-1/2 bg-grey mb-16">
                Header!
            </div>
       
        <div className="flex flex-col justify-center content-center">
            {
                completedWords.map((e,i) => (
                    <Row key={i} word={e} solution={wordToGuess} />
                ))
            }
            { gameStatus === GameStatus.Playing ? <RowCurrent word={currentWord}/> : null}
            {
                Array.from(Array(5 - turn)).map((e,i) => (
                    <RowEmpty key={i} />
                ))
            }
            
        </div>
        <Keyboard  onKeyPressed={onKeyPressed}/>
        </div>
    )
}

export default Wordle;