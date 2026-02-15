
import { PlayerColor } from "@/config/boardConfig";

export interface Token {
  id: string;              
  color: PlayerColor;
  pathIndex: number;      
  isInBase: boolean;    
  isInFinalCorridor: boolean;
  hasFinished: boolean;    
}


export interface Player {
  id: number;              
  color: PlayerColor;
  tokens: Token[];
  isActive: boolean;  
  hasWon: boolean;       
}

/**
 * Estado do Dado
 */
export interface DiceState {
  value1: number;    
  value2: number;         
  total: number;          
  isRolling: boolean;
  canRollAgain: boolean;  
}

/**
 * Estado do Jogo
 */
export interface GameState {
  players: Player[];
  currentPlayerIndex: number;
  dice: DiceState;
  phase: GamePhase;
  winner: PlayerColor | null;
  moveHistory: MoveRecord[];
}

/**
 * Fases do Jogo
 */
export type GamePhase = 
  | 'waiting'   
  | 'rolling'    
  | 'selecting'   
  | 'moving'      
  | 'resolved'    
  | 'game_over';  


export interface MoveRecord {
  playerId: number;
  tokenId: string;
  fromPosition: number;
  toPosition: number;
  diceRoll: number;
  killedToken?: string; 
  timestamp: number;
}


export type PlayerAction = 
  | { type: 'ROLL_DICE' }
  | { type: 'SELECT_TOKEN'; tokenId: string }
  | { type: 'MOVE_TOKEN'; tokenId: string; steps: number }
  | { type: 'END_TURN' }
  | { type: 'RESET_GAME' };