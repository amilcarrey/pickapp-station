import { SectionEnum } from '@/types'
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
import Return from '@/modules/sections/return/ReturnSection'
import { useSection } from '@/hooks/useSection'
import NoKeywordSection from './noKeyword/NoKeywordSection'

const SectionController = () => {
   const actualSection = useSection((state) => state.section)

   return (
      <>
         {actualSection === SectionEnum.Where ? <Where /> : null}
         {actualSection === SectionEnum.What ? <What /> : null}
         {actualSection === SectionEnum.Login ? <Login /> : null}
         {actualSection === SectionEnum.Deposit ? <Deposit /> : null}
         {actualSection === SectionEnum.Size ? <Size /> : null}
         {actualSection === SectionEnum.Keyword ? <KeyWords /> : null}
         {actualSection === SectionEnum.Open ? <Open /> : null}
         {actualSection === SectionEnum.Thanks ? <Thanks /> : null}
         {actualSection === SectionEnum.Scan ? <Scan /> : null}
         {actualSection === SectionEnum.Verification ? <Verification /> : null}
         {actualSection === SectionEnum.Return ? <Return /> : null}
         {actualSection === SectionEnum.NoKeyword ? <NoKeywordSection /> : null}
      </>
   )
}

export default SectionController
