'use client'
import React from 'react'
import { useTotem } from '@hooks/useTotem'
import { OperationType } from '@/types/TotemTypes'
import { Button } from '@/components/ui/button'
import PageTitle from '@/modules/elements/PageTitle'
import { SectionEnum } from '@/types'
const Open = () => {
   const totem = useTotem((s) => s.totem)

   return (
      <>
         <div
            key={SectionEnum.Open}
            className="mt-24 flex h-full w-full flex-col items-center justify-center gap-4 text-center"
         >
            <PageTitle
               title={`${
                  totem.operationType === OperationType.PICKUP
                     ? 'Retira tu paquete del locker que se abrió.'
                     : 'Deposita tu paquete en el locker que se abrió.'
               } `}
               accentWord={
                  totem.operationType === OperationType.PICKUP
                     ? 'Retira'
                     : 'Deposita'
               }
            />
            <div className="mt-96 flex w-full items-center justify-center">
               <Button>Cerrar</Button>
            </div>
         </div>
      </>
   )
}

export default Open
