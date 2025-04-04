import { Text, Button, View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCounterStore } from '~/store/store';
import Task from '~/components/todoScreen/Task';
import CustomSafeArea from '~/components/utils/CustomSafeArea';
import * as Haptics from 'expo-haptics';

export default function TodoScreen() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const count = useCounterStore((state) => state.count);
  const linearGradientProps = {
    colors: ['#323232', '#212121'] as [string, string, ...string[]],
    locations: [0.1, 1] as const,
    style: styles.gradient,
  };

  const TaskExemple = () => (
    <Task
      task={{ id: 1, title: 'Task 1', completed: false }}
      onPress={() => {}}
      onConfirm={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      onDelete={() => {}}
      onComplete={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
    />
  );

  return (
    <LinearGradient {...linearGradientProps}>
      <CustomSafeArea>
        <ScrollView className="h-full w-full px-[12px] py-[24px]">
          <View className="h-fit w-fit flex-col gap-y-[12px] pb-[100px]">
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
            <TaskExemple />
          </View>
        </ScrollView>
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
<Text className="font-inter text-4xl font-bold text-light-main-1">Todo Inter</Text>
<Text className="font-manrope text-4xl font-bold text-light-main-1">Todo Manrope</Text>
<View className="flex-row items-center">
  <Button title="-1" onPress={decrement} />
  <Text className="text-light-main-1">{count}</Text>
  <Button title="+1" onPress={increment} />
</View>
*/
