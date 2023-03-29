import React from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useTotem } from '@hooks/useTotem'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useUser } from '@/hooks/useUser'

interface PickUpAllModalProps {
   open: boolean
   setOpen: (open: boolean) => void
}
const PickUpAllModal = ({ open, setOpen }: PickUpAllModalProps) => {
   const router = useRouter()
   const user = useUser((s) => s.user)

   // const pickUpAll = useTotem((s) => s.pickUpAll)

   return (
      <Transition.Root show={open} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     enterTo="opacity-100 translate-y-0 sm:scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                     leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                     <Dialog.Panel className="relative  transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>
                           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                              <QuestionMarkCircleIcon
                                 className="h-24 w-24 text-[#ff9900]"
                                 aria-hidden="true"
                              />
                           </div>
                           <div className="text-center">
                              <Dialog.Title
                                 as="h3"
                                 className="mb-12 mt-6 text-lg font-medium leading-6 text-[#2d6a3b]"
                              >
                                 ¿Quieres retirar todos tus paquetes?
                              </Dialog.Title>
                              <p>Tienes {user?.packages.length} paquetes. Deseas retirarlos todos?</p>
                           </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                           <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#ff9900] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#2d6a3b] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                              onClick={() => router.push('/open')}
                           >
                              Si
                           </button>
                           <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                              onClick={() => router.push('/scan')}
                           >
                              No
                           </button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}

export default PickUpAllModal
