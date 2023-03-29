import type { FunctionComponent } from 'react';
import React from 'react'
interface PageTitleProps {
  title: string
  accentWord: string
}
const PageTitle : FunctionComponent<PageTitleProps> = ({title,accentWord}) => {
  return (
    <h1 className="text-5xl text-center font-extrabold tracking-tight text-white sm:text-[5rem]">
      {title.split(accentWord).map((word, index) => (
        <span key={index}>
          {word}
          {index !== title.split(accentWord).length - 1 && <span className="text-[#1c4527]">{accentWord}</span>}
        </span>
      ))}
    </h1>
  )
}

export default PageTitle