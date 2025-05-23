import React from 'react';
import { Image, StyleSheet, ImageResizeMode } from 'react-native';

export type PieceType = 
  | 'wK' | 'wQ' | 'wR' | 'wB' | 'wN' | 'wP'
  | 'bK' | 'bQ' | 'bR' | 'bB' | 'bN' | 'bP';

//using chess.com Neo 300px Pieces 
//would be bbetter to use assets that I added but this is easier
const pieceUris: Record<PieceType,string> = {
  wK: 'https://www.chess.com/chess-themes/pieces/neo/300/wk.png',
  wQ: 'https://www.chess.com/chess-themes/pieces/neo/300/wq.png',
  wR: 'https://www.chess.com/chess-themes/pieces/neo/300/wr.png',
  wB: 'https://www.chess.com/chess-themes/pieces/neo/300/wb.png',
  wN: 'https://www.chess.com/chess-themes/pieces/neo/300/wn.png',
  wP: 'https://www.chess.com/chess-themes/pieces/neo/300/wp.png',
  bK: 'https://www.chess.com/chess-themes/pieces/neo/300/bk.png',
  bQ: 'https://www.chess.com/chess-themes/pieces/neo/300/bq.png',
  bR: 'https://www.chess.com/chess-themes/pieces/neo/300/br.png',
  bB: 'https://www.chess.com/chess-themes/pieces/neo/300/bb.png',
  bN: 'https://www.chess.com/chess-themes/pieces/neo/300/bn.png',
  bP: 'https://www.chess.com/chess-themes/pieces/neo/300/bp.png',
};

interface PieceProps {
  type: PieceType;
  size: number;
}

export const Pieces: React.FC<PieceProps> = ({ type, size }) => (
  <Image
    source={{ uri: pieceUris[type] }}
    style={[styles.img, { width: size, height: size }]}
    resizeMode={'contain' as ImageResizeMode}
  />
);

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Pieces;