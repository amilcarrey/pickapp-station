import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { PropertyState, PropertyActions, PropertyDetails, PropertyKey } from '@/types/PropertyTypes'


const initialState = null
export const useProperty = create(devtools(
   immer<PropertyState & PropertyActions>(
      set => ({
         property: null,
         setProperty: (property: PropertyDetails) => set((state) => {state.property = property}),
         reset: () => {
            set((state) =>{ state.property = initialState})
         },
      })))
)
