import { useState,useEffect } from 'react';
import mockPerformance from '@datas/mock/mockUser12Performance.json'
import Error from '@components/error/Error';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '@styles/layout/graphics.scss'


const Performance = () => {

  const dataPerf = mockPerformance[0];  

  const [dataLife,setDataLife] = useState(false);

  const [dataSets,setDataSets] = useState([]);

  // const values = Object.keys(dataPerf.data).map(key => dataPerf.data[key].value);

  // const criterias = Object.keys(dataPerf.kind).map(key => dataPerf.kind[key]).reverse();


  useEffect(() => { 

    if (dataPerf) {

      setDataLife(dataLife=>!dataLife);

      setDataSets(dataSets => {

        return dataPerf.data.map((item) => {
  
          return {
            "subject": dataPerf.kind[item.kind],
            "value": item.value,
            "fullMark":450
          }

        }).reverse()

      });
  
    } else {
  
      console.error('No data available to display');
  
    }

  },[dataPerf]);

  
  return ( 
  
    <div className="block performance" data-user={dataPerf?.userId}>


      {dataPerf ? (

        <ResponsiveContainer width="100%" height="100%">

          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSets} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
          
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="subject" stroke="var(--white-color)" tickLine={false} />
       
              <Radar dataKey="value" fill="var(--data-color)" stroke={"var(--data-color)"} fillOpacity={.66} payload={[{color:'white'}]}
              />
            </RadarChart>

        </ResponsiveContainer>  

      ):( <Error dataLife={dataLife}/>)

    }


  </div>  


  )

}
export default Performance