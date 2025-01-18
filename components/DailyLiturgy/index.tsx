import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Alert } from 'react-native';

import { LoadingComponent } from '@/components/LoadingComponent';

import {
  Container,
  LiturgyReferenceHightlight,
  LiturgyText,
  LiturgyTitle,
  LiturgyTitleHighlight,
  ReadingTitle,
  SameLineText,
  SectionTitle,
} from './styles';

interface Liturgy {
  liturgyTime: string;
  liturgyColor: string;
  firstReadingReference: string;
  firstReadingTitle: string;
  firstReading: string;
  secondReadingReference: string;
  secondReadingTitle: string;
  secondReading: string;
  psalmReference: string;
  psalmRefrain: string;
  psalm: string;
  gospelReference: string;
  gospelTitle: string;
  gospel: string;
}

export default function DailyLiturgy() {
  const [dailyLiturgy, setDailyLiturgy] = useState<Liturgy>({} as Liturgy);
  const [isFetchingLiturgy, setIsFetchingLiturgy] = useState(false);

  const currentDay = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
  });

  async function fetchDailyLiturgy() {
    try {
      setIsFetchingLiturgy(true);

      const { data } = await axios.get(
        `https://liturgia.up.railway.app/?dia=${currentDay}`,
      );

      const liturgy = {
        liturgyTime: data.liturgia,
        liturgyColor: data.cor,
        firstReadingReference: data.primeiraLeitura.referencia,
        firstReadingTitle: data.primeiraLeitura.titulo,
        firstReading: data.primeiraLeitura.texto,
        secondReadingReference: data.segundaLeitura.referencia,
        secondReadingTitle: data.segundaLeitura.titulo,
        secondReading: data.segundaLeitura.texto,
        psalmReference: data.salmo.referencia,
        psalmRefrain: data.salmo.refrao,
        psalm: data.salmo.texto,
        gospelReference: data.evangelho.referencia,
        gospelTitle: data.evangelho.titulo,
        gospel: data.evangelho.texto,
      };

      setDailyLiturgy(liturgy);
    } catch (error: any) {
      Alert.alert(error);
    } finally {
      setIsFetchingLiturgy(false);
    }
  }

  useEffect(() => {
    fetchDailyLiturgy();
  }, []);

  if (isFetchingLiturgy) return <LoadingComponent />;

  return (
    <Container>
      <SectionTitle>Liturgia Diária</SectionTitle>
      <LiturgyTitle>{dailyLiturgy.liturgyTime}</LiturgyTitle>
      <LiturgyText>
        <LiturgyTitleHighlight>
          Cor Litúrgica: {dailyLiturgy.liturgyColor}.
        </LiturgyTitleHighlight>
      </LiturgyText>

      <ReadingTitle>Primeira Leitura</ReadingTitle>
      <SameLineText>
        <LiturgyTitle>
          <LiturgyTitleHighlight>
            {dailyLiturgy.firstReadingTitle}
          </LiturgyTitleHighlight>
          <LiturgyReferenceHightlight>
            {'  '}({dailyLiturgy.firstReadingReference})
          </LiturgyReferenceHightlight>
        </LiturgyTitle>
      </SameLineText>
      <LiturgyText>{dailyLiturgy.firstReading}</LiturgyText>
      <LiturgyText>
        <LiturgyTitleHighlight>— Graças a Deus.</LiturgyTitleHighlight>
      </LiturgyText>

      <ReadingTitle>
        Salmo Responsorial{' '}
        <LiturgyReferenceHightlight>
          ({dailyLiturgy.psalmReference})
        </LiturgyReferenceHightlight>
      </ReadingTitle>
      <LiturgyText>
        <LiturgyTitleHighlight>
          R.: {dailyLiturgy.psalmRefrain}
        </LiturgyTitleHighlight>
      </LiturgyText>
      <LiturgyText>{dailyLiturgy.psalm}</LiturgyText>

      {dailyLiturgy.secondReading && (
        <>
          <ReadingTitle>Segunda Leitura</ReadingTitle>
          <SameLineText>
            <LiturgyTitle>
              <LiturgyTitleHighlight>
                {dailyLiturgy.secondReadingTitle}
              </LiturgyTitleHighlight>
              <LiturgyReferenceHightlight>
                {'  '}({dailyLiturgy.secondReadingReference})
              </LiturgyReferenceHightlight>
            </LiturgyTitle>
          </SameLineText>
          <LiturgyText>{dailyLiturgy.secondReading}</LiturgyText>
        </>
      )}

      <ReadingTitle>Evangelho</ReadingTitle>
      <LiturgyText>Aleluia, Aleluia, Aleluia.</LiturgyText>
      <SameLineText>
        <LiturgyTitle>
          <LiturgyTitleHighlight>
            {dailyLiturgy.gospelTitle}
          </LiturgyTitleHighlight>
          <LiturgyReferenceHightlight>
            {'  '}({dailyLiturgy.gospelReference})
          </LiturgyReferenceHightlight>
        </LiturgyTitle>
      </SameLineText>
      <LiturgyText>{dailyLiturgy.gospel}</LiturgyText>
      <LiturgyText>— Palavra da Salvação.</LiturgyText>
      <LiturgyText>
        <LiturgyTitleHighlight>— Glória a vós, Senhor.</LiturgyTitleHighlight>
      </LiturgyText>
    </Container>
  );
}
