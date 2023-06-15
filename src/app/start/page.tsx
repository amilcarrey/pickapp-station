'use client'
import { useState } from 'react'
import { useTotem } from '@hooks/useTotem'
import RouteTransition from '@elements/RouteTransition'
import SectionController from '@/modules/sections/section-controller'

const StartPage = () => {
   return (
      <RouteTransition>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <SectionController />
         </div>
      </RouteTransition>
   )
}

export default StartPage
// {
//    !totem.owner ? <Where /> : null
// }
// {
//    totem.owner ? <What /> : null
// }
// {
//    /* {totem.owner ? <Login /> : null} */
// }
// {
//    /* {totem.owner ? <Deposit /> : null} */
// }
// {
//    /* {totem.owner ? <Size /> : null} */
// }
// {
//    /* {totem.owner ? <KeyWords /> : null} */
// }
// {
//    /* {totem.owner ? <Open /> : null} */
// }
// {
//    /* {totem.owner ? <Thanks /> : null} */
// }
// {
//    /* {totem.owner ? <Scan /> : null} */
// }
// {
//    totem.owner ? <Verification /> : null
// }
