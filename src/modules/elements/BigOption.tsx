import { Icon } from 'tabler-icons-react'
import { Button } from '@/components/ui/button'

interface BigOptionProps {
   title: string
   IconProp: Icon
   onClick?: () => void
}
const BigOption = ({ title, IconProp, onClick }: BigOptionProps) => {
   return (
      <Button variant={'outline'} onClick={onClick} className="h-full">
         <div className="flex w-full flex-col items-center justify-between gap-4 px-4 py-24">
            <IconProp className="h-32 w-full" />
            <p className="text-6xl">{title}</p>
         </div>
      </Button>
   )
}

export default BigOption
