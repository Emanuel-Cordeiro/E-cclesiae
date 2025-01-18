import React from 'react';

import { FlatList } from 'react-native';

import { useTheme } from '@/context/ThemeContext';
import { TabBarIcon } from '@/components/TabBarIcon';
import { usePrayerContext } from '@/context/PrayerContext';

import {
  ButtonText,
  Container,
  IconButton,
  LineSeparator,
  RoutineAddButton,
  RoutineEditButton,
  RoutineEditView,
  RoutinePrayerText,
  RoutinePrayerTitle,
  RoutineSubTitle,
  RoutineTitle,
  UserRoutineButtonText,
  UserRoutineContainer,
  UserRoutineEditView,
} from './styles';

export default function RoutineCreation() {
  const {
    userPrayerList,
    handlePrayerAdd,
    handleSinglePrayerDelete,
    prayerListArray,
    setPrayerListArray,
  } = usePrayerContext();

  function handlePrayerClick(prayerTitle: string) {
    const updatedList = prayerListArray.map(prayer =>
      prayer.title === prayerTitle
        ? { ...prayer, selected: !prayer.selected }
        : prayer,
    );
    setPrayerListArray(updatedList);
  }
  const { applicationTheme } = useTheme();
  const { colors } = applicationTheme;

  return (
    <Container>
      <RoutineTitle>Orações</RoutineTitle>
      <LineSeparator />
      <UserRoutineContainer>
        <RoutineSubTitle>Minha rotina</RoutineSubTitle>
        <FlatList
          data={userPrayerList}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserRoutineEditView>
              <UserRoutineButtonText>{item}</UserRoutineButtonText>

              <IconButton onPress={() => handleSinglePrayerDelete(item)}>
                <TabBarIcon
                  name="trash"
                  size={20}
                  color={colors.trash_bin_color}
                />
              </IconButton>
            </UserRoutineEditView>
          )}
        />
        <LineSeparator />
      </UserRoutineContainer>

      <FlatList
        data={prayerListArray}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RoutineEditView>
            <RoutineEditButton onPress={() => handlePrayerClick(item.title)}>
              <RoutinePrayerTitle>{item.title}</RoutinePrayerTitle>
              {item.selected && (
                <>
                  <RoutinePrayerText>{item.prayer}</RoutinePrayerText>
                  <RoutineAddButton onPress={() => handlePrayerAdd(item.title)}>
                    <ButtonText>Adicionar à rotina</ButtonText>
                  </RoutineAddButton>
                </>
              )}
            </RoutineEditButton>
          </RoutineEditView>
        )}
      />
    </Container>
  );
}
