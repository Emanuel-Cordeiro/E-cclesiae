import React from 'react';

import { useTheme } from '@/context/ThemeContext';
import { TabBarIcon } from '@/components/TabBarIcon';

import { ConfigurationText, Container, SameLineText } from './styles';

import { usePrayerContext } from '@/context/PrayerContext';

export default function ConfigurationPage() {
  const {
    applicationTheme,
    switchApplicationTheme,
    changeApplicationFontSize,
  } = useTheme();
  const { colors, isDarkMode } = applicationTheme;

  const iconTheme = isDarkMode ? 'sunny' : 'moon';
  const { handlePrayerRoutineDelete } = usePrayerContext();

  return (
    <Container>
      <SameLineText>
        <ConfigurationText>
          Tema {isDarkMode ? 'Escuro' : 'Claro'}
        </ConfigurationText>
        <TabBarIcon
          name={iconTheme}
          size={20}
          color={colors.title_tabicon_color}
          onPress={() => switchApplicationTheme()}
        />
      </SameLineText>
      <SameLineText>
        <ConfigurationText>Alterar tamanho da fonte</ConfigurationText>
        <TabBarIcon
          name="text"
          size={20}
          color={colors.title_tabicon_color}
          onPress={() => changeApplicationFontSize()}
        />
      </SameLineText>
      <SameLineText>
        <ConfigurationText>Apagar a rotina</ConfigurationText>
        <TabBarIcon
          name="trash-bin"
          size={20}
          color={colors.trash_bin_color}
          onPress={() => handlePrayerRoutineDelete()}
        />
      </SameLineText>
    </Container>
  );
}
