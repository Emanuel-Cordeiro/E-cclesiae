import React, { useEffect, useState } from 'react';

import { useNavigation } from 'expo-router';

import { RootTabParamList, RouteParamsType } from '@/types/routes';
import { useRoute } from '@react-navigation/native';
import { angelus, hailHolyQueen, hailMary } from '@/data/mary';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { Background, InformationText, InformationTitle } from '../styles';

interface PrayerObjectType {
  title: string;
  content: string;
}

export default function MarianPrayersCardDataPage() {
  const route = useRoute();
  const { itemIndex } = route.params as RouteParamsType;
  const [prayerObject, setPrayerObject] = useState<PrayerObjectType>(
    {} as PrayerObjectType,
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();
  let prayer = {} as PrayerObjectType;

  // This logic is inside the useEffect so it allows the component to fully render before being executed
  // It prevents problems when navigating to the 'rosary' and 'fullRosary' pages
  useEffect(() => {
    switch (itemIndex) {
      case 0:
        prayer = {
          title: 'Ave Maria',
          content: hailMary,
        };
        setPrayerObject(prayer);
        break;
      case 1:
        prayer = {
          title: 'Salve Rainha',
          content: hailHolyQueen,
        };
        setPrayerObject(prayer);
        break;
      case 2:
        prayer = {
          title: 'Angelus',
          content: angelus,
        };
        setPrayerObject(prayer);
        break;
      case 3:
        navigation.navigate('rosary');
        break;
      case 4:
        navigation.navigate('fullRosary');
        break;
    }
  }, [itemIndex]);

  return (
    <Background>
      <InformationTitle>{prayerObject.title}</InformationTitle>
      <InformationText>{prayerObject.content}</InformationText>
    </Background>
  );
}
