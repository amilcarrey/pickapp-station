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
import { SectionEnum } from '@/types'
import BigOptionContainer from '@/modules/elements/options/BigOptionContainer'
import { useSection } from '@/hooks/useSection'

const What = () => {
   const ownerLogged = useUser((s) => s.user)
   const setOperationType = useTotem((s) => s.setOperationtype)
   const setSection = useSection((s) => s.setSection)
   // const [openModal, setOpenModal] = useState(false)
   const updateOperationType = (operation: OperationType) => {
      setOperationType(operation)
      if (operation === OperationType.RETURN)
         return setSection(SectionEnum.Return)

      if (operation === OperationType.DROP && !ownerLogged)
         return setSection(SectionEnum.Verification)

      if (operation === OperationType.DROP && ownerLogged)
         return setSection(SectionEnum.Size)

      if (operation === OperationType.PICKUP && !ownerLogged)
         return setSection(SectionEnum.Scan)

      if (
         operation === OperationType.PICKUP &&
         ownerLogged &&
         ownerLogged.packages.length < 2
      )
         return setSection(SectionEnum.Open)
      // return setOpenModal(true)
   }

   return (
      <>
         <div
            key={SectionEnum.What}
            className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "
         >
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
               {ownerLogged && (
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
      </>
   )
}

export default What
