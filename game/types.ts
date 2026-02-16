export type PlayerColor = 'red' | 'blue' | 'green' | 'yellow';

export type CellType = 'normal' | 'start' | 'safe' | 'final';

export interface PathCell {
  index: number;
  row: number;
  col: number;
  type: CellType;
  owner?: PlayerColor;
}

export interface TokenState {
  id: string;
  player: PlayerColor;
  position: number;
  finished: boolean;
}

export interface PlayerState {
  color: PlayerColor;
  tokens: TokenState[];
}
