'use client'
import React, { useState } from 'react'
import { ScanLine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageTitle from '../../elements/PageTitle'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Numpad from '@/modules/elements/keyboard/Numpad'
import { SectionEnum } from '@/types'
import { useSection } from '@/hooks/useSection'

const Scan = () => {
   const [useKeyboard, setUseKeyboard] = useState(false)
   const [value, setValue] = useState<number>()
   const setSection = useSection((s) => s.setSection)
   const [showErrorCode, setShowErrorCode] = useState(false)

   const validateCode = () => {
      if (value === 1234) {
         return setSection(SectionEnum.Open)
      }
      return setShowErrorCode(true)
   }

   const inputClases = cn(useKeyboard ? 'visible w-1/2 text-lg' : 'invisible')
   return (
      <>
         <ScanLine className="mb-32 h-60 w-60" />
         <PageTitle
            title={!useKeyboard ? 'Escanea el QR' : 'Ingresa tu código'}
            accentWord={!useKeyboard ? 'Escanea' : 'Ingresa'}
         />
         <div className="mt-24 flex w-1/2 flex-col items-center justify-between gap-4">
            <Input
               readOnly
               autoComplete="off"
               value={value}
               placeholder="Código"
               className={inputClases}
               type="number"
            />
            {showErrorCode && (
               <p className="w-3/4 text-center text-lg text-red-600">
                  No se encontró paquete con ese código asociado.
               </p>
            )}
            {useKeyboard ? (
               <>
                  <Numpad
                     setNumber={setValue}
                     nextFocus={null}
                     okAction={validateCode}
                  />
                  <Button
                     className="w-3/4"
                     onClick={() => setUseKeyboard(false)}
                  >
                     Me arrepentí, escanear código.
                  </Button>
               </>
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
