'use client'
import { useState } from 'react'
import PageTitle from '@elements/PageTitle'
import RouteTransition from '@elements/RouteTransition'
import Login from '@elements/Login'
import CustomAction from '@elements/CustomAction'
import KeyWordsModal from '@elements/KeyWordsModal'
import { TruckDelivery, Home } from 'tabler-icons-react'
import BigOption from '@/modules/elements/BigOption'
import { useTotem } from '@/useTotem'
import Where from '@/modules/sections/Where'

const StartPage = () => {
   const totem = useTotem((s) => s.totem)

   const [isOwner, setIsOwner] = useState(false)
   const [keyWords, setKeyWords] = useState(false)
   return (
      <RouteTransition>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {!totem.owner ? <Where /> : null}
            {totem.owner ? <Login /> : null}
            {/* <CustomAction
                  onClick={() => setIsOwner(true)}
                  title="Propietario"
               /> */}
            {/* <CustomAction onClick={() => setKeyWords(true)} title="Visita / Repartidor"  /> */}
         </div>
         {/* <Login open={isOwner} setOpen={setIsOwner} /> */}
         <KeyWordsModal open={keyWords} setOpen={setKeyWords} />
      </RouteTransition>
   )
}

export default StartPage
