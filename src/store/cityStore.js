import  { create } from 'zustand'

export const useCityStore = create((set) => ({
    city: '',
    setCity: (city) => set({ city }),
}))