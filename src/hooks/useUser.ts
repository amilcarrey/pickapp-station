import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { User, UserActions, UserState } from '@/types/UserTypes'
import { PackageStatus } from '@/types/UserTypes'

const usersData = [
   {
      ciu: 123,
      password: 123,
      fullName: 'Juan Perez',
      keywords: ['OSO', 'PERRO', 'CARRO'],
      packages: [
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'S',
            door: '1',
            status: PackageStatus.PENDING
         },
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'M',
            door: '1',
            status: PackageStatus.PENDING
         },
      ]
   },
   {
      ciu: 456,
      password: 456,
      fullName: 'Juan Perez',
      packages: [
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'S',
            door: '1',
            status: PackageStatus.PENDING
         }
      ]
   }
]

const initialState = null
export const useUser = create(devtools(
   immer<UserState & UserActions>(
      (set) => ({
         user: null,
         loading: false,
         loginError: false,
         setUser: (user: User) => {
            set((state) => { state.user = user })
         },
         reset: () => {
            set((state) => { state.user = initialState })
         },
         login: async (ciu: number, password: number) => {
            // delay 2 seconds
            set((state) => { state.loading = true })
            await new Promise(resolve => setTimeout(resolve, 2000))
            const response = Promise.resolve(usersData.filter(user => user.ciu === ciu && user.password === password)[0])
            const user = await response

            if (!user) {
               set((state) => { state.loginError = true })
               set((state) => { state.loading = false })
               return
            }

            set((state) => { state.user = user })
            set((state) => { state.loading = false })
         }
      })))
)