import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: false,
  toggleTheme: () => set((state) => ({ theme: !state.theme })),

  setIsMobile: (isMobile) => set({ isMobile }),
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));

export default useThemeStore;
