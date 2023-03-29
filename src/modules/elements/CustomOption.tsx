import Link from 'next/link'
import type { FunctionComponent } from 'react';
import React from 'react'

interface CustomOptionProps {
  title: string
  to: string
  subtitle?: string
  onClick?: () => void
}

const CustomOption : FunctionComponent<CustomOptionProps> = ({title, subtitle, to}) => {
  return (
    <Link
      className="w-full lg:w-3/4 flex flex-col gap-4 rounded-xl outline-2 outline-double outline-offset-1 outline-white/60 bg-white/20 p-4 text-white hover:bg-white/40 hover:text-[#2d6a3b] transition duration-30]"
      href={to}
    >
      <div className='flex gap-12 justify-between px-4'>
        <div className='flex flex-col gap-4 justify-between'>
          <h3 className="text-6xl font-bold">{title}</h3>
          <div className="text-lg">
            {subtitle}
          </div>
        </div>
        <div className='flex items-start'><span className="text-6xl font-bold">→</span></div>
      </div>
    </Link>
  )
}

export default CustomOption