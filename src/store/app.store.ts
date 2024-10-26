import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  isCollapsed: boolean;
  layoutAdmin: number[];
  setIsCollapsed: (state: boolean) => void;
  setLayoutAdmin: (layout: number[]) => void;
};

export const useAppStore = create<Store>()(
  persist(
    (set) => ({
      isCollapsed: true,
      layoutAdmin: [20, 80],
      setIsCollapsed: (state: boolean) => set({ isCollapsed: state }),
      setLayoutAdmin: (layout: number[]) => set({ layoutAdmin: layout }),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
