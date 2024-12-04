import { useState,useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer } from 'recharts';

import '@styles/layout/graphics.scss'


const Performance = () => {


  const {mockDatas,userId} = useOutletContext()

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}/performance`)

  const [dataSets,setDataSets] = useState([]);


  useEffect(() => { 

    if (isLoaded && dataFetched) {

      setDataSets((dataSets) => {

        return dataFetched.data.data.map((item) => {
  
          return {
            "subject": dataFetched.data.kind[item.kind],
            "value": item.value,
            "fullMark":300
          }
    
        })

      });

      console.log('data flow : API');
  
    } else {

      const userLocalData = mockDatas?.USER_PERFORMANCE?.find((element) => element.userId === userId)

      if(userLocalData) {
  
        setDataSets((dataSets) => {

          return userLocalData.data.map((item) => {
    
            return {
              "subject": userLocalData.kind[item.kind],
              "value": item.value,
              "fullMark":300
            }
      
          })
  
        });

        console.log('data flow : Mock');
      
    }
  }

  },[userId]);

  
  return ( 
  
    <div className="block performance">


      {dataSets.length != 0 ? (

        <ResponsiveContainer width="100%" height="100%">

          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSets} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
          
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="subject" stroke="var(--white-color)" tickLine={false} />
       
              <Radar dataKey="value" fill="var(--data-color)" stroke={"var(--data-color)"} fillOpacity={.66} payload={[{color:'white'}]}
              />
            </RadarChart>

        </ResponsiveContainer>  

      ):( <Error />)

    }


  </div>  


  )

}
export default Performance