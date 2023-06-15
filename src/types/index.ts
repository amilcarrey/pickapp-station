import { z } from 'zod'

export enum SectionEnum {
   Deposit,
   Keyword,
   Login,
   Open,
   Scan,
   Size,
   Thanks,
   Verification,
   What,
   Where,
   Return,
   NoKeyword,
}

const sectionState = z.object({
   section: z.nativeEnum(SectionEnum),
})

const sectionActions = z.object({
   setSection: z.function(z.tuple([z.nativeEnum(SectionEnum)]), z.void()),
   resetSection: z.function(z.tuple([]), z.void()),
})

export type SectionState = z.infer<typeof sectionState>
export type SectionActions = z.infer<typeof sectionActions>
