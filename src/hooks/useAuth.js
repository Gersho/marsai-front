import { create } from 'zustand';

export const useAuthStore = create(set => ({
  user: null,
  isInit: false,
  setUser: userData => set({ user: userData, isInit: true }),
}));
