import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import React from 'react'

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
            <Button onClick={() => yesAction()}>Si</Button>
            <Button onClick={() => noAction()} variant={'secondary'}>
               No
            </Button>
         </div>
      </motion.div>
   )
}

export default PropertyDetails
