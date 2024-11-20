import { Outlet} from 'react-router-dom'

import Navigation from '@components/navigation/Navigation'
import Activities from '@components/activities/Activities'

import '@styles/main.scss'

function Root() {


  return (
    <>
        <Activities />
        <main className='core-content'>
          <Navigation />
          <Outlet />
        </main>
    </>
  )
}

export default Root
