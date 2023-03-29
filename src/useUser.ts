import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import useApi from './useApi'
import { PackageStatus, User, UserActions, UserState } from '@/types/UserTypes'



const initialState = null
// const [getUser] = useApi()
export const useUser = create(devtools(
   immer<UserState & UserActions>(
      (set) => ({
         user: null,
         loading: false,
         setUser: (user : User) => {
            set((state) => { state.user = user })
         },
         
         reset: () => {
            set((state) =>{ state.user = initialState})
         },

      })))
)