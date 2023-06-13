import { useTotem } from '@/useTotem'
import { Home, TruckDelivery } from 'tabler-icons-react'
import BigOption from '../../elements/options/BigOption'
import PageTitle from '../../elements/PageTitle'
import { useSection } from '@hooks/useSection'
import { SectionEnum } from '@/types'

const Where = () => {
   const setOwner = useTotem((s) => s.setOwner)
   const setSection = useSection((s) => s.setSection)
   const handleClick = (owner: boolean) => {
      setOwner(owner)
      setSection(SectionEnum.What)
   }
   return (
      <>
         <PageTitle
            key={SectionEnum.Where}
            title="Seleccione tipo de usuario"
            accentWord="Seleccione"
         />
         <div className="mt-8 grid grid-cols-2 place-content-stretch gap-8">
            <BigOption
               onClick={() => handleClick(true)}
               title="Propietario"
               IconProp={Home}
            />
            <BigOption
               onClick={() => handleClick(false)}
               title="Visita  Repartidor"
               IconProp={TruckDelivery}
            />
         </div>
      </>
   )
}

export default Where
