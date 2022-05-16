import { BoxStatus } from "./types";
import { words } from "./wordsList.js";


export const colorsByStatus = (status: BoxStatus) => {
  if (status === "absent") return "bg-mediumGrey text-white";
  if (status === "correct") return "bg-green text-white";
  if (status === "present") return "bg-yellow text-white";
  if (status === "empty") return "bg-[#DADDDE]";
  if (status === "edit") return "bg-[#DADDDE]";
};

export const darkColorsByStatus = (status: BoxStatus) => {
  if (status === "absent") return "mediumGrey text-white";
  if (status === "correct") return "green text-white";
  if (status === "present") return "yellow text-white";
  if (status === "empty") return "darkEmptyLetter";
  if (status === "edit") return "darkEmptyLetter";
};

export const checkLetter = (letter: string, pos: number, solution: string) => {
  if (!solution.includes(letter)) return "absent";
  if (solution[pos] === letter) return "correct";
  return "present";
};

export const letters: string[] = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ñ",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export const randomWord = () => {
    let wordRandom:string = '';
    let wordsFiltered = words.filter((e:string) => e.length === 5)
    let numberOfWords = wordsFiltered.length;
    while(wordRandom.length<5){
      let randomNumber = Math.floor(Math.random() * numberOfWords);  
      wordRandom = wordsFiltered[randomNumber];
    }
    wordRandom = normalizeWord(wordRandom);
    console.log("random", wordRandom)
    return wordRandom;
}

export const normalizeWord = (word: string) => {
    return word
    .normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
    .normalize().toUpperCase();
}

export const isValidWord = (word: string) => {
    let wordsFiltered = words.filter((e:string) => e.length === 5);
    return wordsFiltered.includes(word.toLowerCase());
}

export const secondsToTime = (e:number) => {
  let m = Math.floor(e % 3600 / 60).toString().padStart(2,'0');
  let s = Math.floor(e % 60).toString().padStart(2,'0');

return m + ':' + s;
};