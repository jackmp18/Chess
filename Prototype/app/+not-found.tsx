import { View, Text, StyleSheet } from 'react-native';

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
