import PageTitle from '@/modules/elements/PageTitle'
import { SectionEnum } from '@/types'
import router from 'next/router'
import React, { useEffect, useState } from 'react'

const NoKeywordSection = () => {
   const [timer, setTimer] = useState(15)

   //redirect to / after 5 seconds
   useEffect(() => {
      const interval = setInterval(() => {
         setTimer(timer - 1)
      }, 1000)
      if (timer === 0) {
         router.push('/')
      }
      return () => clearInterval(interval)
   }, [timer])
   return (
      <>
         <PageTitle
            key={SectionEnum.NoKeyword}
            title="Lo lamentamos, no tenemos palabras clave para tu paquete"
            accentWord="palabras clave"
         />
         <span className="mt-24 text-6xl text-white">{timer}</span>
      </>
   )
}

export default NoKeywordSection
