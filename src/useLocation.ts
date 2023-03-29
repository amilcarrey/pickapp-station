import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { LocationState, LocationActions, LocationType, LocationDetails } from '@/types/LocationTypes'


export const useLocation = create(devtools(
   immer<LocationState & LocationActions>(set => ({
      location: null,
      getLocationDetails: () =>
         set((state) => {
            state.location = {
               type: LocationType.NEIGHBORHOOD,
               keys: [{ name: "Piso", type: "number" }, { name: "Puerta", type: "string" }]
            } as LocationDetails
         })
   }))))

