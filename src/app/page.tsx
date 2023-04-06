'use client'
import { useRouter } from 'next/navigation'
import PageTitle from '@elements/PageTitle'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useUser } from '@hooks/useUser'
import { useLocation } from '@/hooks/useLocation'
import { useProperty } from '@/hooks/useProperty'
const Home = () => {
   const router = useRouter()
   const handleClick = () => {
      router.push('/start')
   }

   const resetUser = useUser((s) => s.reset)
   const getLocationDetails = useLocation((s) => s.getLocationDetails)
   const resetProperty = useProperty((s) => s.reset)

   useEffect(() => {
      resetUser()
      resetProperty()
      getLocationDetails()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 100, transition: { duration: 0.5 } }}
         exit={{ opacity: 0 }}
         transition={{
            type: 'ease',
            stiffness: 260,
            damping: 20,
         }}
         onClick={handleClick}
         className="tex-center flex h-screen w-screen cursor-pointer flex-col items-center justify-center bg-white"
      >
         <Image
            src="/logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="h-60 w-full text-secondary"
         />
         <PageTitle title="Presione para comenzar" accentWord="Presione" />
      </motion.main>
   )
}

export default Home
