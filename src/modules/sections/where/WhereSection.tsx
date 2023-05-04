import { useTotem } from '@/useTotem'
import { Home, TruckDelivery } from 'tabler-icons-react'
import BigOption from '../../elements/options/BigOption'
import PageTitle from '../../elements/PageTitle'

const Where = () => {
   const setOwner = useTotem((s) => s.setOwner)
   return (
      <>
         <PageTitle
            title="Seleccione tipo de usuario"
            accentWord="Seleccione"
         />
         <div className="mt-8 grid grid-cols-2 place-content-stretch gap-8">
            <BigOption
               onClick={() => setOwner(true)}
               title="Propietario"
               IconProp={Home}
            />
            <BigOption
               onClick={() => setOwner(false)}
               title="Visita  Repartidor"
               IconProp={TruckDelivery}
            />
         </div>
      </>
   )
}

export default Where
