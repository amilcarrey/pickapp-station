import { Icon } from 'tabler-icons-react'

interface BigOptionProps {
   title: string
   IconProp: Icon
   onClick?: () => void
}
const BigOption = ({ title, IconProp, onClick }: BigOptionProps) => {
   return (
      <div onClick={onClick}>
         <div className="duration-30 flex w-full flex-col items-center justify-center justify-between gap-4 rounded-xl bg-secondary/20 px-4 py-24 text-secondary outline-double outline-2 outline-offset-1 outline-secondary/60 transition hover:bg-secondary/40">
            <IconProp className="h-32 w-full" />
            <p className="text-6xl">{title}</p>
         </div>
      </div>
   )
}

export default BigOption
