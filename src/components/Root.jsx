import { Outlet} from 'react-router-dom'
import mockDatas from '@datas/mock/mockDatas.js'
import PropsTypes from 'prop-types'

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

Outlet.propTypes = {
  context: PropsTypes.shape({ 
    mockDatas: PropsTypes.object.isRequired,
    userId: PropsTypes.number.isRequired
  }).isRequired
};

export default Root


