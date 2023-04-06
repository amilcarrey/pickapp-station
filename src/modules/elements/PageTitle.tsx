import type { FunctionComponent } from 'react'
import React from 'react'
interface PageTitleProps {
   title: string
   accentWord: string
}
const PageTitle: FunctionComponent<PageTitleProps> = ({
   title,
   accentWord,
}) => {
   return (
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-primary sm:text-[5rem]">
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
