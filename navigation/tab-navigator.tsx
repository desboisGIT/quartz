import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '.';
import { HeaderButton } from '../components/HeaderButton';

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

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="todo"
        component={TodoScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ size, focused, color }) => {
            return <TodoIcon width={'100%'} height={'100%'} color={color} />;
          },
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
      <Tab.Screen
        name="notes"
        component={NotesScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ size, focused, color }) => {
            return <NotesIcon width={'100%'} height={'100%'} color={color} />;
          },
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
      <Tab.Screen
        name="workouts"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ size, focused, color }) => {
            return <WorkoutIcon width={'100%'} height={'100%'} color={color} />;
          },
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
      <Tab.Screen
        name="stats"
        component={StatsScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ size, focused, color }) => {
            return <StatsIcon width={'100%'} height={'100%'} color={color} />;
          },
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
    </Tab.Navigator>
  );
}
