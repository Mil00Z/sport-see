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


useEffect(() => { 

  if (finalScore) {

    setDataLife(dataLife=>!dataLife);

    setDataSets([
      {
        "name": "Full",
        "value": (1 - finalScore) * 100
      },
      {
        "name": "Score",
        "value": (finalScore) * 100 
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
        <ResponsiveContainer width="100%" height="100%">
        
            <PieChart width={900} height={900}>
              <Pie data={dataSets} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="var(--data-color)"/>

              <Tooltip />
              
            </PieChart>

        </ResponsiveContainer>

        <div className="final">
        {finalScore * 100}%
        <span className='baseline'>de votre objectif</span>
        </div> 

        </>) : (<Error dataLife={dataLife} />)
      }

    </div>

)  

}

export default Score