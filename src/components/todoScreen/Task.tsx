import { View, Text } from 'react-native';
import { useState } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';

interface taskProps {
  task: {
    title: string;
    discipline: number;
    consistency: number;
    completitions: number;
    isDone: boolean;
    uuid: string;
  };
  onPress: (uuid: string) => void;
  onConfirm: () => void;
  onDelete: (uuid: string) => void;
  onComplete: (uuid: string) => void;
}

export default function Task({ task, onPress, onConfirm, onDelete, onComplete }: taskProps) {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue<number>(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const activeOffsetXDelta = 15;
  const completeTriggered = useSharedValue<boolean>(false);

  // config
  const COMPLETE_THRESHOLD = 100;
  const DELETE_THRESHOLD = -100;
  const COMPLETE_OFFSET = 500;
  const RESTORE_OFFSET = 0;

  const springConfig = {
    damping: 20,
    stiffness: 150,
    overshootClamping: true,
  };

  useAnimatedReaction(
    () => offset.value,
    (value) => {
      runOnJS(setCurrentOffset)(value);
    }
  );

  const pan = Gesture.Pan()
    .activeOffsetX([-activeOffsetXDelta, activeOffsetXDelta])
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
      if (offset.value > COMPLETE_THRESHOLD && !completeTriggered.value) {
        completeTriggered.value = true;
        runOnJS(onConfirm)();
      } else if (offset.value < DELETE_THRESHOLD && !completeTriggered.value) {
        completeTriggered.value = true;
        runOnJS(onConfirm)();
      } else if (offset.value < COMPLETE_THRESHOLD && offset.value > DELETE_THRESHOLD) {
        completeTriggered.value = false;
      }
    })
    .onFinalize(() => {
      if (offset.value < DELETE_THRESHOLD) {
        offset.value = withSpring(DELETE_THRESHOLD, springConfig);
        if (task.uuid) {
          //onDelete(task.uuid);
          runOnJS(onDelete)(task.uuid);
        } else {
          console.error('Task UUID is undefined');
        }
      } else if (offset.value > COMPLETE_THRESHOLD) {
        offset.value = withSpring(COMPLETE_OFFSET, springConfig);
      } else {
        offset.value = withSpring(RESTORE_OFFSET, springConfig);
      }
      pressed.value = false;
      completeTriggered.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[animatedStyles]}
        className="box-border h-[92px] w-full rounded-lg border-[0.5px] border-border-main-1 bg-darker-main-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Text className="text-light-main-1">
          Offset: {currentOffset.toFixed(0)}, uuid: {task.uuid}
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}
