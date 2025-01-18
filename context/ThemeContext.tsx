import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useColorScheme } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextProps {
  applicationTheme: typeof lightTheme;
  switchApplicationTheme: () => void;
  changeApplicationFontSize: () => void;
  loadThemeFromAsyncStorage: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  applicationTheme: lightTheme,
  switchApplicationTheme: () => {},
  changeApplicationFontSize: () => {},
  loadThemeFromAsyncStorage: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemTheme = useColorScheme() || 'light';
  const [baseTheme, setBaseTheme] = useState(
    systemTheme === 'light' ? lightTheme : darkTheme,
  );
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'big'>('small');

  const fontSizePresets = {
    small: {
      xsm: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xlg: 30,
    },
    medium: {
      xsm: 15,
      sm: 17,
      md: 19,
      lg: 24,
      xlg: 36,
    },
    big: {
      xsm: 17,
      sm: 19,
      md: 21,
      lg: 26,
      xlg: 38,
    },
  };

  const getThemeWithFontSize = (theme: typeof lightTheme) => ({
    ...theme,
    font_sizes: fontSizePresets[fontSize],
  });

  const loadThemeFromAsyncStorage = async () => {
    const themeSavedInAsyncStorage =
      (await AsyncStorage.getItem('theme')) || JSON.stringify(baseTheme);

    const themeConvertedToObject = JSON.parse(themeSavedInAsyncStorage);

    setBaseTheme(themeConvertedToObject);

    const savedFontSize = (await AsyncStorage.getItem('fontSize')) as
      | 'small'
      | 'medium'
      | 'big';

    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
  };

  const switchApplicationTheme = async () => {
    const newTheme = baseTheme === lightTheme ? darkTheme : lightTheme;

    setBaseTheme(newTheme);

    await AsyncStorage.setItem('theme', JSON.stringify(newTheme));
  };

  const changeApplicationFontSize = async () => {
    const nextFontSize =
      fontSize === 'small' ? 'medium' : fontSize === 'medium' ? 'big' : 'small';

    setFontSize(nextFontSize);

    await AsyncStorage.setItem('fontSize', nextFontSize);
  };

  const applicationTheme = getThemeWithFontSize(baseTheme);

  useEffect(() => {
    loadThemeFromAsyncStorage();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        applicationTheme,
        switchApplicationTheme,
        changeApplicationFontSize,
        loadThemeFromAsyncStorage,
      }}>
      <StyledThemeProvider theme={applicationTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
