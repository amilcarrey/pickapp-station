import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { useUser } from '@hooks/useUser'
import Numpad from '../../elements/keyboard/Numpad'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SectionEnum } from '@/types'
import { useSection } from '@/hooks/useSection'

const Login = () => {
   const cuiInputnRef = useRef<HTMLInputElement>(null)
   const claveInputRef = useRef<HTMLInputElement>(null)
   const setSection = useSection((s) => s.setSection)

   const [cui, setCui] = useState<number>()
   const [clave, setClave] = useState<number>()
   const [claveSelected, setClaveSelected] = useState(false)

   const user = useUser((s) => s.user)
   const loginUser = useUser((s) => s.login)
   const loadingUser = useUser((s) => s.loading)
   const errorUser = useUser((s) => s.loginError)

   const handleLogin = async () => {
      if (!cui || !clave) return
      await loginUser(cui, clave)
   }

   useEffect(() => {
      if (user) {
         setSection(SectionEnum.What)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user])

   return (
      <>
         <div key={SectionEnum.Login} className="text-center">
            <div className="mt-2 flex flex-col items-center justify-center gap-4">
               <div className="my-24 flex flex-col items-center justify-between">
                  <div className="mb-16  flex flex-col items-center justify-center gap-10">
                     {/* <label htmlFor="ciu">CIU</label> */}
                     <Input
                        readOnly
                        autoComplete="off"
                        ref={cuiInputnRef}
                        onFocus={() => setClaveSelected(false)}
                        defaultValue={cui}
                        type="text"
                        name="ciu"
                        placeholder="CIU"
                     />
                     <Input
                        readOnly
                        autoComplete="off"
                        ref={claveInputRef}
                        onFocus={() => setClaveSelected(true)}
                        defaultValue={clave}
                        type="password"
                        name="clave"
                        placeholder="Clave"
                     />

                     <p
                        className={`text-red-600 dark:text-red-400 ${
                           errorUser ? '' : 'hidden'
                        } `}
                     >
                        Credenciales incorrectas
                     </p>
                  </div>
                  <Numpad
                     setNumber={claveSelected ? setClave : setCui}
                     nextFocus={!claveSelected ? claveInputRef : null}
                     okAction={handleLogin}
                  />
               </div>
            </div>
         </div>

         <div className="flex w-1/4 flex-col gap-6">
            <Button variant={'secondary'}>Cancelar</Button>
            <Button
               onClick={handleLogin}
               disabled={cui === undefined || clave === undefined}
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
            </Button>
         </div>
      </>
   )
}

export default Login
