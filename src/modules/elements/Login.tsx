import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { useUser } from '@hooks/useUser'
import useApi from '@/hooks/useApi'

interface LoginProps {
   open: boolean
   setOpen: Dispatch<SetStateAction<boolean>>
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 0, 'OK']

const Login: FC<LoginProps> = ({ open, setOpen }) => {
   const cuiInputnRef = useRef<HTMLInputElement>(null)
   const claveInputRef = useRef<HTMLInputElement>(null)
   const router = useRouter()

   const [cui, setCui] = useState<number>()
   const [clave, setClave] = useState<number>()
   const [claveSelected, setClaveSelected] = useState(false)
   const [accessEnabled, setaccessEnabled] = useState(false)

   const user = useUser((s) => s.user)
   const { getUser } = useApi()
   const loadingUser = useUser((s) => s.loading)

   const handleLogin = async () => {
      if (!cui || !clave) return
      await getUser(cui, clave)
   }

   useEffect(() => {
      if (user) {
         setOpen(false)
         console.log(user)
         router.push('/what')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user])

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
      if (e === '<') return deleteLast(claveSelected ? setClave : setCui)
      if (e === 'OK') {
         return claveInputRef.current && claveInputRef.current.focus()
      }

      concatValue(claveSelected ? setClave : setCui, e as number)
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
               <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
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
                     <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                              <div className="mt-2 flex flex-col items-center justify-center gap-4">
                                 <div className="mt-2 flex h-full flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                       {/* <label htmlFor="ciu">CIU</label> */}
                                       <input
                                          readOnly
                                          autoComplete="off"
                                          ref={cuiInputnRef}
                                          onFocus={() =>
                                             setClaveSelected(false)
                                          }
                                          defaultValue={cui}
                                          type="text"
                                          name="ciu"
                                          placeholder="CIU"
                                          className="rounded-xl border-2  border-black/25 px-4 py-1"
                                       />
                                    </div>
                                    <div className="flex justify-between gap-4">
                                       {/* <label htmlFor="clave">{user?.fullName}</label> */}
                                       <input
                                          readOnly
                                          autoComplete="off"
                                          ref={claveInputRef}
                                          onFocus={() => setClaveSelected(true)}
                                          defaultValue={clave}
                                          type="password"
                                          name="clave"
                                          placeholder="Clave"
                                          className="rounded-xl border-2  border-black/25 px-4 py-1"
                                       />
                                    </div>
                                 </div>

                                 <div
                                    id="keyboard"
                                    className="grid w-3/4 grid-cols-3 gap-2"
                                 >
                                    {numbers.map((number, index) => (
                                       <button
                                          onClick={() => numericUpdate(number)}
                                          key={index}
                                          className="rounded-2xl border-2  border-black/25 px-3 py-3"
                                       >
                                          {number}
                                       </button>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="mx-auto mt-5 w-3/4 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                           <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#ff9900] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#2d6a3b] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-[#ff9900]/70 sm:col-start-2 sm:text-sm"
                              onClick={handleLogin}
                              disabled={
                                 cui === undefined || clave === undefined
                              }
                           >
                              {loadingUser ? (
                                 <svg
                                    aria-hidden="true"
                                    className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                       fill="currentColor"
                                    />
                                    <path
                                       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                       fill="currentFill"
                                    />
                                 </svg>
                              ) : (
                                 'Ingresar'
                              )}
                           </button>
                           <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                              onClick={() => setOpen(false)}
                           >
                              Cancelar
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

export default Login
