import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { SectionActions, SectionState, SectionEnum } from '@/types'


export const useSection = create(devtools(
   immer<SectionState & SectionActions>(set => ({
      section: SectionEnum.Where,
      setSection: (section: SectionEnum) => set((state: any) => { state.section = section }),
   }))))