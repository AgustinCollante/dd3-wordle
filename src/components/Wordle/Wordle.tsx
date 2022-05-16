import React, { useState, useEffect, useMemo } from "react";
import Row from "../Row/Row";
import RowCurrent from "../Row/RowCurrent";
import RowEmpty from "../Row/RowEmpty";
import Keyboard from "../Keyboard/Keyboard";
import Header from "../Header/Header";
import Helper from "../Helper/Helper";
import Stats from "../Stats/Stats";
import { Modal } from "@mui/material";
import { GameStatus } from "../../util/types";
import useKeyboard from "../../hooks/useKeyboard";
import { letters } from "../../util/functions";
import { randomWord, isValidWord } from "../../util/functions";

const Wordle = () => {
  const [wordToGuess, setwordToGuess] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  const [toggle, setToggle] = useState<boolean>(false);
  const [gamesCounter, setGamesCounter] = useState<number>(1);
  const [helper, setHelper] = useState<boolean>(gamesCounter <= 1 ? true : false);
  const [stats, setStats] = useState<boolean>(false);
  const [gamesWon, setGamesWon] = useState<number>(0);
  const [timeCounter, setTimeCounter] = useState<number>(0)

  useEffect(() => {
    setwordToGuess(randomWord());
  }, []);

  useEffect(() => {
    onEnter();
  }, [currentWord]);

  useMemo(() => {
    timeCounter > 0 && setTimeout(() => setTimeCounter(timeCounter - 1), 1000);
    if(timeCounter <= 0){
      setGameStatus(GameStatus.Playing);
      setTurn(1);
      setCompletedWords([])
      setwordToGuess(randomWord());
      setCurrentWord("");
      setGamesCounter((game) => game + 1 );
    }
  }, [timeCounter]);

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  const handleKeyPressed = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase();
    onKeyPressed(letter);
  };

  const onKeyPressed = (key: string) => {
    if (gameStatus !== GameStatus.Playing) return;

    if (key === "BACKSPACE" && currentWord.length > 0) {
      onDelete();
      return;
    }

    if (letters.includes(key)) {
      onInput(key);
      return;
    }
  };

  const onInput = (letter: string) => {
    const word = currentWord + letter;
    setCurrentWord(word);
  };

  const onDelete = () => {
    let word = currentWord.slice(0, -1);
    setCurrentWord(word);
  };

  const onEnter = () => {
    if (currentWord.length < 5 && turn <= 5) return;
    if(!isValidWord(currentWord)){
      setCurrentWord('');
      return;
    } 
    if (currentWord === wordToGuess) {
      setCompletedWords([...completedWords, wordToGuess]);
      setGameStatus(GameStatus.Won);
      setGamesWon((game) => game + 1 );
      setTimeCounter(10);
      return;
    }
    if (turn === 5) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      setTimeCounter(10);
      return;
    }
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
    return;
  };

  useKeyboard("keydown", handleKeyPressed);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-screen dark:bg-darkBg`}
    >
      <Header
        toggle={toggle}
        setToggle={setToggle}
        helper={helper}
        setHelper={setHelper}
        stats={stats}
        setStats={setStats}
      />
      <div className="flex flex-col justify-center content-center">
        {completedWords.map((e, i) => (
          <Row key={i} word={e} solution={wordToGuess} toggle={toggle} />
        ))}
        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} toggle={toggle} />
        ) : null}
        {Array.from(Array(5 - turn)).map((e, i) => (
          <RowEmpty key={i} toggle={toggle} />
        ))}
      </div>
      <Keyboard onKeyPressed={onKeyPressed} />
      <Modal
        open={helper}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Helper helper={helper} setHelper={setHelper} toggle={toggle} />
      </Modal>
      <Modal
        open={stats}
        onClose={() => setStats(!stats)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stats timeCounter={timeCounter} gamesCounter={gamesCounter} gamesWon={gamesWon} solution={wordToGuess} setStats={setStats}/>
      </Modal>
    </div>
  );
};

export default Wordle;
