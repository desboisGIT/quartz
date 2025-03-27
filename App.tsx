import './global.css';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import RootStack from './navigation';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope: require('./assets/fonts/Manrope/Manrope-VariableFont_wght.ttf'),
    Inter: require('./assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf'),
  });

  return <RootStack />;
}
