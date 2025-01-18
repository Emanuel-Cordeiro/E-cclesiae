import React from 'react';

import { FlatList } from 'react-native';
import { useNavigation } from 'expo-router';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

import { RootTabParamList } from '@/types/routes';
import { useTheme } from '@/context/ThemeContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import {
  Button,
  Container,
  ContainerPrayer,
  ContainerPrayerItem,
  IconButton,
  IconPrayer,
  PrayerTitle,
  Title,
  Toggle,
} from './styles';

interface ToggleCardProps {
  title: string;
  selected: boolean;
  isSelected: () => void;
  prayers: string[];
}

export default function ToggleCard({
  title,
  isSelected,
  selected,
  prayers,
}: ToggleCardProps) {
  const { applicationTheme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootTabParamList>>();

  const iconNameCard = selected ? 'chevron-down' : 'chevron-forward';

  function handleClickOnItem(itemIndex: number) {
    if (title === 'Adoração') {
      navigation.navigate('adorationCardData', { itemIndex: itemIndex });
    }

    if (title === 'Orações Marianas') {
      navigation.navigate('marianPrayersCardData', { itemIndex: itemIndex });
    }

    if (title === 'Orações') {
      navigation.navigate('prayersCardData', { itemIndex: itemIndex });
    }

    if (title === 'Igreja') {
      navigation.navigate('churchCardData', { itemIndex: itemIndex });
    }
  }

  return (
    <Container>
      <Toggle selected={selected}>
        <Button onPress={isSelected}>
          <Title>{title}</Title>
          <Ionicons
            name={iconNameCard}
            size={20}
            color={applicationTheme.colors.toggle_text_color}
          />
        </Button>
      </Toggle>

      {selected && (
        <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
          <ContainerPrayer>
            <FlatList
              data={prayers}
              keyExtractor={item => item}
              renderItem={({ item, index }) => (
                <ContainerPrayerItem>
                  <PrayerTitle>{item}</PrayerTitle>

                  <IconPrayer>
                    <IconButton onPress={() => handleClickOnItem(index)}>
                      <Ionicons
                        name="information-circle-outline"
                        size={23}
                        color={applicationTheme.colors.toggle_text_color}
                      />
                    </IconButton>
                  </IconPrayer>
                </ContainerPrayerItem>
              )}
            />
          </ContainerPrayer>
        </Animated.View>
      )}
    </Container>
  );
}
