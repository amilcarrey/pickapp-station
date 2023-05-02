/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import PageTitle from '@/modules/elements/PageTitle'

const Thanks = () => {
   const router = useRouter()
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
         <div className="mt-24 flex h-96 w-fit flex-col items-center justify-between gap-4 px-8 leading-6">
            <PageTitle
               title="Gracias por confiar en nosotros"
               accentWord="Gracias"
            />
            <span className="mt-24 text-6xl text-white">{timer}</span>
            <h2 className="text-3xl text-white">
               Codigo de transaccion:{' '}
               <span className="text-primary">123456789</span>
            </h2>
         </div>
      </>
   )
}

export default Thanks
