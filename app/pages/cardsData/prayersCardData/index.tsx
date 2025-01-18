import React from 'react';

import { useRoute } from '@react-navigation/native';
import {
  contrictionAct,
  creed,
  glory,
  holyAngels,
  holySpirit,
  ourFather,
  saintBenedict,
  saintMichaelisArchangel,
  signOfTheCross,
} from '@/data/variousPrayers';

import { Background, InformationText, InformationTitle } from '../styles';

interface RouteParams {
  itemIndex: number;
}

export default function PrayersCardDataPage() {
  const route = useRoute();
  const { itemIndex } = route.params as RouteParams;
  let title = '';
  let content = '';

  switch (itemIndex) {
    case 0:
      title = 'Sinal da Cruz';
      content = signOfTheCross;
      break;
    case 1:
      title = 'Glória';
      content = glory;
      break;
    case 2:
      title = 'Pai Nosso';
      content = ourFather;
      break;
    case 3:
      title = 'Santo Anjo';
      content = holyAngels;
      break;
    case 4:
      title = 'Vinde Espírito Santo';
      content = holySpirit;
      break;
    case 5:
      title = 'Creio';
      content = creed;
      break;
    case 6:
      title = 'São Miguel Arcanjo';
      content = saintMichaelisArchangel;
      break;
    case 7:
      title = 'Ato de Contrição';
      content = contrictionAct;
      break;
    case 8:
      title = 'Oração de São Bento';
      content = saintBenedict;
      break;
  }
  return (
    <Background>
      <InformationTitle>{title}</InformationTitle>
      <InformationText>{content}</InformationText>
    </Background>
  );
}
