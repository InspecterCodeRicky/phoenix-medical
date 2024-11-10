import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  breadcrumbItems: MenuItemBreadcrumbItems[];
  setIsBreadcrumbItems: (state: MenuItemBreadcrumbItems[]) => void;
};

export interface MenuItemBreadcrumbItems {
  title: string;
  url: string;
}

export const useAppStore = create<Store>()(
  persist(
    (set) => ({
      breadcrumbItems: [],
      layoutAdmin: [20, 80],
      setIsBreadcrumbItems: (breadcrumbItems: MenuItemBreadcrumbItems[]) => set({ breadcrumbItems: breadcrumbItems }),
    }),
    {
      name: "app-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
