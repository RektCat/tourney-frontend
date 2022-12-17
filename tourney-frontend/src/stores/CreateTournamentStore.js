import create from "zustand";

export const useFormsStore = create((set, get) => ({}));

const page1Reducer = (state, event) => {
  const form = new FormData(event.target);

  let i = 0;
  for (const [key, value] of form) {
    if (i === 1) {
      state["tournamentType"] = key;
    } else {
      if (!isNaN(parseInt(value))) {
        state[key] = parseInt(value);
      } else {
        state[key] = value;
      }
    }
    i++;
  }
  return state;
};

export const usePage1Store = create((set) => ({
  tournamentName: "",
  maxPlayers: 0,
  roundCount: 0,
  tournamentType: "",
  setPage1Props: (args) => set((state) => page1Reducer(state, args)),
}));
