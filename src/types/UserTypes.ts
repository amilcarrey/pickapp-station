export enum PackageStatus {
   DELIVERED = 'delivered',
   PENDING = 'pending',
}

export interface Package {
   id: string,
   deliveryDate: number,
   size: string,
   door: string,
   status: string,
}
export interface User {
   ciu: number,
   fullName: string,
   packages: Package[]
}
export type UserState = {
   user: User | null
   loading: boolean
}

export type UserActions = {
   setUser: (user: User) => void
   reset: () => void
}