import { View } from 'react-native';

export default function CustomSafeArea({ children }: { children: React.ReactNode }) {
  return <View className="absolute left-0 top-[102px] h-full w-full pb-[102px]">{children}</View>;
}
