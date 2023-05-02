'use client'
import React, { useState } from 'react'
import { useTotem } from '@hooks/useTotem'
import { useUser } from '@hooks/useUser'
import { OperationType } from '@/types/TotemTypes'
import { useRouter } from 'next/navigation'
import PageTitle from '@/modules/elements/PageTitle'
import BigOption from '@/modules/elements/options/BigOption'
import {
   PackageSearchIcon,
   PackagePlusIcon,
   ArchiveRestoreIcon,
} from 'lucide-react'
import BigOptionContainer from '@/modules/elements/BigOptionContainer'

const What = () => {
   const user = useUser((s) => s.user)
   const setOperationType = useTotem((s) => s.setOperationtype)
   const router = useRouter()
   const [openModal, setOpenModal] = useState(false)
   const updateOperationType = (operation: OperationType) => {
      setOperationType(operation)
      if (operation !== OperationType.PICKUP) return
      if (!user) return router.push('verification')
      if (user.packages.length < 2) return router.push('open')
      return setOpenModal(true)
   }

   return (
      <>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <PageTitle title="Qué necesitas hacer?" accentWord="Qué" />
            <BigOptionContainer>
               <BigOption
                  onClick={() => updateOperationType(OperationType.DROP)}
                  title="Depositar"
                  IconProp={PackagePlusIcon}
               />
               <BigOption
                  onClick={() => updateOperationType(OperationType.PICKUP)}
                  title="Retirar"
                  IconProp={PackageSearchIcon}
               />
               {true && (
                  <BigOption
                     onClick={() => updateOperationType(OperationType.RETURN)}
                     title="Devolver"
                     IconProp={ArchiveRestoreIcon}
                     className="col-span-2"
                  />
               )}
               {/* <CustomAction
                  onClick={() => updateOperationType(OperationType.DROP)}
                  title="Depositar"
                  to={!user ? '/size' : '/deposit'}
               />
               <CustomAction
                  onClick={() => updateOperationType(OperationType.PICKUP)}
                  title="Retirar"
               />
               {user && (
                  <CustomAction
                     onClick={() => updateOperationType(OperationType.RETURN)}
                     title="Devolver"
                     to="/size"
                  />
               )} */}
            </BigOptionContainer>
         </div>
         {/* <PickUpAll open={openModal} setOpen={setOpenModal} /> */}
      </>
   )
}

export default What
