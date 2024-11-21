import {useOutletContext} from 'react-router-dom'

import '@styles/layout/graphics.scss'

const Score = () =>{

const {mockUser}= useOutletContext();

const {todayScore} = mockUser[0];


  return ( 
  
    <div className="block score">

      <div className="final">
            {todayScore * 100}%
      </div>
  
    </div>
  
)  


}

export default Score