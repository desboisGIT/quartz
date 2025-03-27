import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WorkoutsScreen() {
  return (
    <LinearGradient
      colors={['#2D2D2D', '#272727', '#212121']}
      locations={[0, 0.3, 1]}
      style={styles.gradient}>
      <Text style={styles.text}>Workouts</Text>
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
