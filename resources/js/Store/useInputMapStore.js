import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useInputMapStore = create(
    persist(
        (set) => ({
            locationInput: '',
            setLocationInput: (data) => set({ locationInput: data }),
            addressInput: '',
            setAddressInput: (data) => set({ addressInput: data }),
            locationInputFromMetadata: null,
            setLocationInputFromMetadata: (data) => set({ locationInputFromMetadata: data }),
            areaJsonInput: '',
            setAreaJsonInput: (data) => set({ areaJsonInput: data }),
            wideLandInput: '',
            setWideLandInput: (data) => set({ wideLandInput: data }),
            addressInput: '',
            clearStore: () => set({
                locationInput: '',
                addressInput: '',
                locationInputFromMetadata: null,
                areaJsonInput: '',
                wideLandInput: '',
            })
        }),
        {
            name: 'SIDATANG-STORE',
        }
    )
);
