import React, { useState } from 'react';

import { FlatList, View } from 'react-native';

import ToggleCard from '@/components/ToggleCard';
import { useTheme } from '@/context/ThemeContext';
import { prayersCategoriesAndTitles } from '@/data/catalog';

export default function Prayers() {
  const { applicationTheme } = useTheme();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItemSelection = (title: string) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(title)
        ? prevSelectedItems.filter(item => item !== title)
        : [...prevSelectedItems, title],
    );
  };

  const isItemSelected = (title: string) => selectedItems.includes(title);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 20,
        backgroundColor: applicationTheme.colors.application_background,
      }}>
      <FlatList
        data={
          Object.keys(
            prayersCategoriesAndTitles,
          ) as (keyof typeof prayersCategoriesAndTitles)[]
        }
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ToggleCard
            title={item}
            prayers={prayersCategoriesAndTitles[item]}
            selected={isItemSelected(item)}
            isSelected={() => toggleItemSelection(item)}
          />
        )}
      />
    </View>
  );
}
