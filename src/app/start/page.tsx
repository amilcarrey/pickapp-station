'use client'
import { useState } from 'react'
import PageTitle from '@elements/PageTitle'
import RouteTransition from '@elements/RouteTransition'
import Login from '@/modules/sections/login/LoginSection'
import CustomAction from '@elements/CustomAction'
import KeyWordsModal from '@elements/KeyWordsModal'
import { TruckDelivery, Home } from 'tabler-icons-react'
import BigOption from '@/modules/elements/options/BigOption'
import { useTotem } from '@/useTotem'
import Where from '@/modules/sections/where/WhereSection'
import What from '@/modules/sections/what/WhatSection'
import Deposit from '@/modules/sections/deposit/DepositSection'
import Size from '@/modules/sections/size/SizeSection'
import KeyWords from '@/modules/sections/keyword/KeywordSection'
import Open from '@/modules/sections/open/OpenSection'
import Thanks from '@/modules/sections/thanks/ThanksSection'
import Scan from '@/modules/sections/scan/ScanSection'

const StartPage = () => {
   const totem = useTotem((s) => s.totem)

   const [keyWords, setKeyWords] = useState(false)
   return (
      <RouteTransition>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {!totem.owner ? <Where /> : null}
            {/* {totem.owner ? <Login /> : null} */}
            {/* {totem.owner ? <What /> : null} */}
            {/* {totem.owner ? <Deposit /> : null} */}
            {/* {totem.owner ? <Size /> : null} */}
            {/* {totem.owner ? <KeyWords /> : null} */}
            {/* {totem.owner ? <Open /> : null} */}
            {/* {totem.owner ? <Thanks /> : null} */}
            {totem.owner ? <Scan /> : null}

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
