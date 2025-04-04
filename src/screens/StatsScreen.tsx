import { Text, StyleSheet, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomSafeArea from '@components/utils/CustomSafeArea';
import { useTaskStore } from '@store/store';

export default function StatsScreen() {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.add);
  const linearGradientProps = {
    colors: ['#323232', '#212121'] as [string, string, ...string[]],
    locations: [0.1, 1] as const,
    style: styles.gradient,
  };

  const exempleTask = {};

  return (
    <LinearGradient {...linearGradientProps}>
      <CustomSafeArea>
        <View className="h-full w-full px-[12px] py-[24px]">
          <Text className="text-light-main-1">Your tasks</Text>
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => <Text key={task.uuid}>{task.title}</Text>)
          ) : (
            <Text>No tasks available</Text>
          )}
          <Button
            title="Add"
            onPress={() => addTask({ title: 'hello', discipline: 5.2, consistency: 10 })}
          />
        </View>
      </CustomSafeArea>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

/*
Task exemple:
    title: string;
    discipline: number;
    consistency: number;
    completitions: number;
    isDone: boolean;
*/
