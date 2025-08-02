import { create } from "zustand";
import Modes from "../components/UI/Data/Modes";

const useModesStore = create((set) => ({
  active: 1,
  setActive: (id) => set({ active: id }),
  Modes: Modes,

  currentText: null,
  handleCurrentText: (text) => set({ currentText: text }),
}));

export default useModesStore;
