export enum OperationType {
   PICKUP = 'PICKUP',
   DROP = 'DROP',
   RETURN = 'RETURN',
}

export enum PackageSize {
   S = 'S',
   M = 'M',
   L = 'L',
}

export interface Totem {
   owner: boolean | null
   operationType: OperationType | null
   size: string
   ciu: number
   keywordNeeded: boolean
   keywordUsed: string
}

export type TotemState = {
   totem: Totem
}

export type TotemActions = {
   setTotem: (totem: Totem) => void
   setKeywordNeeded: (keywordNeeded: boolean) => void
   setOperationtype: (operationType: OperationType) => void
   setSize: (size: string) => void
   setCIU: (ciu: number) => void
   setOwner: (owner: boolean) => void
   setKeywordUsed: (keyword: string) => void
   pickUpAll: (ciu: string) => Promise<boolean>
   reset: () => void
}
