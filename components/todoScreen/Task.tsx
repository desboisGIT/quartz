import { View, Text } from 'react-native';

interface taskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

export default function Task({ task, onPress, onLongPress, onDelete }: taskProps) {
  return (
    <View
      className="box-border h-[92px] w-full rounded-lg border-[0.5px] border-border-main-1 bg-darker-main-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)]
    "></View>
  );
}
