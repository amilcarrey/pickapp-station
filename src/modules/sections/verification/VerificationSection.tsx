'use client'
import React from 'react'
import PageTitle from '../../elements/PageTitle'
import { Button } from '@/components/ui/button'
import { ScanLine } from 'lucide-react'

const Verification = () => {
   return (
      <>
         <ScanLine className="mb-32 h-60 w-60 shadow-md" />

         <PageTitle title="Quién lo deja?" accentWord="Quién" />
         <PageTitle
            size="S"
            title="Por favor, escanea la parte frontal de tu dni"
            accentWord="escanea"
         />

         <div className="mt-24 flex flex-col items-center justify-between gap-4">
            <Button>DNI existente</Button>
            {/* <CustomOption title='DNI Invalido' to='' />
          <CustomOption title='DNI con acento' to='' />
          <CustomOption title='DNI con apostrofe' to='' /> */}
         </div>
      </>
   )
}

export default Verification
