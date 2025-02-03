import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Stack } from 'expo-router/stack';
import CustomHeader from '@/components/Header';
import { PrayerProvider } from '@/context/PrayerContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import * as SplashScreen from 'expo-splash-screen';

// This function was created to make sure that SafeAreaView updates according to the theme
// If SafeAreaView is nested inside ThemeProvider it doesn't work
function LayoutContent() {
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise(resolve => setTimeout(resolve, 4000));

        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_700Bold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  const { applicationTheme } = useTheme();
  const { isDarkMode, colors } = applicationTheme;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.application_background,
          }}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.application_background,
              },
              header: () => <CustomHeader />,
            }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <PrayerProvider>
        <LayoutContent />
      </PrayerProvider>
    </ThemeProvider>
  );
}
