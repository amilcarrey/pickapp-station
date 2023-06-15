'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTotem } from '@hooks/useTotem'
import { useProperty } from '@/hooks/useProperty'
import PageTitle from '../../elements/PageTitle'
import BigOption from '../../elements/options/BigOption'
import { SectionEnum } from '@/types'
import { useSection } from '@/hooks/useSection'

const sizes = ['S', 'M', 'L']

const Size = () => {
   const router = useRouter()
   const totem = useTotem((s) => s.totem)
   const setSize = useTotem((s) => s.setSize)
   const keywords = useProperty((s) => s.property?.keywords)
   const setSection = useSection((s) => s.setSection)
   const handleClick = (size: string) => {
      setSize(size)
      if (totem.keywordNeeded && keywords && keywords.length > 0)
         return router.push('/keywords')
      return setSection(SectionEnum.Open)
   }

   return (
      <>
         <div
            key={SectionEnum.Size}
            className="mt-24 flex h-full w-full flex-col items-center justify-start gap-4"
         >
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
