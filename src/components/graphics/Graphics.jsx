import { useState } from 'react'

import Daily from '@components/graphics/Daily'
import Average from '@components/graphics/Average'
import Performance from '@components/graphics/Performance'
import Score from '@components/graphics/Score'



const Graphics = () =>{


return (
  <>
    <div className="panel graphics">
        <Daily/>
        <Average/>
        <Performance />
        <Score/>
    </div>
  </>

)

}
export default Graphics