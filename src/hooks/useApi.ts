import { PropertyDetails } from "@/types/PropertyTypes"
import { PackageStatus } from "@/types/UserTypes"
import { useProperty } from "./useProperty"
import { useUser } from "./useUser"

const users = [
   {
      ciu: 123,
      fullName: 'Juan Perez',
      packages: [
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'S',
            door: '1',
            status: PackageStatus.PENDING
         },
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'M',
            door: '1',
            status: PackageStatus.PENDING
         },
      ]
   },
   {
      ciu: 456,
      fullName: 'Juan Perez',
      packages: [
         {
            id: '1',
            deliveryDate: Date.now(),
            size: 'S',
            door: '1',
            status: PackageStatus.PENDING
         }
      ]
   }
]

export default function useApi() {
   const setUser = useUser(state => state.setUser)
   const setPropertyDetails = useProperty(state => state.setProperty)
   
   const getUser = async (ciu: number, password: number) => {
      return Promise.resolve(setUser(users.filter(user => user.ciu === ciu)[0]))
   }

   const getProperyDetails = async (keys: PropertyKey[]) => {
      
      const result = await Promise.resolve({
         mainOwner: 'Juan Perez',
         ciu: 123,
         keywords: ['OSO', 'PERRO', 'CARRO']
      } as PropertyDetails)
      setPropertyDetails(result)
   }

   return { getUser, getProperyDetails }
}