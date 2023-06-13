'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
// import CustomKeyboard from '@ui/CustomKeyboard'
import { useProperty } from '@/hooks/useProperty'
import { formatKeys } from '@/utils'
import useApi from '@/hooks/useApi'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import PageTitle from '../../elements/PageTitle'
import PropertyDetails from './elements/PropertyDetails'
import Letterpad from '@/modules/elements/keyboard/Letterpad'
import Numpad from '@/modules/elements/keyboard/Numpad'
import { SectionEnum } from '@/types'
// import Numpad from './login/elements/Numpad'

const Deposit = () => {
   const [floor, setFloor] = useState<number>()
   const [door, setDoor] = useState<string>()
   const [numeric, setNumeric] = useState<boolean>(true)

   const propertyDetails = useProperty((s) => s.property)
   const { getProperyDetails } = useApi()

   useEffect(() => {
      async function fetchData() {
         if (!floor || !door) return
         try {
            const keys = [formatKeys('floor', floor), formatKeys('door', door)]
            await getProperyDetails(keys)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [floor, door])

   // This function return Letterpad component if the user is typing the door and Numpad if the user is typing the floor
   const renderKeyboard = () => {
      if (numeric) {
         return <Numpad setNumber={setFloor} nextFocus={null} />
      } else {
         return <Letterpad setValue={setDoor} nextFocus={null} />
      }
   }

   return (
      <>
         <PageTitle
            key={SectionEnum.Deposit}
            title="A qué propiedad?"
            accentWord="qué"
         />
         <div className="my-24 flex flex-col items-center justify-between">
            <div className="mb-16 flex flex-col items-center justify-center gap-10">
               <Input
                  readOnly
                  autoComplete="off"
                  id="floor"
                  placeholder="Piso"
                  value={floor}
                  type="number"
                  onFocus={() => setNumeric(true)}
                  onChange={(e) => {
                     setFloor(Number(e.target.value))
                  }}
               />
               <Input
                  readOnly
                  autoComplete="off"
                  id="door"
                  placeholder="Departamento"
                  value={door}
                  type="text"
                  onFocus={() => setNumeric(false)}
                  onChange={(e) => {
                     setDoor(e.target.value)
                  }}
               />
            </div>
            {renderKeyboard()}
            {/* <CustomKeyboard
               numeric={numeric}
               setFloor={setFloor}
               setDoor={setDoor}
            /> */}
         </div>

         {propertyDetails && floor && door ? (
            <PropertyDetails owner={propertyDetails.mainOwner} />
         ) : null}
      </>
   )
}

export default Deposit
