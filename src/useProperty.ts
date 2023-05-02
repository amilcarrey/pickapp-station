import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { PropertyState, PropertyActions, PropertyDetails, PropertyKey } from '@/types/PropertyTypes'


const initialState = {
   mainOwner: "Amilcar Rey",
   ciu: 124,
   keywords: ["asado", "futbol", "mate"]
}
export const useProperty = create(devtools(
   immer<PropertyState & PropertyActions>(
      set => ({
         property: null,
         setProperty: (property: PropertyDetails) => set((state) => { state.property = property }),
         reset: () => {
            set((state) => { state.property = initialState })
         },
      })))
)
