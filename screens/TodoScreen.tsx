import { Text, Button, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCounterStore } from 'store/store';

export default function TodoScreen() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const count = useCounterStore((state) => state.count);

  return (
    <LinearGradient
      colors={['#2D2D2D', '#272727', '#212121']}
      locations={[0, 0.3, 1]}
      style={styles.gradient}>
      <Text className="font-inter text-4xl font-bold text-light-main-1">Todo Inter</Text>
      <Text className="font-manrope text-4xl font-bold text-light-main-1">Todo Manrope</Text>
      <View className="flex-row items-center">
        <Button title="-1" onPress={decrement} />
        <Text className="text-light-main-1">{count}</Text>
        <Button title="+1" onPress={increment} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
