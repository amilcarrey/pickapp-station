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
            className="border-4 border-primary bg-white/60"
         >
            <div className="container mx-auto flex h-screen flex-col items-center justify-start">
               <Link
                  className="my-20 text-6xl font-bold text-primary"
                  href={'/'}
               >
                  <Image src="/logo.png" alt="logo" width={300} height={300} />
               </Link>
               {children}
            </div>
         </motion.main>
      </AnimatePresence>
   )
}

export default RouteTransition
