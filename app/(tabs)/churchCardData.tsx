import React from 'react';

import { RouteParamsType } from '@/types/routes';
import { useRoute } from '@react-navigation/native';

import CorporalMercy from '../pages/cardsData/churchCardData/corporallMercy';
import SpiritualMercy from '../pages/cardsData/churchCardData/spiritualMercy';
import SevenSacraments from '../pages/cardsData/churchCardData/sevenSacraments';
import TeologalVirtues from '../pages/cardsData/churchCardData/teologalVirtues';
import CardinalVirtues from '../pages/cardsData/churchCardData/cardinalVirtues';
import TenCommandments from '../pages/cardsData/churchCardData/tenCommandments ';
import SevenCapitalSins from '../pages/cardsData/churchCardData/sevenCapitalSins';
import TwelveHolySpiritGifts from '../pages/cardsData/churchCardData/twelveHolySpirit';
import SevenHolySpiritGifts from '../pages/cardsData/churchCardData/sevenHolySpiritGifts';
import FiveChurchCommandments from '../pages/cardsData/churchCardData/fiveChurchCommandments';

export default function ChurchCardData() {
  const route = useRoute();
  const { itemIndex } = route.params as RouteParamsType;

  switch (itemIndex) {
    case 0:
      return <TenCommandments />;
    case 1:
      return <FiveChurchCommandments />;
    case 2:
      return <SevenSacraments />;
    case 3:
      return <SevenHolySpiritGifts />;
    case 4:
      return <TwelveHolySpiritGifts />;
    case 5:
      return <SevenCapitalSins />;
    case 6:
      return <TeologalVirtues />;
    case 7:
      return <CardinalVirtues />;
    case 9:
      return <CorporalMercy />;
    case 10:
      return <SpiritualMercy />;
  }
}
