import { useState,useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'

import Error from '@components/error/Error';

import {PieChart, Pie, Cell,Tooltip, ResponsiveContainer} from 'recharts'

import '@styles/layout/graphics.scss'

const Score = () =>{

  const {mockUser}= useOutletContext();

  const [dataLife,setDataLife] = useState(false);

  const [dataSets,setDataSets] = useState([]);


const finalScore = mockUser[0]?.todayScore || mockUser[0]?.score;


let startingAngle = 90 ;


useEffect(() => { 

  if (finalScore) {

    setDataLife(!dataLife);

    setDataSets([
      {
        "name": "Score",
        "value": finalScore,
        "startingAngle":startingAngle 
      }
    ])

  } else {

    console.error('No data available to display');

  }

},[finalScore]);


  return ( 
  
    <div className="block score">

      {finalScore ? (
        <>
        <h2 className='graph-title'>Score</h2>

        <ResponsiveContainer width="100%" height="100%">
        
            <PieChart width={900} height={900} fill="var(--white-color)">

              <Pie data={dataSets} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} cornerRadius={20}  fill="var(--timer-color)" startAngle={startingAngle} endAngle={(startingAngle + (finalScore * 360)).toFixed(0)}  />

            </PieChart>

        </ResponsiveContainer>

        <div className="final">
          {(finalScore * 100)}%
          <span className='baseline'>de votre objectif</span>
        </div> 

        </>) : (<Error dataLife={dataLife} />)
      }

    </div>

)  

}

export default Score