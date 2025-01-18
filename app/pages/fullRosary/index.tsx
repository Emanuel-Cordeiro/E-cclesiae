import React, { useState } from 'react';

import { fullRosaryPrayers } from '@/data/mary';
import ToggleContent from '@/components/ToggleContent';

import { Container, SubTitle, Title } from './styles';

export default function FullRosary() {
  const [rosaryData, setRosaryData] = useState(fullRosaryPrayers);
  return (
    <Container>
      <Title>Santo Rosário</Title>
      <SubTitle>Segundo São Luis Maria Grignion de Montfort</SubTitle>

      <ToggleContent dataArray={rosaryData} setDataArray={setRosaryData} />
    </Container>
  );
}
