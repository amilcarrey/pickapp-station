import { Button } from '@/components/ui/button'
import { Dispatch, RefObject, SetStateAction } from 'react'

interface LetterpadProps {
   setValue: Dispatch<SetStateAction<string | undefined>>
   nextFocus: RefObject<HTMLInputElement> | null
}

// const letters = [
//    'A',
//    'B',
//    'C',
//    'D',
//    'E',
//    'F',
//    'G',
//    'H',
//    'I',
//    'J',
//    'K',
//    'L',
//    'M',
//    'N',
//    'O',
//    'P',
//    'Q',
//    'R',
//    'S',
//    'T',
//    'U',
//    'V',
//    'W',
//    'X',
//    'Y',
//    'Z',
//    'A',
// ]
const letters = [
   'Q',
   'W',
   'E',
   'R',
   'T',
   'Y',
   'U',
   'I',
   'O',
   'P',

   'A',
   'S',
   'D',
   'F',
   'G',
   'H',
   'J',
   'K',
   'L',

   'Z',
   'X',
   'C',
   'V',
   'B',
   'N',
   'M',
   'BORRAR',
   'OK',
]

const Letterpad = ({ setValue, nextFocus }: LetterpadProps) => {
   const deleteLast = (
      setValue: Dispatch<SetStateAction<string | undefined>>
   ) => {
      setValue((prev) => {
         if (prev === undefined) return
         const prevString = String(prev)
         if (prevString.length === 1) {
            return undefined
         } else {
            return String(prevString.slice(0, prevString.length - 1))
         }
      })
   }

   const concatValue = (
      setValue: Dispatch<SetStateAction<string | undefined>>,
      e: string
   ) => {
      setValue((prev) => {
         if (prev === undefined) {
            return String(e)
         } else {
            return String(prev) + String(e)
         }
      })
   }

   const letterUpdate = (e: string) => {
      if (e === 'BORRAR') return deleteLast(setValue)
      if (e === 'OK') {
         if (!nextFocus) return
         return nextFocus.current && nextFocus.current.focus()
      }

      concatValue(setValue, e as string)
   }
   return (
      <div id="keyboard" className="grid w-full grid-cols-10 gap-2">
         {letters.map((letter, index) => (
            <Button
               onClick={() => letterUpdate(letter)}
               key={index}
               className={
                  letter === 'OK' || letter === 'BORRAR' ? 'col-span-2' : ''
               }
               variant={
                  letter === 'OK'
                     ? 'default'
                     : letter === 'BORRAR'
                     ? 'destructive'
                     : 'outline'
               }
            >
               {letter}
            </Button>
         ))}
      </div>
   )
}

export default Letterpad
