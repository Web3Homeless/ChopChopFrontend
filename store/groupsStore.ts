import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "./storage";

export interface Bill {
  sum: number;
  payerAddress: string;
  // Addresses of the spenders. Spender1, ..., SpenderN
  spenersAddresses: string[];
  // Amount spend for each user in group. User0, User1, ..., UserN
  spentAmounts: number[];
  name: string;
}

export interface Group {
  id: string;
  name: string;
  participants: string[];
  bills: Bill[];
}

export interface Debt {
  from: string;
  to: string;
  debt: number;
}

export interface UserSelectionsStore {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

export function billToDebts(bill: Bill) {
  const debts = bill.spentAmounts.map((x, i) => ({
    from: bill.spenersAddresses[i],
    to: bill.payerAddress,
    debt: bill.spentAmounts[i],
  })) as Debt[];

  return debts;
}

export function calcOweIsOwed(debts: Debt[], userAddress: string) {
  const userOwe = debts
    .filter((x) => x.to == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);
  const userIsOwed = debts
    .filter((x) => x.from == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);

  return { userOwe, userIsOwed };
}

export const useGroupsStore = create<
  UserSelectionsStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      groups: [],
      setGroups(groups: Group[]) {
        set({
          groups,
        });
      },
    }),
    {
      name: "selectionsStore",
      storage: createJSONStorage(() => storage),
    },
  ),
);
