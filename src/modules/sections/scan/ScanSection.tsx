'use client'
import React, { useState } from 'react'
import { ScanLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageTitle from '../../elements/PageTitle'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Numpad from '@/modules/elements/keyboard/Numpad'

const Scan = () => {
   const [useKeyboard, setUseKeyboard] = useState(false)
   const [value, setValue] = useState<number>()

   const inputClases = cn(useKeyboard ? 'visible w-1/4' : 'invisible')
   return (
      <>
         <PageTitle title="Escanea el QR" accentWord="Escanea" />
         <div className="mt-24 flex w-1/2 flex-col items-center justify-between gap-4">
            <ScanLine className="mb-32 h-60 w-60 shadow-md" />
            <Input placeholder="Inserte el código" className={inputClases} />
            {useKeyboard ? (
               <Numpad setNumber={setValue} nextFocus={null} />
            ) : (
               <Button onClick={() => setUseKeyboard(true)}>
                  Tengo un código →
               </Button>
            )}
         </div>
         {/* <GrabCode open={openCode} setOpen={setOpenCode} /> */}
      </>
   )
}

export default Scan
