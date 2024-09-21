import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StateStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

// const storage = new MMKV({
//   id: 'zknoid'
// })

// const zustandStorage: StateStorage = {
//   setItem: (name, value) => {
//     return storage.set(name, value)
//   },
//   getItem: (name) => {
//     const value = storage.getString(name)
//     return value ?? null
//   },
//   removeItem: (name) => {
//     return storage.delete(name)
//   },
// }

const storage: StateStorage = {
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

export interface UserSelectionsStore {
  selectedSourceChains: string[];
  setSelectedSourceChains: (chains: string[]) => void;
  selectedTokens: string[];
  setSelectedTokens: (chains: string[]) => void;
}

export const useSelectionsStore = create<
  UserSelectionsStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      selectedSourceChains: [],
      setSelectedSourceChains(selectedSourceChains) {
        set({
          selectedSourceChains,
        });
      },
      selectedTokens: [],
      setSelectedTokens(selectedTokens) {
        set({
          selectedTokens,
        });
      },
    }),
    {
      name: "selectionsStore",
      storage: createJSONStorage(() => storage),
    },
  ),
);
