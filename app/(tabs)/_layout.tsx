import React from 'react';

import { Tabs } from 'expo-router';

import { useTheme } from '@/context/ThemeContext';
import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  const { applicationTheme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: applicationTheme.colors.application_background,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="prayers"
        options={{
          title: '',
          tabBarIcon: () => (
            <TabBarIcon
              name="book"
              color={applicationTheme.colors.title_tabicon_color}
              size={22}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: () => (
            <TabBarIcon
              name="home"
              color={applicationTheme.colors.title_tabicon_color}
              size={22}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="routine"
        options={{
          title: '',
          tabBarIcon: () => (
            <TabBarIcon
              name="time"
              color={applicationTheme.colors.title_tabicon_color}
              size={22}
            />
          ),
        }}
      />

      {/* Screens that are not supposed to show up in the Tab Bar */}
      <Tabs.Screen
        name="churchCardData"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="adorationCardData"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="marianPrayersCardData"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="prayersCardData"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="rosary"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="fullRosary"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="configuration"
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tabs.Screen
        name="routineCreation"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
