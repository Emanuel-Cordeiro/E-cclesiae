import React from 'react';

import { RouteParamsType } from '@/types/routes';
import { useRoute } from '@react-navigation/native';
import {
  adorationAct,
  adoroTeDevote,
  pangeLingua,
  tantumErgoSacramentum,
} from '@/data/adoration';

import { Background, InformationText, InformationTitle } from '../styles';

export default function AdorationCardDataPage() {
  const route = useRoute();
  const { itemIndex } = route.params as RouteParamsType;
  let title = '';
  let content = '';

  switch (itemIndex) {
    case 0:
      title = 'Eu Vos Adoro';
      content = adoroTeDevote;
      break;
    case 1:
      title = 'Canta, ó Lingua';
      content = pangeLingua;
      break;
    case 2:
      title = 'Tão Sublime Sacramento';
      content = tantumErgoSacramentum;
      break;
    case 3:
      title = 'Ato de Adoração';
      content = adorationAct;
      break;
  }

  return (
    <Background>
      <InformationTitle>{title}</InformationTitle>
      <InformationText>{content}</InformationText>
    </Background>
  );
}
