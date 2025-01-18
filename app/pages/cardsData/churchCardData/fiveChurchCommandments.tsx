import React from 'react';

import {
  Background,
  InformationSubtitle,
  InformationText,
  InformationTitle,
} from '../styles';

export default function FiveChurchCommandments() {
  return (
    <Background>
      <InformationTitle>5 Mandamentos da Igreja</InformationTitle>
      <InformationSubtitle>1° Mandamento</InformationSubtitle>
      <InformationText>
        Participar da Missa inteira aos domingos, de outras festas de guarda e
        abster-se de ocupações de trabalho.
      </InformationText>
      <InformationSubtitle>2° Mandamento</InformationSubtitle>
      <InformationText>Confessar-se ao menos uma vez por ano.</InformationText>
      <InformationSubtitle>3° Mandamento</InformationSubtitle>
      <InformationText>
        Receber o sacramento da Eucaristia ao menos pela Páscoa da ressurreição.
      </InformationText>
      <InformationSubtitle>4° Mandamento</InformationSubtitle>
      <InformationText>
        Jejuar e abster-se de carne, conforme manda a Santa Mãe Igreja.
      </InformationText>
      <InformationSubtitle>5° Mandamento</InformationSubtitle>
      <InformationText>Ajudar a Igreja em suas necessidades.</InformationText>
    </Background>
  );
}
