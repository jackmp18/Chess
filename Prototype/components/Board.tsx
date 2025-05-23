import React from 'react';
import {
    View,
    Pressable,
    StyleSheet,
    Dimensions,
    GestureResponderEvent,
} from 'react-native';
import { Pieces, PieceType } from '@/components/Pieces';

type BoardProps = {
    size?: number;
    boardState: (PieceType | null)[][];
    onSqquarePress?: (row: number, col: number, e: GestureResponderEvent) => void;
    lightColor?: string;
    darkColor?: string;
};

const { width: screenW, height: screenH } = Dimensions.get('window'); 
const DEFAULT_BOARD_SIZE = Math.min(screenW, screenH) - 32; //defualt board size is 32x332 like chess

const Board: React.FC<BoardProps> = ({
    size = DEFAULT_BOARD_SIZE,
    boardState,
    onSqquarePress,
    lightColor = '#eeeed2',
    darkColor = '#769656'
}) => {
    const squareSize = size / 8;
    return (
        <View style={[styles.board, { width: size, height: size }]}>
            {Array.from({ length: 8 }, (_, row) => (
                <View key={row} style={styles.row}>
                    {Array.from({ length: 8 }, (_, col) => {
                        const isLight = (row + col) % 2 === 0;
                            return (
                                <Pressable
                                    key={col}
                                    onPress={e => onSqquarePress?.(row, col, e)}
                                    style={{
                                    width: squareSize,
                                    height: squareSize,
                                    backgroundColor: isLight ? lightColor : darkColor,
                                    flexShrink: 0,
                                }}
                            >
                                {boardState[row][col] && (
                                    <Pieces type={boardState[row][col]!} size={squareSize} />
                                )}
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
    }
});

export default Board;