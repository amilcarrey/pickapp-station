
export interface PropertyDetails {
   mainOwner: string,
   ciu: number,
   keywords: string[],
}

export type PropertyKey = {
   name: string,
   type: string
   value: string | number
}

export type PropertyState = {
   property: PropertyDetails | null
}

export type PropertyActions = {
   setProperty: (property: PropertyDetails) => void,
   reset: () => void
}