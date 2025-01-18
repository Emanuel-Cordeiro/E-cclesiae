import React, { useEffect, useState } from 'react';

import { useNavigation } from 'expo-router';

import { useTheme } from '@/context/ThemeContext';
import { RootTabParamList } from '@/types/routes';
import { TabBarIcon } from '@/components/TabBarIcon';
import ToggleContent from '@/components/ToggleContent';
import { PrayerType, usePrayerContext } from '@/context/PrayerContext';
import { prayersData, PrayersDataType } from '@/data/prayers';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import {
  Container,
  IconButton,
  IconRoutine,
  RoutineTitle,
  SameLineContent,
} from './styles';

interface UserRoutineType {
  prayers: string[] | undefined;
}

export default function Routine() {
  const { applicationTheme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();
  const [prayerArray, setPrayerArray] = useState<PrayerType[]>(
    [] as PrayerType[],
  );

  const { userPrayerList } = usePrayerContext();

  const getFilteredPrayers = (
    prayersData: PrayersDataType,
    userRoutine?: UserRoutineType,
  ): PrayerType[] => {
    const result: PrayerType[] = [];
    const userPrayers = userRoutine?.prayers;

    if (userPrayers) {
      userPrayers.forEach(prayerKey => {
        for (const category in prayersData) {
          const categoryPrayers = prayersData[category];

          for (const key in categoryPrayers) {
            if (categoryPrayers[key].title === prayerKey) {
              const prayerData = categoryPrayers[key];
              result.push({
                title: prayerData.title,
                prayer: prayerData.prayer,
                selected: false,
              });
              break;
            }
          }
        }
      });
    }

    return result;
  };

  useEffect(() => {
    const filteredPrayers = getFilteredPrayers(prayersData, {
      prayers: userPrayerList,
    });

    setPrayerArray(filteredPrayers);
  }, [prayersData, userPrayerList]);

  return (
    <Container>
      <SameLineContent>
        <RoutineTitle>Sua Rotina</RoutineTitle>
        <IconRoutine>
          <IconButton onPress={() => navigation.navigate('routineCreation')}>
            <TabBarIcon
              name="pencil"
              size={25}
              color={applicationTheme.colors.text_color}
            />
          </IconButton>
        </IconRoutine>
      </SameLineContent>

      <ToggleContent dataArray={prayerArray} setDataArray={setPrayerArray} />
    </Container>
  );
}
