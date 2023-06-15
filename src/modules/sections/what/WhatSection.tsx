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
import OwnerDepositDialog from './OwnerDepositDialog'

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
         return setSection(SectionEnum.Deposit)

      if (operation === OperationType.DROP && ownerLogged)
         return setSection(SectionEnum.Size)

      if (operation === OperationType.PICKUP && !ownerLogged)
         return setSection(SectionEnum.Scan)

      if (
         operation === OperationType.PICKUP &&
         ownerLogged &&
         ownerLogged.packages.length === 1 &&
         ownerLogged.packages.length > 0
      )
         return setSection(SectionEnum.Open)
      if (
         operation === OperationType.PICKUP &&
         ownerLogged &&
         ownerLogged.packages.length > 1
      )
         return setSection(SectionEnum.Scan)

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
               {ownerLogged ? (
                  <OwnerDepositDialog
                     title="Depositar"
                     description=""
                     content="¿Querés depositar algo para vos mismo?"
                     yesAction={() => setSection(SectionEnum.Size)}
                     noAction={() => setSection(SectionEnum.Deposit)}
                  >
                     <BigOption
                        onClick={() => {}}
                        title="Depositar"
                        IconProp={PackagePlusIcon}
                     />
                  </OwnerDepositDialog>
               ) : (
                  <BigOption
                     onClick={() => {
                        updateOperationType(OperationType.DROP)
                     }}
                     title="Depositar"
                     IconProp={PackagePlusIcon}
                  />
               )}
               {ownerLogged && ownerLogged.packages.length > 1 ? (
                  <OwnerDepositDialog
                     title="Retirar paquetes"
                     description="Tiene mas de un paquete por retirar."
                     content="Deseas retirar todos los paquetes?"
                     yesAction={() => {
                        setOperationType(OperationType.PICKUP)
                        setSection(SectionEnum.Open)
                     }}
                     noAction={() => {
                        setOperationType(OperationType.PICKUP)
                        setSection(SectionEnum.Scan)
                     }}
                  >
                     <BigOption
                        onClick={() => {}}
                        title="Retirar"
                        IconProp={PackageSearchIcon}
                     />
                  </OwnerDepositDialog>
               ) : (
                  <BigOption
                     onClick={() => updateOperationType(OperationType.PICKUP)}
                     title="Retirar"
                     IconProp={PackageSearchIcon}
                  />
               )}
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
