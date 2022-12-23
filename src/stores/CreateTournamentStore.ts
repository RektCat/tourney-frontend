import create from "zustand";

export const useFormsStore = create((set, get) => ({}));

interface Page1StoreProps {
  tournamentType: "singleElimination" | "roundRobin";
  tournamentName: string;
  maxPlayers: number;
  roundCount: number;
  setPage1Props: (args: HTMLFormElement) => void;
}

const page1Reducer = (state: Page1StoreProps, form: HTMLFormElement) => {
  const formData = new FormData(form);

  for (const [key, value] of formData) {
    if (typeof value !== "string") continue;
    if (!state.hasOwnProperty(key)) continue;
    if (!isNaN(parseInt(value))) {
      // @ts-ignore
      state[key] = parseInt(value);
    } else {
      // @ts-ignore
      state[key] = value;
    }
  }
  return state;
};

export const usePage1Store = create<Page1StoreProps>((set) => ({
  tournamentName: "",
  maxPlayers: 0,
  roundCount: 0,
  tournamentType: "roundRobin",
  setPage1Props: (args) => set((state) => page1Reducer(state, args)),
}));
