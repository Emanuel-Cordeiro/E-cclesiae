import React, { useEffect } from 'react';

import { ContainerCard, ContainerComponent, DescriptionCard } from './styles';

export default function SundayObligation() {
  let isVespersTime = false;

  const obligationDays = [
    ['25/12', 'Natal de Nosso Senhor Jesus Cristo'],
    ['01/01', 'Solenidade de Santa Maria Mãe de Deus'],
    ['06/01', 'Epifania de Nosso Senhor Jesus Cristo'],
    ['19/03', 'Solenidade de São José'],
    ['29/07', 'Apóstolos São Pedro e São Paulo'],
    ['15/08', 'Assunção de Nossa Senhora'],
    ['01/11', 'Todos os Santos'],
    ['08/12', 'Festa da Imaculada Conceição de Nossa Senhora'],
  ];

  // Calculates the easter day according to Gauss algorithm
  function CalculateEasterAndCorpusChristiDay() {
    const currentYear = new Date().toLocaleDateString('pt-BR', {
      year: 'numeric',
    });

    let day = 1;
    let month = 1;

    const a = parseInt(currentYear, 10) % 19;
    const b = parseInt(currentYear, 10) % 4;
    const c = parseInt(currentYear, 10) % 7;
    const d = (19 * a + 24) % 30; // 24 is a variable that changes every 200 years, next change is in 2099
    const e = (2 * b + 4 * c + 6 * d + 5) % 7; // 5 is a variable that changes every 200 years, next change is in 2099

    if (d + e < 10) {
      day = d + e + 22;
      month = 3;
    } else {
      day = d + e - 9;
      month = 4;
    }

    // The algorithm has two exceptions that are treated separately, they happen one time each every century
    if (day === 26 && month === 4) {
      day = 19;
    }

    if (day === 25 && month === 4 && d === 28 && a > 10) {
      day = 18;
    }

    const easterDate = new Date(parseInt(currentYear, 10), month - 1, day);

    // Corpus Christi is 60 days after easter every year, this algorithm calculates it
    const corpusChristiDate = new Date(easterDate);
    corpusChristiDate.setDate(corpusChristiDate.getDate() + 60);

    const easterDay = easterDate.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
    });

    const corpusChristiDay = corpusChristiDate.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
    });

    const easterObligationList = [
      easterDay,
      'Páscoa de Nosso Senhor Jesus Cristo',
    ];

    const corpusChristiObligationList = [
      corpusChristiDay,
      'Solenidade de Corpus Christi',
    ];

    obligationDays.push(easterObligationList);
    obligationDays.push(corpusChristiObligationList);
  }

  function checkIfCurrentDayIsObligationDay() {
    const currentDate = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
    });

    const currentWeekDay = new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
    });

    const currentHour = new Date().getHours();

    if (currentWeekDay === 'domingo') return true;

    if (currentWeekDay === 'sábado' && currentHour >= 15) {
      isVespersTime = true;
      return true;
    }

    for (let i = 0; i < obligationDays.length; i++) {
      if (obligationDays[i][0] === currentDate) return true;
    }
  }

  const isObligationDay = checkIfCurrentDayIsObligationDay();

  if (!isObligationDay) return null;

  useEffect(() => {
    CalculateEasterAndCorpusChristiDay();
  }, []);

  return (
    <ContainerComponent>
      <ContainerCard>
        <DescriptionCard>
          {isVespersTime
            ? 'É véspera de um dia de preceito, vá a Santa Missa!'
            : 'Hoje é dia de preceito, participe da Santa Missa!'}
        </DescriptionCard>
      </ContainerCard>
    </ContainerComponent>
  );
}
