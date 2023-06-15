import { Button } from '@/components/ui/button'
import { useProperty } from '@/hooks/useProperty'
import { useSection } from '@/hooks/useSection'
import { useTotem } from '@/hooks/useTotem'
import { useUser } from '@/hooks/useUser'
import { SectionEnum } from '@/types'
import { motion } from 'framer-motion'
import React from 'react'
import OwnerDepositDialog from '../../what/OwnerDepositDialog'

interface PropertyDetailsProps {
   owner: string
   yesAction: () => void
   noAction: () => void
}

const PropertyDetails = ({
   owner,
   yesAction,
   noAction,
}: PropertyDetailsProps) => {
   const propertyDetails = useProperty((s) => s.property)
   const setSection = useSection((s) => s.setSection)
   const setKeywordNeeded = useTotem((s) => s.setKeywordNeeded)
   const ownerLogged = useUser((s) => s.user)

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
         }}
         exit={{ opacity: 0 }}
         className="flex w-full flex-col items-center justify-center"
      >
         <h2 className="mb-8 text-3xl font-bold">
            Estás por depositar a <span className="text-accent">{owner}</span>
         </h2>
         <h3 className="mb-8 text-2xl font-bold">¿Es correcto?</h3>

         {/* Button section */}
         <div className="flex w-1/4 flex-col gap-6">
            {ownerLogged ? (
               <Button onClick={() => yesAction()} variant={'secondary'}>
                  Si
               </Button>
            ) : propertyDetails &&
              propertyDetails.keywords &&
              propertyDetails.keywords.length > 0 ? (
               <OwnerDepositDialog
                  title="Palabra clave"
                  description={`Esta propiedad tiene ${propertyDetails.keywords.length} palabra(s) clave informadas`}
                  content="¿Necesitas palabra clave para esta entrega? Se te la proporcionará luego que deposites el paquete en el locker."
                  yesAction={() => {
                     setKeywordNeeded(true)
                     setSection(SectionEnum.Verification)
                  }}
                  noAction={() => setSection(SectionEnum.Verification)}
               >
                  <Button onClick={() => {}}>Si</Button>
               </OwnerDepositDialog>
            ) : (
               <OwnerDepositDialog
                  title="Palabra clave"
                  description={`Esta propiedad no tiene palabras clave informadas`}
                  content="¿Necesitas palabra clave para esta entrega?"
                  yesAction={() => setSection(SectionEnum.NoKeyword)}
                  noAction={() => setSection(SectionEnum.Verification)}
               >
                  <Button onClick={() => {}}>Si</Button>
               </OwnerDepositDialog>
            )}
            <Button onClick={() => noAction()} variant={'secondary'}>
               No
            </Button>
         </div>
      </motion.div>
   )
}

export default PropertyDetails
