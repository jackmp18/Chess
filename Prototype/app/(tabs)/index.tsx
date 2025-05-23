import { View, Text, StyleSheet } from 'react-native';
import Board from '@/components/Board';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Board
        size={320}
        onSqquarePress={(r, c) => console.log('tapped square', r, c)}
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
