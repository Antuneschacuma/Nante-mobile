import { getCellAtPosition } from '@/game/board';
import { Dimensions, View, Text } from 'react-native';
import { GRID_SIZE } from '@/game/constants';
import { PlayerColor } from '@/game/types';
import clsx from 'clsx';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CELL_SIZE = Math.floor((SCREEN_WIDTH - 40) / GRID_SIZE);

export default function Cell({ row, col }: { row: number; col: number }) {
  const cell = getCellAtPosition(row, col);

  const isRedBase   = row > 8 && col < 6;
  const isBlueBase  = row > 8 && col > 8;
  const isGreenBase = row < 6 && col > 8;
  const isYellowBase = row < 6 && col < 6;
  const isCenter    = row === 7 && col === 7;


  const baseBg      = 'bg-gray-50';          
  const baseBorder  = 'border-gray-200';     
  const pathBg      = 'bg-white';          
  const pathBorder  = 'border-gray-400';   
  const textMuted   = 'text-gray-500'; 


  const playerColors: Record<PlayerColor, { bg: string; border: string; text: string }> = {
    red: {
      bg: 'bg-red-300',         
      border: 'border-gray-800',
      text: 'text-white',
    },
    blue: {
      bg: 'bg-blue-300',        
      border: 'border-gray-800',
      text: 'text-white',
    },
    green: {
      bg: 'bg-green-300',       
      border: 'border-gray-800',
      text: 'text-white',
    },
    yellow: {
      bg: 'bg-yellow-300',      
      border: 'border-gray-800',
      text: 'text-black',     
    },
  };

  // Centro
  const centerBg     = 'bg-yellow-400'; 
  const centerBorder = 'border-yellow-500'; 

  // Bases (zonas de espera)
  const baseColors = {
    red:   { bg: 'bg-red-100',   border: 'border-red-300' },
    blue:  { bg: 'bg-blue-100',  border: 'border-blue-300' },  
    green: { bg: 'bg-green-100', border: 'border-green-300' }, 
    yellow:{ bg: 'bg-yellow-100',border: 'border-yellow-300' },
  };

  // Decidir estilo final
  let bgClass    = baseBg;
  let borderClass = baseBorder;
  let borderWidth = 'border-[0.5px]';
  let textClass  = textMuted;
  let textWeight = 'font-bold';
  let starSize   = CELL_SIZE * 0.25;

  if (cell) {
    bgClass    = pathBg;
    borderClass = pathBorder;
    borderWidth = 'border';
    textClass  = 'text-gray-800';
    textWeight = cell.type === 'start' ? 'font-black' : 'font-bold';

    if (cell.type === 'start' && cell.owner) {
      const colors = playerColors[cell.owner];
      bgClass    = colors.bg;
      borderClass = colors.border;
      textClass  = colors.text;
    }
  } else if (isCenter) {
    bgClass    = centerBg;
    borderClass = centerBorder;
    borderWidth = 'border';
  } else {
    // Bases
    if (isRedBase)   { bgClass = baseColors.red.bg;    borderClass = baseColors.red.border;    }
    if (isBlueBase)  { bgClass = baseColors.blue.bg;   borderClass = baseColors.blue.border;   }
    if (isGreenBase) { bgClass = baseColors.green.bg;  borderClass = baseColors.green.border;  }
    if (isYellowBase){ bgClass = baseColors.yellow.bg; borderClass = baseColors.yellow.border; }
  }

  return (
    <View
      key={`${row}-${col}`}
      className={clsx(
        'items-center justify-center',
        bgClass,
        borderClass,
        borderWidth,
      )}
      style={{ width: CELL_SIZE, height: CELL_SIZE }}
    >
      {/* Número do índice */}
      {cell && (
        <Text
          className={clsx(
            'font-bold', // base
            textClass,
            textWeight === 'font-black' && 'font-black',
          )}
          style={{ fontSize: CELL_SIZE * 0.32 }}
        >
          {cell.index}
        </Text>
      )}

      {/* Estrela casa segura */}
      {cell && [6, 20, 34, 48].includes(cell.index) && (
        <Text
          className="absolute top-0.5"
          style={{ fontSize: starSize }}
        >
          ⭐
        </Text>
      )}

      {/* Centro */}
      {isCenter && (
        <Text style={{ fontSize: CELL_SIZE * 0.5 }}>🎯</Text>
      )}
    </View>
  );
}