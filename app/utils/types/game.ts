import {Question} from '@schemas/questions/questions.schema';

// possible game modes
export type Gamemode = 'three' | 'chain';

// game configuration parameters
export interface GameParameters {
  gameId: string;
  gamemode: Gamemode;
  categories: Number[];
}

// game states in from loby to game start
export type GameState = 'lobby' | 'players' | 'question' | 'answer' | 'end';

// a player joining the game
export interface Player {
  gameId: string;
  picture: string;
  socketId: string;
  username: string;
  isHost: boolean;
}

// context for the players list
export interface GameContext {
  players: Player[];
  isHost: boolean;
  gameState: GameState;
  changeGameState: (gameState: GameState) => void;
  setGameState: (gameState: GameState) => void;
}

// game stored in the server
export interface Game {
  gameId: string;
  gameState: GameState;
  players: Player[];
  config: GameParameters;
  questions: GameQuestion[];
}

// background color of the player profile component
export type PlayerProfileBackground = 'transparent' | 'waiting' | 'red' | 'yellow' | 'green';

// questions once the game starts
export interface GameQuestion {
  question: Question;
  playerAnswers: string[];
}
