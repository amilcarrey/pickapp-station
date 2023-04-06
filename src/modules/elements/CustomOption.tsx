import Link from 'next/link'
import type { FunctionComponent } from 'react'
import React from 'react'

interface CustomOptionProps {
   title: string
   to: string
   subtitle?: string
   onClick?: () => void
}

const CustomOption: FunctionComponent<CustomOptionProps> = ({
   title,
   subtitle,
   to,
}) => {
   return (
      <Link
         className="duration-30] flex w-full flex-col gap-4 rounded-xl bg-secondary/20 p-4 text-secondary outline-double outline-2 outline-offset-1 outline-secondary/60 transition hover:bg-secondary/40 lg:w-3/4"
         href={to}
      >
         <div className="flex justify-between gap-12 px-4">
            <div className="flex flex-col justify-between gap-4">
               <h3 className="text-6xl font-bold">{title}</h3>
               <div className="text-lg">{subtitle}</div>
            </div>
            <div className="flex items-start">
               <span className="text-6xl font-bold">→</span>
            </div>
         </div>
      </Link>
   )
}

export default CustomOption
