import { create } from "zustand";
import Models from "../components/UI/Data/Models";

const useModelsStore = create((set) => ({
  // active models
  activeModels: 1,
  setActiveModels: (id) => set({ activeModels: id }),
  Models: Models,

  // dropdown
  showModels: false,
  setShowModels: (val) => set({ showModels: val }),
  handleShowModels: () =>
    set((state) => ({
      showModels: !state.showModels,
    })),
}));

export default useModelsStore;
