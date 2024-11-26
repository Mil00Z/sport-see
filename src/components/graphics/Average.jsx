import {useState,useEffect} from 'react';
import mockAverage from '@datas/mock/mockUser12Average.json'

import Error from '@components/error/Error';

import { AreaChart, Area, XAxis,Tooltip, ResponsiveContainer,Label } from 'recharts'

import '@styles/layout/graphics.scss'

const Average = () =>{

  let dataAverage = mockAverage[0];

  const [dataLife,setDataLife] = useState(false);

  const [dataSets,setDataSets] = useState([]);



  useEffect(() => { 

    if (dataAverage) {

      setDataLife(dataLife=>!dataLife);

      setDataSets(dataSets => {

        return dataAverage.sessions.map((item) => {
  
          return {
            "name": item.day,
            "value": item.sessionLength,
          }
    
      })

    });
  
    
    } else {
  
      console.error('No data available to display');
  
    }

  },[dataAverage]);



 const CustomTooltip = ({ active, payload}) => {

    if (active && payload && payload.length) {

      // console.log(payload)

      return (
          <div className="custom-tooltip">
              <p className="label">{`${payload[0].value} min`}</p>
          </div>
      )
  } 
}


  return ( 
  
    <div className="block average" data-user={dataAverage?.userId}>

      {dataAverage ? (

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={dataSets} margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>

          <Label value="Pages of my website" offset={0} position="insideBottom" />
          
            <XAxis dataKey="name" stroke="var(--white-color)" tickLine={false} axisLine={false} tickFormatter={(tick) => {
               const days = ["L", "M", "M", "J", "V", "S", "D"];
               return days[tick - 1];
               }}/>
            <Tooltip content={<CustomTooltip />}/>  

            <Area type="monotone" dataKey="value" stroke="var(--white-color)" fillOpacity={1} fill="var(--primary-color)" />

          </AreaChart>
        </ResponsiveContainer>

        ) : (<Error dataLife={dataLife} />)


      }

    </div>
  
)  


}

export default Average