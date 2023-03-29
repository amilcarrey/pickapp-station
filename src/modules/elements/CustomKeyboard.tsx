import type { Dispatch, FunctionComponent, SetStateAction} from 'react';
import { useState } from 'react';
import React from 'react'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'OK']
const deptos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A']


interface CustomKeyboardProps {
  numeric?: boolean
  setDoor?: Dispatch<SetStateAction<string | undefined>>
  setFloor: Dispatch<SetStateAction<number | undefined>>
}

const buttonClasses = 'p-4 flex justify-center items-center text-6xl text-white border rounded-xl bg-white/10 hover:bg-white/20'

const CustomKeyboard: FunctionComponent<CustomKeyboardProps> = ({ numeric, setDoor, setFloor }) => {
  const [abc, setAbc] = useState<number>(0)
  const numericUpdate = (e: number | string) => {
    const deleteLast = () => {
      setFloor((prev) => {
        if (prev === undefined) return
        const prevString = String(prev)
        if (prevString.length === 1) {
          return undefined
        } else {
          return Number(prevString.slice(0, prevString.length - 1))
        }
      })
    }
    const concatValue = (e: number) => {
      setFloor((prev) => {
        if (prev === undefined) {
          return Number(e)
        } else {
          return Number(String(prev) + String(e))
        }
      })
    }
    if (!numeric) return
    if (e === '<') return deleteLast()
    if (e === 'OK') return
    concatValue(e as number)

  }

  const dptoUpdate = (e: string) => {
    if(e==='>>') return setAbc((prev) => prev===2 ? 0 : prev + 1)
    if(e==='<<') return setAbc((prev) => prev===0 ? 3 : prev - 1)
    if(setDoor) setDoor(e as string)
  }
    const numericElements = numbers.map((number) => (
      <button key={number} onClick={() => numericUpdate(number)} className={buttonClasses}>{number}</button>
    ))
    const deptoElements = deptos.slice(abc*9, abc*9 + 9).concat(['<<','>>']).map((depto) => (
      <button key={depto} onClick={() => dptoUpdate(depto)} className={depto ==='>>'? 'col-end-4 ' + buttonClasses : buttonClasses}>{depto}</button>
    ))

    return (
      <>
        <div className='flex flex-col'>
          <div className='w-96 grid grid-cols-3 gap-4'>
            {numeric ?
              numericElements
              :
              deptoElements}
          </div>
        </div>
      </>
    )
  }

  export default CustomKeyboard