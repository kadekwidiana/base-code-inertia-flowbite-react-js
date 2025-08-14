// src/hooks/useWorkspaceSidebarState.js
import { create } from "zustand";

export const useSidebarStore = create((set) => ({
    isVisible: true,
    toggle: () => set((state) => ({ isVisible: !state.isVisible })),
    show: () => set({ isVisible: true }),
    hide: () => set({ isVisible: false }),
}));
