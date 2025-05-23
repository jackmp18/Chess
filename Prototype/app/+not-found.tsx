import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-reanimated/lib/typescript/Animated';

export default function NotFoundScreen() {
  return (
    <View>
      <Text>
        Page Not Found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
