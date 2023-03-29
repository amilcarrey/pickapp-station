import type { Dispatch, FunctionComponent, SetStateAction } from 'react';
import React from 'react'

interface InputWithLabelProps {
  id: string
  label: string
  value: string | number | undefined
  type: string
  onFocus?: Dispatch<SetStateAction<boolean>>
}


const InputWithLabel: FunctionComponent<InputWithLabelProps> = ({ id, label, value, type, onFocus }) => {
  return (
    <div className='flex justify-between items-center'>
      <label htmlFor={id}>{label}</label>
      <input readOnly autoComplete="off" onFocus={() => onFocus? onFocus(type==='number') : null} value={value ?? ''} type={type} name={id} id={id} className='w-1/4 border rounded-xl bg-white/10 p-4 hover:bg-white/20 text-center' />
    </div>
  )
}

export default InputWithLabel