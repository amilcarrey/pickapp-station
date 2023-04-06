'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const RouteTransition = ({ children }: { children: React.ReactNode }) => {
   return (
      <AnimatePresence initial={true}>
         <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 100, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            transition={{
               type: 'ease',
               stiffness: 260,
               damping: 20,
            }}
            className="bg-white"
         >
            <div className="container mx-auto flex h-screen flex-col items-center justify-start">
               <Link className='text-primary text-6xl my-20' href={'/'}> pickapp</Link>
               {children}
            </div>
         </motion.main>
      </AnimatePresence>
   )
}

export default RouteTransition
