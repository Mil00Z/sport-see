import {useState,useEffect} from 'react';
import {useOutletContext} from 'react-router-dom'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

import '@styles/layout/graphics.scss'

const Daily = () =>{

  const {mockDatas,userId} = useOutletContext()

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}/activity`)

  const [dataSets,setDataSets] = useState([]);


  let minWeight = Math.min(...dataSets.map((item) => item.kilogram));

  let maxKilCal = Math.max(...dataSets.map((item) => item.calories))



useEffect(() => { 

  if (isLoaded && dataFetched) {

    setDataSets((dataSets) => {

      return dataFetched.sessions.map((item) => {

        return {
          "day": item.day,
          "calories": item.calories,
          "kilogram": item.kilogram
        }
  
  
      })

    });

    console.log('data flow : API');

  } else {

    const userLocalData = mockDatas?.USER_ACTIVITY?.find((element) => element.userId === userId)

    if(userLocalData){

      setDataSets((dataSets) => {

        return userLocalData.sessions.map((item) => {
  
          return {
            "day": item.day,
            "calories": item.calories,
            "kilogram": item.kilogram
          }
    
        })

      });

      console.log('data flow : Mock');

    } else {
      console.log('Finally Datas Error')
    }

  }

},[userId])
  

const CustomTooltip = ({active,payload}) => {

  if (active && payload && payload.length) {
  
    // console.log(payload);

    return (
      <div className="custom-tooltip">
          <p className="label">{payload[0].value}Kg</p>
          <p className="label">{payload[1].value}Kcal</p>
      </div>
    )

  }

}



  return ( 
  
    <div className="block daily">


      {dataSets.length !== 0 ? (
        <>
         <h2 className='graph-title'>Activité Quotidienne</h2>

         <ResponsiveContainer width="100%" height="100%">
       
             <BarChart data={dataSets} margin={{ top: 20, right: 20, left:20, bottom:5}} barGap={12} >
   
               <CartesianGrid strokeDasharray="8" vertical={false} />
   
               <XAxis dataKey="day" tickLine={false}  />
   
               <Bar yAxisId="right" dataKey="kilogram" fill="var(--black-color)" barSize={10} radius={[20,20,0,0]} />
               <YAxis yAxisId="right" type="number" dataKey="kilogram" orientation="right" domain={[minWeight - 10, 100]} name={"Poids(kg)"} />
   
   
               <Bar yAxisId="left" dataKey="calories" fill="var(--timer-color)" barSize={10} radius={[20,20,0,0]} />
               <YAxis yAxisId ="left" type="number" dataKey="calories" orientation="left" domain={[0, maxKilCal + 50]} hide={true}  />
   
               <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba( 196 , 196 , 196,.5)'}}/>
   
               <Legend align='right' verticalAlign='top' iconType="circle" iconSize={15} height={45} payload={[{value:"Poids(Kg)"},{value:"Calories brulées (Kcal)", color:'var(--timer-color)'}]} />
               
             </BarChart>
   
         </ResponsiveContainer>
      </>

      ):(<Error />)
    }

   
    </div>
  
)  


}

export default Daily