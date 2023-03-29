import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { OperationType, TotemState, TotemActions, Totem } from '@/types/TotemTypes'

const initialState = {
   operationType: OperationType.PICKUP,
   size: '',
   ciu: 0,
   keywordNeeded: false,
   keywordUsed: ''
}

export const useTotem = create(devtools(
   immer<TotemState & TotemActions>(set => ({
      totem: initialState,
      setTotem: (totem: Totem) => set((state) => {state.totem = totem}),
      setKeywordNeeded: (keywordNeeded: boolean) => set((state) => { state.totem.keywordNeeded = keywordNeeded }),
      setOperationtype: (operationType: OperationType) => set((state) => { state.totem.operationType = operationType }),
      setCIU: (ciu: number) => set((state) => {
         state.totem.ciu = ciu
      }),
      setSize: (size:string) => set((state)=>{state.totem.size = size}),
      setKeywordUsed: (keyword: string) => set((state)=>{state.totem.keywordUsed = keyword}),
      pickUpAll: (ciu:string) => Promise.resolve(true),
      reset: () => {
         set((state) =>{ state.totem = initialState})
      },
   }))))

