'use client'
import React, { useState } from 'react'
import PageTitle from '@elements/PageTitle'
import RouteTransition from '@elements/RouteTransition'
import Login from '@elements/Login'
import CustomAction from '@elements/CustomAction'
import KeyWordsModal from '@elements/KeyWordsModal'

const Where = () => {
   const [isOwner, setIsOwner] = useState(false)
   const [keyWords, setKeyWords] = useState(false)
   return (
      <RouteTransition>
         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <PageTitle title="De dónde vienes?" accentWord="dónde" />
            <div className="flex w-full flex-col items-center justify-around gap-6">
               <CustomAction
                  onClick={() => setIsOwner(true)}
                  title="Propietario"
                  
               />
               <CustomAction onClick={() => setKeyWords(true)} title="Visita / Repartidor"  />
            </div>
         </div>
         <Login open={isOwner} setOpen={setIsOwner} />
         <KeyWordsModal open={keyWords} setOpen={setKeyWords} />
      </RouteTransition>
   )
}

export default Where
