import React from 'react';

import ButtonCard from '@/components/ButtonCard';
import DailyLiturgy from '@/components/DailyLiturgy';
import SundayObligation from '@/components/SundayObligation';

import { Container } from './styles';

export default function Daily() {
  return (
    <Container>
      <SundayObligation />
      <ButtonCard />
      <DailyLiturgy />
    </Container>
  );
}
