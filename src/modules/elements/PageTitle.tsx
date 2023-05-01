import { cn } from '@/lib/utils'
import type { FunctionComponent } from 'react'
import React from 'react'

interface PageTitleProps {
   title: string
   accentWord: string
   size?: 'S' | 'M' | 'L'
}
const PageTitle: FunctionComponent<PageTitleProps> = ({
   title,
   accentWord,
   size = 'M',
}) => {
   const sizeClass = cn({
      'text-5xl sm:text-[5rem]': size === 'L',
      'text-4xl sm:text-[4rem]': size === 'M',
      'text-3xl sm:text-[3rem]': size === 'S',
   })
   return (
      <h1
         className={`${sizeClass} text-light text-center font-extrabold tracking-tight`}
      >
         {title.split(accentWord).map((word, index) => (
            <span key={index}>
               {word}
               {index !== title.split(accentWord).length - 1 && (
                  <span className="text-accent">{accentWord}</span>
               )}
            </span>
         ))}
      </h1>
   )
}

export default PageTitle
