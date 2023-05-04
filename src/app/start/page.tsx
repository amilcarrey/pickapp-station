'use client'
import { useState } from 'react'
import { useTotem } from '@/useTotem'
import RouteTransition from '@elements/RouteTransition'
import Where from '@/modules/sections/where/WhereSection'
import What from '@/modules/sections/what/WhatSection'
import Login from '@/modules/sections/login/LoginSection'
import Deposit from '@/modules/sections/deposit/DepositSection'
import Size from '@/modules/sections/size/SizeSection'
import KeyWords from '@/modules/sections/keyword/KeywordSection'
import Open from '@/modules/sections/open/OpenSection'
import Thanks from '@/modules/sections/thanks/ThanksSection'
import Scan from '@/modules/sections/scan/ScanSection'
import Verification from '@/modules/sections/verification/VerificationSection'

const StartPage = () => {
   const totem = useTotem((s) => s.totem)

   const [keyWords, setKeyWords] = useState(false)
   return (
      <RouteTransition>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {!totem.owner ? <Where /> : null}
            {totem.owner ? <What /> : null}
            {/* {totem.owner ? <Login /> : null} */}
            {/* {totem.owner ? <Deposit /> : null} */}
            {/* {totem.owner ? <Size /> : null} */}
            {/* {totem.owner ? <KeyWords /> : null} */}
            {/* {totem.owner ? <Open /> : null} */}
            {/* {totem.owner ? <Thanks /> : null} */}
            {/* {totem.owner ? <Scan /> : null} */}
            {/* {totem.owner ? <Verification /> : null} */}
         </div>
      </RouteTransition>
   )
}

export default StartPage
