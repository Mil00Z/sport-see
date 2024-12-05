import { Outlet} from 'react-router-dom'
import mockUser from '@datas/mock/mockUser12.json'
import mockDatas from '@datas/mock/mockDatas.js'

import Navigation from '@components/navigation/Navigation'
import Activities from '@components/activities/Activities'

import '@styles/main.scss'

function Root() {

  let fixedUserId = 18
  
  return (
    <>
        <Activities />
        <main className='core-content'>
          <Navigation />
          <Outlet context={{mockDatas,userId:fixedUserId}} />
        </main>
    </>
  )
}

export default Root
