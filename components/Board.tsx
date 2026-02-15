import React from 'react';
import { View, Text, Dimensions} from 'react-native';
import { getCellAtPosition, MAIN_PATH, PlayerColor } from '../config/boardConfig';
import { styles } from '../styles/index-nante-style';

const GRID_SIZE = 15;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CELL_SIZE = Math.floor((SCREEN_WIDTH - 40) / GRID_SIZE);

const IndexNante = () => {
  
  
  const renderCell = (row: number, col: number) => {
    const cell = getCellAtPosition(row, col);
    
    // Identificar áreas de base
    const isRedBase = row > 8 && col < 6;
    const isBlueBase = row > 8 && col > 8;
    const isGreenBase = row < 6 && col > 8;
    const isYellowBase = row < 6 && col < 6;
    const isCenter = row === 7 && col === 7;

    // Definir cores
    let backgroundColor = '#FAFAFA';
    let borderColor = '#E0E0E0';
    let textColor = '#999';

    if (cell) {
      // Célula do percurso
      backgroundColor = '#FFFFFF';
      borderColor = '#BDBDBD';
      textColor = '#424242';

      // Pontos de partida (START)
      if (cell.type === 'start') {
        const startColors: Record<PlayerColor, string> = {
          red: '#EF5350',
          blue: '#42A5F5',
          green: '#66BB6A',
          yellow: '#FFEE58'
        };
        backgroundColor = startColors[cell.owner!];
        borderColor = '#424242';
        textColor = '#FFFFFF';
      }
    } else if (isCenter) {
      // Centro do tabuleiro
      backgroundColor = '#FFD54F';
      borderColor = '#FFA726';
    } else {
      // Áreas de base (zonas de espera)
      if (isRedBase) {
        backgroundColor = '#FFCDD2';
        borderColor = '#E57373';
      } else if (isBlueBase) {
        backgroundColor = '#BBDEFB';
        borderColor = '#64B5F6';
      } else if (isGreenBase) {
        backgroundColor = '#C8E6C9';
        borderColor = '#81C784';
      } else if (isYellowBase) {
        backgroundColor = '#FFF9C4';
        borderColor = '#FFF176';
      }
    }

    return (
      <View
        key={`${row}-${col}`}
        style={[
          styles.cell,
          {
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor,
            borderColor,
            borderWidth: cell ? 1 : 0.5,
          }
        ]}
      >
        {/* Número do índice */}
        {cell && (
          <Text
            style={[
              styles.cellText,
              {
                color: textColor,
                fontSize: CELL_SIZE * 0.32,
                fontWeight: cell.type === 'start' ? '900' : '700'
              }
            ]}
          >
            {cell.index}
          </Text>
        )}

        {/* Ícone de estrela para casa segura */}
        {cell && [6, 20, 34, 48].includes(cell.index) && (
          <Text style={{ position: 'absolute', top: 1, fontSize: CELL_SIZE * 0.25 }}>
            ⭐
          </Text>
        )}

        {/* Ícone do centro */}
        {isCenter && (
          <Text style={{ fontSize: CELL_SIZE * 0.5 }}>🎯</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎲 Nante</Text>
        <Text style={styles.headerSubtitle}>
          Tabuleiro 15×15 • {MAIN_PATH.length} casas
        </Text>
      </View>

      {/* Tabuleiro */}
      <View style={styles.boardWrapper}>
        <View style={styles.boardContainer}>
          {Array.from({ length: GRID_SIZE }).map((_, r) => (
            <View key={r} style={styles.row}>
              {Array.from({ length: GRID_SIZE }).map((_, c) => renderCell(r, c))}
            </View>
          ))}
        </View>
      </View>

      {/* Legenda dos jogadores */}
      <View style={styles.playersLegend}>
        <View style={styles.playerBadge}>
          <View style={[styles.colorDot, { backgroundColor: '#42A5F5' }]} />
          <Text style={styles.playerText}>Azul (1)</Text>
        </View>

        <View style={styles.playerBadge}>
          <View style={[styles.colorDot, { backgroundColor: '#66BB6A' }]} />
          <Text style={styles.playerText}>Verde (14)</Text>
        </View>

        <View style={styles.playerBadge}>
          <View style={[styles.colorDot, { backgroundColor: '#FFEE58' }]} />
          <Text style={styles.playerText}>Amarelo (27)</Text>
        </View>

        <View style={styles.playerBadge}>
          <View style={[styles.colorDot, { backgroundColor: '#EF5350' }]} />
          <Text style={styles.playerText}>Vermelho (40)</Text>
        </View>
      </View>

      {/* Info adicional */}
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          ⭐ Casas seguras: 6, 20, 34, 48
        </Text>
      </View>
    </View>
  );
};

export default IndexNante;
