import React from 'react';

import { useNavigation } from 'expo-router';

import { useTheme } from '@/context/ThemeContext';
import { RootTabParamList } from '@/types/routes';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { TabBarIcon } from '../TabBarIcon';
import { Container, Title } from './styles';

const CustomHeader: React.FC = () => {
  const { applicationTheme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();

  return (
    <Container>
      <Title>E-cclesiae</Title>

      <TabBarIcon
        name="settings-outline"
        size={25}
        color={applicationTheme.colors.title_tabicon_color}
        onPress={() => navigation.navigate('configuration')}
      />
    </Container>
  );
};

export default CustomHeader;
