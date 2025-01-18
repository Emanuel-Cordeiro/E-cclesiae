import React from 'react';

import { useNavigation } from 'expo-router';

import { RootTabParamList } from '@/types/routes';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import {
  ComponentButtonCard,
  ContainerButtonCard,
  DescriptionButtonCard,
} from './styles';

export default function ButtonCard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();
  return (
    <ContainerButtonCard>
      <ComponentButtonCard onPress={() => navigation.navigate('rosary')}>
        <DescriptionButtonCard>Medite o Santo Terço</DescriptionButtonCard>
      </ComponentButtonCard>
    </ContainerButtonCard>
  );
}
