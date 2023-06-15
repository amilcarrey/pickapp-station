'use client'
import { Button } from '@/components/ui/button'
import { useProperty } from '@/hooks/useProperty'
import { useSection } from '@/hooks/useSection'
import { useTotem } from '@/hooks/useTotem'
import PageTitle from '@/modules/elements/PageTitle'
import { SectionEnum } from '@/types'

const KeyWords = () => {
   const setKeywordUsed = useTotem((s) => s.setKeywordUsed)
   const keywords = useProperty((s) => s.property?.keywords)
   const setSection = useSection((s) => s.setSection)
   return (
      <>
         <PageTitle
            key={SectionEnum.Keyword}
            title="Palabras Clave"
            accentWord="Clave"
         />
         <h2 className="text-xl text-primary">
            Selecciona la palabra clave que necesitas
         </h2>
         <div className="flex gap-6">
            {keywords?.map((word, i) => (
               <Button
                  onClick={() => {
                     setKeywordUsed(word)
                     return setSection(SectionEnum.Thanks)
                  }}
                  key={`${word}${i}`}
                  variant={'outline'}
               >
                  {word.toUpperCase()}
               </Button>
            ))}
         </div>
      </>
   )
}

export default KeyWords
