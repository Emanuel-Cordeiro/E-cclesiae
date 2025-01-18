import React from 'react';

import { FlatList } from 'react-native';
import { useNavigation } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { RootTabParamList } from '@/types/routes';
import { PrayerType } from '@/context/PrayerContext';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import {
  ToggleContentButton,
  ToggleContentIconButton,
  ToggleContentIconView,
  ToggleContentText,
  ToggleContentTitle,
  ToggleContentTitleView,
} from './styles';

interface ToggleContentProps {
  dataArray: PrayerType[];
  setDataArray: (dataArray: PrayerType[]) => void;
}

export default function ToggleContent({
  dataArray,
  setDataArray,
}: ToggleContentProps) {
  const { applicationTheme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();

  function handlePrayerClick(prayerTitle: string) {
    const updatedList = dataArray?.map(prayer =>
      prayer.title === prayerTitle
        ? { ...prayer, selected: !prayer.selected }
        : prayer,
    );

    setDataArray(updatedList);
  }

  function handleBigPrayerNavigation(prayer: string) {
    const prayerToNavigate = prayer === 'Terço' ? 'rosary' : 'fullRosary';

    navigation.navigate(prayerToNavigate);
  }

  return (
    <FlatList
      data={dataArray}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <>
          <ToggleContentButton onPress={() => handlePrayerClick(item.title)}>
            <ToggleContentTitleView>
              <ToggleContentTitle key={item.title}>
                {item.title}
              </ToggleContentTitle>
              <ToggleContentIconView>
                <Ionicons
                  name={
                    item.selected
                      ? 'caret-down-outline'
                      : 'caret-forward-outline'
                  }
                  size={23}
                  color={applicationTheme.colors.text_color}
                />
              </ToggleContentIconView>
            </ToggleContentTitleView>
            {/* Due to the size of these prayers they will open their own page */}
            {item.selected && (
              <>
                {['Terço', 'Rosário'].includes(item.title) ? (
                  <ToggleContentIconButton
                    onPress={() => handleBigPrayerNavigation(item.title)}>
                    <ToggleContentText>Acessar a oração</ToggleContentText>
                  </ToggleContentIconButton>
                ) : (
                  <ToggleContentText key={item.prayer}>
                    {item.prayer}
                  </ToggleContentText>
                )}
              </>
            )}
          </ToggleContentButton>
        </>
      )}
    />
  );
}
