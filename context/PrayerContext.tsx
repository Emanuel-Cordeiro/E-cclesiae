import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Alert } from 'react-native';

import { prayersData } from '@/data/prayers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PrayerType {
  selected: boolean;
  title: string;
  prayer: string;
}

interface ChildrenProps {
  children: ReactNode;
}

interface PrayerContextType {
  handlePrayerAdd: (prayerTitle: string) => void;
  handlePrayerRoutineDelete: () => void;
  handleSinglePrayerDelete: (prayerTitle: string) => void;
  prayerListArray: PrayerType[];
  setPrayerListArray: (prayersArray: PrayerType[]) => void;
  userPrayerList: string[] | undefined;
}

const PrayerContext = createContext<PrayerContextType>({
  handlePrayerAdd: () => {},
  handlePrayerRoutineDelete: () => {},
  handleSinglePrayerDelete: () => {},
  prayerListArray: [],
  setPrayerListArray: () => {},
  userPrayerList: undefined,
});

export const usePrayerContext = () => useContext(PrayerContext);

export const PrayerProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [prayerListArray, setPrayerListArray] = useState<PrayerType[]>([]);
  const [userPrayerList, setUserPrayerList] = useState<string[]>([]);

  async function RetrieveUserPrayerListFromStorage() {
    const prayerListInAsyncStorage =
      await AsyncStorage.getItem('userPrayerList');

    if (prayerListInAsyncStorage) {
      setUserPrayerList(JSON.parse(prayerListInAsyncStorage));
    }
  }

  useEffect(() => {
    const prayersArray: PrayerType[] = Object.values(prayersData).flatMap(
      category =>
        Object.values(category).map(prayer => ({
          ...prayer,
          selected: false,
        })),
    );
    setPrayerListArray(prayersArray);

    RetrieveUserPrayerListFromStorage();
  }, []);

  async function handlePrayerAdd(prayerTitle: string) {
    const filteredPrayer = prayerListArray.find(
      prayer => prayer.title === prayerTitle,
    );

    if (!filteredPrayer || userPrayerList.includes(prayerTitle)) return;

    const prayerListUpdated = [...userPrayerList, prayerTitle];

    setUserPrayerList(prayerListUpdated);

    await AsyncStorage.setItem(
      'userPrayerList',
      JSON.stringify(prayerListUpdated),
    );
  }

  async function handlePrayerRoutineDelete() {
    Alert.alert('Atenção', 'Deseja excluir toda a sua rotina de orações?', [
      {
        text: 'Sim',
        onPress: () => {
          AsyncStorage.removeItem('userPrayerList');

          setUserPrayerList([]);
        },
      },
      {
        text: 'Não',
        onPress: () => null,
      },
    ]);
  }

  async function handleSinglePrayerDelete(prayerTitle: string) {
    setUserPrayerList(prevList =>
      prevList.filter(item => item !== prayerTitle),
    );
  }

  return (
    <PrayerContext.Provider
      value={{
        handlePrayerAdd,
        handlePrayerRoutineDelete,
        handleSinglePrayerDelete,
        prayerListArray,
        setPrayerListArray,
        userPrayerList,
      }}>
      {children}
    </PrayerContext.Provider>
  );
};

export { PrayerContext };
