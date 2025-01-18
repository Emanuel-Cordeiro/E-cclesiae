import React from 'react';

import { ActivityIndicator } from 'react-native';

import { useTheme } from '@/context/ThemeContext';

import { Background } from './styles';

export function LoadingComponent() {
  const { applicationTheme } = useTheme();

  return (
    <Background>
      <ActivityIndicator
        size={35}
        color={applicationTheme.colors.toggle_text_color}
      />
    </Background>
  );
}
