import {
   Dialog,
   DialogTrigger,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogDescription,
   DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ReactNode } from 'react'

const OwnerDepositDialog = ({
   title,
   description,
   content,
   yesAction,
   noAction,
   children,
}: {
   title: string
   description: string
   content: string
   yesAction: () => void
   noAction: () => void
   children: ReactNode
}) => {
   return (
      <Dialog>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
               <DialogTitle>{title}</DialogTitle>
               <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">{content}</div>
            <DialogFooter>
               <Button onClick={() => noAction()} variant={'outline'}>
                  No
               </Button>
               <Button onClick={() => yesAction()}>Si</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}

export default OwnerDepositDialog
