'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
         >
            <div className="mx-auto flex h-screen max-h-screen flex-col items-center justify-start">
               <Link className="text-pick mt-12 text-6xl font-bold" href={'/'}>
                  <Image src="/logo.svg" alt="logo" width={600} height={600} />
               </Link>
               {children}
            </div>
         </motion.main>
      </AnimatePresence>
   )
}

export default RouteTransition
