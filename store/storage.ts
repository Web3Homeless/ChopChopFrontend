import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StateStorage } from "zustand/middleware";

export const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved");
    const data = (await AsyncStorage.getItem(name)) || null;

    console.log("data: ", data);
    return data;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved");
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted");
    await AsyncStorage.removeItem(name);
  },
};

export const jsonStorage = createJSONStorage(() => storage);