import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import TabNavigator from './tab-navigator';
import Modal from '../screens/modal';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator">
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{ presentation: 'modal', headerLeft: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#F5F5F7',
    fontSize: 18,
  },
});
