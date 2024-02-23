import { create } from 'zustand'

interface IdStore {
    id: string | null;
    setId: (newId: string | null) => void;
  }

export const userStore = create<IdStore>((set) => ({
  id: null,
  setId: (newId) => set({ id: newId }),
}));