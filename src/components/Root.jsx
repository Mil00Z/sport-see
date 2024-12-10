import { Outlet} from 'react-router-dom'
import PropsTypes from 'prop-types'

import mockDatas from '@datas/mock/mockDatas.js'

import Navigation from '@components/navigation/Navigation'
import Activities from '@components/activities/Activities'

import '@styles/main.scss'

function Root() {

 

  return (
    <>
        <Activities />
        <main className='core-content'>
          <Navigation />
          <Outlet context={{mockDatas}} />
        </main>
    </>
  )
}

Outlet.propTypes = {
  context: PropsTypes.shape({ 
    mockDatas: PropsTypes.object.isRequired
  }).isRequired
};

export default Root


