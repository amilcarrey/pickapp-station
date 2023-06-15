export enum LocationType {
   NEIGHBORHOOD = 'NEIGHBORHOOD',
   BUILDING = 'BUILDING',
}

export interface LocationKey {
   name: string
   type: string
}

export interface LocationDetails {
   type: LocationType
   keys: LocationKey[]
}

export type LocationState = {
   location: LocationDetails | null
}

export type LocationActions = {
   getLocationDetails: () => void
}
