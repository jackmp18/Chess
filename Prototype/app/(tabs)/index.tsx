import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Board, { PieceType } from '@/components/Board';

const initialBoard: (PieceType | null)[][] = [
  // row 0 (top) — black back‐rank
  ['bR','bN','bB','bQ','bK','bB','bN','bR'],
  // row 1 — black pawns
  Array(8).fill('bP'),
  // rows 2–5 empty
  ...Array(4).fill(Array(8).fill(null)),
  // row 6 — white pawns
  Array(8).fill('wP'),
  // row 7 (bottom) — white back‐rank
  ['wR','wN','wB','wQ','wK','wB','wN','wR'],
];

export default function HomeScreen() {
  const [boardState, setBoardState] = useState(initialBoard);
  
  return (
    <View style={styles.container}>
      <Board
        size={320}
        boardState={boardState}
        onSqquarePress={
          (r, c) => console.log('tapped square', r, c)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
