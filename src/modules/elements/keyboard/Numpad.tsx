import { Dispatch, Ref, RefObject, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'

interface NumPadProps {
   setNumber: Dispatch<SetStateAction<number | undefined>>
   nextFocus: RefObject<HTMLInputElement> | null
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'BORRAR', 0, 'OK']

const Numpad = ({ setNumber, nextFocus = null }: NumPadProps) => {
   const deleteLast = (
      setValue: Dispatch<SetStateAction<number | undefined>>
   ) => {
      setValue((prev) => {
         if (prev === undefined) return
         const prevString = String(prev)
         if (prevString.length === 1) {
            return undefined
         } else {
            return Number(prevString.slice(0, prevString.length - 1))
         }
      })
   }

   const concatValue = (
      setValue: Dispatch<SetStateAction<number | undefined>>,
      e: number
   ) => {
      setValue((prev) => {
         if (prev === undefined) {
            return Number(e)
         } else {
            return Number(String(prev) + String(e))
         }
      })
   }

   const numericUpdate = (e: number | string) => {
      if (e === '<') return deleteLast(setNumber)
      if (e === 'OK') {
         if (!nextFocus) return
         return nextFocus.current && nextFocus.current.focus()
      }

      concatValue(setNumber, e as number)
   }
   return (
      <div id="keyboard" className="grid w-3/4 grid-cols-3 gap-2">
         {numbers.map((number, index) => (
            <Button
               onClick={() => numericUpdate(number)}
               key={index}
               variant={
                  number === 'OK'
                     ? 'default'
                     : number === 'BORRAR'
                     ? 'destructive'
                     : 'outline'
               }
            >
               {number}
            </Button>
         ))}
      </div>
   )
}

export default Numpad
