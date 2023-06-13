'use client'
import { Button } from '@/components/ui/button'
import { useProperty } from '@/hooks/useProperty'
// import { useTotem } from '@/hooks/useTotem'
import PageTitle from '@/modules/elements/PageTitle'
import { SectionEnum } from '@/types'

const KeyWords = () => {
   // const setKeywordUsed = useTotem((s) => s.setKeywordUsed)
   const keywords = ['asado', 'futbol', 'mate'] //useProperty((s) => s.property)

   return (
      <>
         <PageTitle
            key={SectionEnum.Keyword}
            title="Palabras Clave"
            accentWord="Clave"
         />
         <div className="flex gap-6">
            {keywords?.map((word, i) => (
               <Button key={`${word}${i}`} variant={'outline'}>
                  {word.toUpperCase()}
               </Button>
            ))}
         </div>
      </>
   )
}

export default KeyWords
