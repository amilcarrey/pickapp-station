import React from 'react'

const BigOptionContainer = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="mt-8 grid grid-cols-2 place-content-stretch gap-8">
         {children}
      </div>
   )
}

export default BigOptionContainer
