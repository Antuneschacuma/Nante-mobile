export type PlayerColor = 'red' | 'blue' | 'green' | 'yellow';
export type CellType = 'normal' | 'start' | 'final';

export interface PathCell {
  index: number;
  row: number;
  col: number;
  type: CellType;
  owner?: PlayerColor;
}

export const MAIN_PATH: PathCell[] = [

  { index: 1, row: 12, col: 8, type: 'start', owner: 'blue' },
  { index: 2, row: 11, col: 8, type: 'normal' },
  { index: 3, row: 10, col: 8, type: 'normal' },
  { index: 4, row: 9, col: 8, type: 'normal' },
  { index: 5, row: 8, col: 9, type: 'normal' },
  { index: 6, row: 8, col: 10, type: 'normal' },
  { index: 7, row: 8, col: 11, type: 'normal' },
  { index: 8, row: 8, col: 12, type: 'normal' },
  { index: 9, row: 8, col: 13, type: 'normal' },
  { index: 10, row: 8, col: 14, type: 'normal' },
  { index: 11, row: 7, col: 14, type: 'normal' },
  { index: 12, row: 6, col: 14, type: 'normal' },
  { index: 13, row: 6, col: 13, type: 'normal' },


  { index: 14, row: 6, col: 12, type: 'start', owner: 'green' },
  { index: 15, row: 6, col: 11, type: 'normal' },
  { index: 16, row: 6, col: 10, type: 'normal' },
  { index: 17, row: 6, col: 9, type: 'normal' },
  { index: 18, row: 5, col: 8, type: 'normal' },
  { index: 19, row: 4, col: 8, type: 'normal' },
  { index: 20, row: 3, col: 8, type: 'normal' },
  { index: 21, row: 2, col: 8, type: 'normal' },
  { index: 22, row: 1, col: 8, type: 'normal' },
  { index: 23, row: 0, col: 8, type: 'normal' },
  { index: 24, row: 0, col: 7, type: 'normal' },
  { index: 25, row: 0, col: 6, type: 'normal' },
  { index: 26, row: 1, col: 6, type: 'normal' },


  { index: 27, row: 2, col: 6, type: 'start', owner: 'yellow' },
  { index: 28, row: 3, col: 6, type: 'normal' },
  { index: 29, row: 4, col: 6, type: 'normal' },
  { index: 30, row: 5, col: 6, type: 'normal' },
  { index: 31, row: 6, col: 5, type: 'normal' },
  { index: 32, row: 6, col: 4, type: 'normal' },
  { index: 33, row: 6, col: 3, type: 'normal' },
  { index: 34, row: 6, col: 2, type: 'normal' },
  { index: 35, row: 6, col: 1, type: 'normal' },
  { index: 36, row: 6, col: 0, type: 'normal' },
  { index: 37, row: 7, col: 0, type: 'normal' },
  { index: 38, row: 8, col: 0, type: 'normal' },
  { index: 39, row: 8, col: 1, type: 'normal' },


  { index: 40, row: 8, col: 2, type: 'start', owner: 'red' },
  { index: 41, row: 8, col: 3, type: 'normal' },
  { index: 42, row: 8, col: 4, type: 'normal' },
  { index: 43, row: 8, col: 5, type: 'normal' },
  { index: 44, row: 9, col: 6, type: 'normal' },
  { index: 45, row: 10, col: 6, type: 'normal' },
  { index: 46, row: 11, col: 6, type: 'normal' },
  { index: 47, row: 12, col: 6, type: 'normal' },
  { index: 48, row: 13, col: 6, type: 'normal' },
  { index: 49, row: 14, col: 6, type: 'normal' },
  { index: 50, row: 14, col: 7, type: 'normal' },
  { index: 51, row: 14, col: 8, type: 'normal' },
  { index: 52, row: 13, col: 8, type: 'normal' },
];

export const SAFE_POSITIONS = [6, 20, 34, 48];

export const getCellAtPosition = (row: number, col: number) => 
  MAIN_PATH.find(c => c.row === row && c.col === col) || null;