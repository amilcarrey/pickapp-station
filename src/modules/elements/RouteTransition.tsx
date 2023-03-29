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
            className="bg-gradient-to-b from-[#ff9900] to-[#bf8835e0]"
         >
            <div className="container mx-auto flex h-screen flex-col items-center justify-start">
               <Link href={'/'}>
                  {' '}
                  <Image
                     src="/logo.svg"
                     alt="logo"
                     width={0}
                     height={0}
                     className="h-60 w-full text-[#1c4527]"
                  />
               </Link>
               {children}
            </div>
         </motion.main>
      </AnimatePresence>
   )
}

export default RouteTransition
