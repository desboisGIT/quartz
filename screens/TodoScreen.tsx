import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TodoScreen() {
  return (
    <LinearGradient
      colors={['#2D2D2D', '#272727', '#212121']}
      locations={[0, 0.3, 1]}
      style={styles.gradient}>
      <Text className="text-light-main-1 font-inter text-4xl font-bold">Todo Inter</Text>
      <Text className="text-light-main-1 font-manrope text-4xl font-bold">Todo Manrope</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#F5F5F7',
    fontSize: 18,
  },
});
