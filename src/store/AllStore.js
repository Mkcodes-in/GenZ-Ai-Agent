import { create } from "zustand";

const useThemeChange = create((set) => ({
    theme: false,
    toggleTheme: () => set((state) => ({ theme: !state.theme })),
    active: 1,
    setActive: (id) => set({ active: id }),
}));

export default useThemeChange;