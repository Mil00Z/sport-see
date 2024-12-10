import PropTypes from 'prop-types'

import Daily from '@components/graphics/Daily'
import Average from '@components/graphics/Average'
import Performance from '@components/graphics/Performance'
import Score from '@components/graphics/Score'



const Graphics = (props) =>{

  const {userId} = props;

  return (
    <>
      <div className="panel graphics">
          <Daily userId={userId} />
          <Average userId={userId} />
          <Performance userId={userId} />
          <Score userId={userId} />
      </div>
    </>
  )

}

Graphics.PropTypes = {
  userId: PropTypes.number.isRequired
}

export default Graphics