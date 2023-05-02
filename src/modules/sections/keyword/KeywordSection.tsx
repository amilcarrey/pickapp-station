'use client'
import { Button } from '@/components/ui/button'
import { useProperty } from '@/hooks/useProperty'
// import { useTotem } from '@/hooks/useTotem'
import PageTitle from '@/modules/elements/PageTitle'
import { log } from 'console'

const KeyWords = () => {
   // const setKeywordUsed = useTotem((s) => s.setKeywordUsed)
   const keywords = ['asado', 'futbol', 'mate'] //useProperty((s) => s.property)
   console.log(keywords)

   return (
      <>
         <PageTitle title="Palabras Clave" accentWord="Clave" />
         <div className="flex gap-6">
            {keywords?.map((word) => (
               <Button variant={'outline'}>{word.toUpperCase()}</Button>
            ))}
         </div>
      </>
   )
}

export default KeyWords
