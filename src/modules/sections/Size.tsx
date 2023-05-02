'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTotem } from '@hooks/useTotem'
import { useProperty } from '@/hooks/useProperty'
import PageTitle from '../elements/PageTitle'
import BigOption from '../elements/options/BigOption'

const sizes = ['S', 'M', 'L']

const Size = () => {
   const router = useRouter()
   const totem = useTotem((s) => s.totem)
   const setSize = useTotem((s) => s.setSize)
   const keywords = useProperty((s) => s.property?.keywords)

   const handleClick = (size: string) => {
      setSize(size)
      console.log(totem)
      console.log(keywords)
      console.log(totem.keywordNeeded && keywords && keywords.length > 0)

      if (totem.keywordNeeded && keywords && keywords.length > 0)
         return router.push('/keywords')
      return router.push('/open')
   }

   return (
      <>
         <div className="mt-24 flex h-full w-full flex-col items-center justify-start gap-4">
            <PageTitle
               title="Que tamaño de locker precisas?"
               accentWord="tamaño"
            />

            <div className="container mt-20 grid h-full grid-cols-3 content-start justify-items-center gap-2">
               {sizes.map((size) => (
                  <BigOption
                     key={size}
                     onClick={() => handleClick(size)}
                     title={size}
                     className="w-3/4"
                  />
               ))}
            </div>
         </div>
      </>
   )
}

export default Size
