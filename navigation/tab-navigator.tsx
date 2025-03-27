import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';
import { View } from 'react-native';

/* ################# ICONS ################# */
import WorkoutIcon from '@icons/WorkoutIcon';
import TodoIcon from '@icons/TodoIcon';
import NotesIcon from '@icons/NoteIcon';
import StatsIcon from '@icons/StatsIcon';

/* ################# SCREENS ################# */
import TodoScreen from '@screens/TodoScreen';
import NotesScreen from '@screens/NotesScreen';
import WorkoutsScreen from '@screens/WorkoutsScreen';
import StatsScreen from '@screens/StatsScreen';
import Header from '@components/Header';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F5F5F7', //light-main-1
        tabBarInactiveTintColor: '#A4A4A4', //gray-main-1
        tabBarBackground: () => <View className="bg-dark-main-3 flex-1" />,
        tabBarStyle: {
          backgroundColor: '#1C1C1C', // dark-main-3
          height: 91,
          paddingTop: 13,
          paddingHorizontal: 15,
          borderTopWidth: 0.5,
          borderTopColor: '#3A3A3A',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="todo"
        component={TodoScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused, color }) => (
            <TodoIcon width={'110%'} height={'110%'} color={color} />
          ),
          header: () => (
            <Header pageTitle="Todo" onInfoPress={() => navigation.navigate('Modal')} />
          ),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="notes"
        component={NotesScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused, color }) => (
            <NotesIcon width={'110%'} height={'110%'} color={color} />
          ),
          header: () => (
            <Header pageTitle="Notes" onInfoPress={() => navigation.navigate('Modal')} />
          ),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="workouts"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused, color }) => (
            <WorkoutIcon width={'110%'} height={'110%'} color={color} />
          ),
          header: () => (
            <Header pageTitle="Workouts" onInfoPress={() => navigation.navigate('Modal')} />
          ),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="stats"
        component={StatsScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size, focused, color }) => (
            <StatsIcon width={'110%'} height={'110%'} color={color} />
          ),
          header: () => (
            <Header pageTitle="Stats" onInfoPress={() => navigation.navigate('Modal')} />
          ),
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
}
