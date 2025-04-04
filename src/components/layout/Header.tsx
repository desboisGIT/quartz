import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButton } from '~/components/navigation/HeaderButton';

type HeaderProps = {
  pageTitle: string;
  onInfoPress: () => void;
};

export default function Header({ pageTitle, onInfoPress }: HeaderProps) {
  return (
    <View className="w-full flex-row items-center justify-center gap-10 border-b border-solid border-[#4D4D4D] bg-transparent px-4 py-11">
      <Text className="text-lg font-bold text-white">{pageTitle}</Text>
      <HeaderButton onPress={onInfoPress} />
    </View>
  );
}
