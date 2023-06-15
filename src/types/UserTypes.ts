export enum PackageStatus {
   DELIVERED = 'delivered',
   PENDING = 'pending',
}

export interface Package {
   id: string
   deliveryDate: number
   size: string
   door: string
   status: string
}
export interface User {
   ciu: number
   fullName: string
   packages: Package[]
   keywords?: string[]
}
export type UserState = {
   user: User | null
   loading: boolean
   loginError: boolean
}

export type UserActions = {
   setUser: (user: User) => void
   reset: () => void
   login: (ciu: number, password: number) => Promise<void>
}
