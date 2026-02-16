import React from 'react';
import { Text, View } from 'react-native';
import { GRID_SIZE } from '@/game/constants';
import { MAIN_PATH } from '@/game/board';
import Cell from './Cell';

const IndexNante = () => {

  return (
    <View className='items-center py-5'>
      {/* Header */}
      <View className='items-center mb-4'>
        <Text className='text-2xl text-indigo-900 font-bold'>🎲 Nante</Text>
        <Text className='text-xs text-gray-700 mt-1'>
          Tabuleiro 15×15 • {MAIN_PATH.length} casas
        </Text>
      </View>

      {/* Tabuleiro */}
      <View className="p-2 bg-white rounded-2xl shadow-lg border border-gray-300">
        <View className='border-2 border-gray-500 rounded-lg overflow-hidden bg-gray-100'>
          {Array.from({ length: GRID_SIZE }).map((_, r) => (
            <View key={r} className='flex flex-row'>
              {Array.from({ length: GRID_SIZE }).map((_, c) => Cell({ row: r, col: c }))}
            </View>
          ))}
        </View>
      </View>

      {/* Info adicional */}
      <View className='mt-[15px] bg-orange-50 px-4 py-2.5 rounded-xl border border-orange-300'>
        <Text className='text-sm text-orange-800 font-medium'>
          ⭐ Casas seguras: 6, 20, 34, 48
        </Text>
      </View>
    </View>
  );
};

export default IndexNante;
