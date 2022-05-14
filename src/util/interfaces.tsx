import { BoxStatus } from "./types";

export interface BoxProps {
    value: string,
    status: BoxStatus
}

export interface RowProps{
    word: string,
    solution: string
}

export interface RowCurrentProps{
    word: string
}

export interface KeyboardProps{
    onKeyPressed: (letter:string) => void;
}