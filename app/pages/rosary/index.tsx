import React, { useEffect, useState } from 'react';

import ToggleContent from '@/components/ToggleContent';
import { rosaryMysteries, rosaryPrayers } from '@/data/mary';

import { Container, Title } from './styles';

export default function Rosary() {
  const [rosaryData, setRosaryData] = useState(rosaryPrayers);

  const currentWeekday = new Date()
    .toLocaleDateString('pt-BR', {
      weekday: 'long',
    })
    .toLowerCase();

  function fetchDailyRosaryMysteries(weekday: string) {
    if (rosaryData.find(prop => prop.title === 'Mistérios do dia')) return;

    let mysteryOfTheDay: 'luminous' | 'joyful' | 'sorrowful' | 'glorious' =
      'luminous';

    if (weekday === 'segunda-feira' || weekday === 'sábado') {
      mysteryOfTheDay = 'joyful';
    } else if (weekday === 'terça-feira' || weekday === 'sexta-feira') {
      mysteryOfTheDay = 'sorrowful';
    } else if (weekday === 'quarta-feira' || weekday === 'domingo') {
      mysteryOfTheDay = 'glorious';
    }

    const dailyRosaryMysteries = {
      title: 'Mistérios do dia',
      prayer: rosaryMysteries[mysteryOfTheDay],
      selected: false,
    };

    const updatedList = [...rosaryData];

    updatedList.unshift(dailyRosaryMysteries);

    setRosaryData(updatedList);
  }

  useEffect(() => {
    fetchDailyRosaryMysteries(currentWeekday);
  }, []);

  return (
    <Container>
      <Title>Terço - Mistérios do dia</Title>
      <ToggleContent dataArray={rosaryData} setDataArray={setRosaryData} />
    </Container>
  );
}
