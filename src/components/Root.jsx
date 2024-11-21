import { Outlet} from 'react-router-dom'
import mockUser from '@datas/mock/mockUser12.json'

import Navigation from '@components/navigation/Navigation'
import Activities from '@components/activities/Activities'

import '@styles/main.scss'

function Root() {


  return (
    <>
        <Activities />
        <main className='core-content'>
          <Navigation />
          <Outlet context={{mockUser}} />
        </main>
    </>
  )
}

export default Root
