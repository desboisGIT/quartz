import { Text, View } from 'react-native';
import { EditScreenInfo } from './EditScreenInfo';
import { NotesIcon, StatsIcon, TodoIcon, WorkoutIcon } from '~/components/ui/Icon';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      {/*<SvgComponent />*/}
      <TodoIcon width={'50%'} height={'50%'} color="#ffffff" />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
