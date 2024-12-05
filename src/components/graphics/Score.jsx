import { useState,useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import {PieChart, Pie, ResponsiveContainer} from 'recharts'

import '@styles/layout/graphics.scss'

const Score = () =>{

  const {mockDatas,userId} = useOutletContext();

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}`);

  const [dataSets,setDataSets] = useState([]);

  const [finalScore,setFinalScore] = useState(0);


let startingAngle = 90 ;


useEffect(() => { 

let getScore;

  if (isLoaded && dataFetched) {

     getScore = dataFetched?.todayScore || dataFetched?.score;

      setDataSets((dataSets) => {

        return [
          {
          "name": "Score",
          "value": getScore,
          "startingAngle":startingAngle,
          }
        ]

      })

    console.log('data flow : API');

  } else {

    const userLocalData = mockDatas?.USER_MAIN_DATA?.find((element) => element.id === userId)

    if(userLocalData) {

      getScore = userLocalData.todayScore || userLocalData.score;

      setDataSets((dataSets) => { 

        return [
          {
            "name": "Score",
            "value": getScore,
            "startingAngle":startingAngle,
          }
        ]

      })

    }

    

  }

 setFinalScore(getScore);

},[userId,isLoaded]);


  return ( 
  
    <div className="block score" data-score-error={finalScore ?? 'merde'}>

      {dataSets.length !== 0 ? (
        <>
        <h2 className='graph-title'>Score</h2>

        <ResponsiveContainer width="100%" height="100%">
        
            <PieChart width={900} height={900} fill="var(--white-color)">

              <Pie data={dataSets} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={90} cornerRadius={20}  fill="var(--timer-color)" startAngle={startingAngle} endAngle={(startingAngle + (finalScore * 360)).toFixed(0)}  />

            </PieChart>

        </ResponsiveContainer>

        <div className="final">
          {(finalScore * 100)} %
          <span className='baseline'>de votre objectif</span>
        </div> 

        </>) : (<Error />)
      }

    </div>

)  

}

export default Score