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
