import type { Dispatch, FC, SetStateAction } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface GrabCodeProps {
   open: boolean
   setOpen: Dispatch<SetStateAction<boolean>>
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'OK']

const GrabCode: FC<GrabCodeProps> = ({ open, setOpen }) => {
   const cuiInputnRef = useRef<HTMLInputElement>(null)
   const claveInputRef = useRef<HTMLInputElement>(null)
   const router = useRouter()

   const [code, setCode] = useState<number>()

   const numericUpdate = (e: number | string) => {
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
      if (e === '<') return deleteLast(setCode)
      if (e === 'OK') {
         return claveInputRef.current && claveInputRef.current.focus()
      }

      concatValue(setCode, e as number)
   }

   return (
      <Transition.Root show={open} as={Fragment}>
         <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cuiInputnRef}
            onClose={setOpen}
         >
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
                              <UserIcon
                                 className="h-6 w-6 text-[#ff9900]"
                                 aria-hidden="true"
                              />
                           </div>
                           <div className="text-center">
                              <Dialog.Title
                                 as="h3"
                                 className="text-lg font-medium leading-6 text-[#2d6a3b]"
                              >
                                 Ingresar
                              </Dialog.Title>
                              <div className="mt-2 flex items-center justify-center gap-4">
                                 <div className="mt-2 flex h-full flex-col gap-4">
                                    <div className="flex justify-between gap-4">
                                       {/* <label htmlFor="clave">Clave</label> */}
                                       <input
                                          readOnly
                                          autoComplete="off"
                                          ref={claveInputRef}
                                          value={code}
                                          type="password"
                                          name="clave"
                                          placeholder="Código"
                                          className="rounded-xl border-2  border-black/25 px-4 py-1"
                                       />
                                    </div>
                                 </div>

                                 <div
                                    id="keyboard"
                                    className="grid w-full grid-cols-3 gap-2"
                                 >
                                    {numbers.map((number, index) => (
                                       <button
                                          onClick={() => numericUpdate(number)}
                                          key={index}
                                          className="rounded-xl border-2  border-black/25 px-4 py-1"
                                       >
                                          {number}
                                       </button>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                           <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#ff9900] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#2d6a3b] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                              onClick={() => router.push('/open')}
                           >
                              Retirar
                           </button>
                           <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                              onClick={() => setOpen(false)}
                           >
                              Cancel
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

export default GrabCode
