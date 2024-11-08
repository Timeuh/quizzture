// possible game modes
export type Gamemode = 'three' | 'chain';

// game configuration parameters
export interface GameParameters {
  gameId: string;
  gamemode: Gamemode;
  sport: boolean;
  geography: boolean;
  history: boolean;
  french: boolean;
  physics: boolean;
  animals: boolean;
  anime: boolean;
  manga: boolean;
  celebrities: boolean;
  english: boolean;
  music: boolean;
  cinema: boolean;
  series: boolean;
  litteracy: boolean;
}

// keys of the game parameters
export type GameParametersKey = keyof GameParameters;

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
}
