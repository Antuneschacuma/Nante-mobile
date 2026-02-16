import IndexNante from '@/components/board/Board';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-purple-50" edges={['top', 'left', 'right']}>
        {/* Tabuleiro */}
        <View className="px-4">
          <  IndexNante/>
        </View>
    </SafeAreaView>
  );
}

export default Index;