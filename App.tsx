import './global.css';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RootStack from './src/navigation';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope: require('./src/assets/fonts/Manrope/Manrope-VariableFont_wght.ttf'),
    Inter: require('./src/assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf'),
  });

  return <RootStack />;
}
