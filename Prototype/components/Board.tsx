// components/Board.tsx
import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Piece, { PieceType } from './Pieces';

export type BoardProps = {
  size?: number;
  boardState: (PieceType | null)[][];
  onSquarePress?: (row: number, col: number) => void;
  lightColor?: string;
  darkColor?: string;
};

const { width: W, height: H } = Dimensions.get('window');
const DEFAULT_SIZE = Math.min(W, H) - 32;

const Board: React.FC<BoardProps> = ({
  size = DEFAULT_SIZE,
  boardState, //used to track pieces
  onSquarePress,
  lightColor = '#eeeed2',
  darkColor = '#769656',
}) => {
  const squareSize = size / 8;

  return (
    <View style={[styles.board, { width: size, height: size }]}>      
      {boardState.map((rowArr, row) => (
        <View key={row} style={styles.row}>
          {rowArr.map((piece, col) => {
            const isLight = (row + col) % 2 === 0;
            return (
              <Pressable
                key={col}
                onPress={() => onSquarePress?.(row, col)}
                style={{
                  width: squareSize,
                  height: squareSize,
                  backgroundColor: isLight ? lightColor : darkColor,
                  flexShrink: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {piece && <Piece type={piece} size={squareSize * 0.8} />}
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    borderWidth: 2,
    borderColor: '#333',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
