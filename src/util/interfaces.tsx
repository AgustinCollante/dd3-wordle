import { BoxStatus } from "./types";

export interface BoxProps {
  value: string;
  status: BoxStatus;
  toggle: boolean;
}

export interface RowProps {
  word: string;
  solution: string;
  toggle: boolean;
}

export interface RowCurrentProps {
  word: string;
  toggle: boolean;
}

export interface RowEmptyProps {
  toggle: boolean;
}

export interface KeyboardProps {
  onKeyPressed: (letter: string) => void;
}

export interface HeaderProps {
  toggle: boolean;
  helper:boolean;
  stats:boolean;
  setStats: (stats:boolean) => void;
  setToggle: (toggle: boolean) => void;
  setHelper: (helper: boolean) => void;
}

export interface HelperProps{
  helper:boolean;
  setHelper: (helper: boolean) => void;
  toggle: boolean;
}

export interface StatsProps{
  timeCounter: number;
  gamesCounter: number;
  gamesWon: number;
  solution: string;
  setStats: ((stats:any) => void )
}