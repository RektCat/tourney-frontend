import create from "zustand";

export const useFormsStore = create((set, get) => ({}));

const page1Reducer = (state, args) => {
  console.log({ state, args });
};

export const usePage1Store = create((set) => ({
  name: "",
  maxPlayers: 0,
  roundCount: 0,
  setPage1Props: (args) => set((state) => page1Reducer(state, args)),
}));
