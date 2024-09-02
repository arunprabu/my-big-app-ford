import { create } from "zustand"; // npm i zustand

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterState>((set) => ({
  count: 0, // default counter value
  increment: () => set((state) => ({ count: state.count + 1 })), // increment the counter
  decrement: () => set((state) => ({ count: state.count - 1 })), // increment the counter
}));
