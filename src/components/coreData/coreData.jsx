import Graphics from '@components/graphics/Graphics'
import StatsList from '@components/statsList/StatsList'

import '@styles/layout/coreData.scss'


const CoreData  = () => {

  
  return(
    
    <section className="core-data">

      <h2 className="title">Les données</h2> 

      <Graphics/>

      <StatsList/>
    
    </section>

  )
}
export default CoreData