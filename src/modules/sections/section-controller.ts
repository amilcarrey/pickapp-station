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
import { useMemo } from 'react'

const sectionDictionary = {
   [SectionEnum.Where]: Where,
   [SectionEnum.What]: What,
   [SectionEnum.Login]: Login,
   [SectionEnum.Deposit]: Deposit,
   [SectionEnum.Size]: Size,
   [SectionEnum.Keyword]: KeyWords,
   [SectionEnum.Open]: Open,
   [SectionEnum.Thanks]: Thanks,
   [SectionEnum.Scan]: Scan,
   [SectionEnum.Verification]: Verification,
   [SectionEnum.Return]: Return
}

const SectionController = () => {
   const actualSection = useSection(state => state.section)
   const reactiveSection = useMemo(() => {
      return sectionDictionary[actualSection]
   }, [actualSection])

   return reactiveSection()
}

export default SectionController