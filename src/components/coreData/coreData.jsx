import PropTypes from 'prop-types'

import Graphics from '@components/graphics/Graphics'
import StatsList from '@components/statsList/StatsList'

import '@styles/layout/coreData.scss'


const CoreData  = (props) => {

  const {userId} = props;

  
  return(
    
    <section className="core-data">

      <Graphics userId={userId}/>

      <StatsList userId={userId}/>
    
    </section>

  )
}

CoreData.propTypes = {
  userId: PropTypes.number.isRequired
}

export default CoreData