import { create } from "zustand/index";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "./storage";

export interface IChainStore {
  chainId: string;
  setChainId: (chainId: string) => void;
  tokens: string[];
  setTokens: (tokens: string[]) => void;
}

export const useChainStore = create<IChainStore, [["zustand/persist", never]]>(
  persist(
    (set) => ({
      chainId: "",
      tokens: [],
      setChainId: (chainId: string) => {
        set({
          chainId: chainId,
        });
      },
      setTokens: (tokens: string[]) => {
        set({
          tokens: tokens,
        });
      },
    }),
    {
      name: "chainStore",
      storage: createJSONStorage(() => storage),
    },
  ),
);
