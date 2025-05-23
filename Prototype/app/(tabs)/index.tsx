import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Board from '@/components/Board';
import Piece, { PieceType } from '@/components/Pieces';

type Coord = { row: number; col: number };
type BoardMatrix = (PieceType | null)[][];

// initial chess setup
const initialBoard: BoardMatrix = [
  ['bR','bN','bB','bQ','bK','bB','bN','bR'],
  Array(8).fill('bP'),
  ...Array(4).fill(Array(8).fill(null)),
  Array(8).fill('wP'),
  ['wR','wN','wB','wQ','wK','wB','wN','wR'],
];

export default function HomeScreen() {
  const [boardState, setBoardState] = useState(initialBoard);
  const [currentTurn, setCurrentTurn] = useState<'w' | 'b'>('w');
  const [selected, setSelected] = useState<Coord | null>(null);

  const onSquarePress = (row: number, col: number) => {
    //If nothing selected, pick up your own piece
    if (!selected) {
      const piece = boardState[row][col];
      if (piece && piece[0] === currentTurn) {
        setSelected({ row, col });
      }
      return;
    }

    //If a piece was selected, drop it here (even if occupied!)
    const newBoard = boardState.map(r => r.slice()) as BoardMatrix;
    newBoard[row][col] = newBoard[selected.row][selected.col];
    newBoard[selected.row][selected.col] = null;
    setBoardState(newBoard);

    //Flip turn & reset selection
    setCurrentTurn(currentTurn === 'w' ? 'b' : 'w');
    setSelected(null);
  };

  return (
    <View style={styles.container}>
      {/* ─── Turn Indicator ─── */}
      <View style={styles.turnRow}>
        <Piece
          type={currentTurn === 'w' ? 'wK' : 'bK'}
          size={40}
        />
        <Text style={styles.turnText}>
          {currentTurn === 'w' ? "White's turn" : "Black's turn"}
        </Text>
      </View>

      {/* ─── The Board ─── */}
      <Board
        size={320}
        boardState={boardState}
        onSquarePress={onSquarePress}
      />

      {/* ─── Optional: show which square is selected ─── */}
      {selected && (
        <Text style={styles.selText}>
          Selected: {selected.row},{selected.col}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  turnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  turnText: {
    fontSize: 18,
    marginLeft: 8,
  },
  selText: {
    marginTop: 12,
    color: '#666',
  },
});
