import {useState,useEffect} from 'react';
import {useOutletContext} from 'react-router-dom'
import PropTypes from 'prop-types'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

import '@styles/layout/graphics.scss'

/**
 * @module Daily
 * @description A component that displays daily activity data using a bar chart.
 * The chart shows both kilogram (weight) and calories burned data for each day.
 * 
 * @component
 * @example
 * return (
 *   <Daily />
 * )
 */
const Daily = () =>{

  /**
   * @type {Object} Context data containing mock data and user ID
   */
  const {mockDatas,userId} = useOutletContext()

  /**
   * @type {Object} Result of the fetch operation
   * @property {Object} dataFetched - The fetched activity data
   * @property {boolean} isLoaded - Loading state indicator
   */
  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}/activity`)

  /**
   * @type {Array} State to store the processed activity datasets
   */
  const [dataSets,setDataSets] = useState([]);

  /**
   * @type {number} Minimum weight value from the dataset
   */
  let minWeight = Math.min(...dataSets.map((item) => item.kilogram));

  /**
   * @type {number} Maximum calories value from the dataset
   */
  let maxKilCal = Math.max(...dataSets.map((item) => item.calories))

  /** 
   * Effect hook to process and set activity data
   * Transforms the raw activity data into a format suitable for the chart
   * Falls back to mock data if API data is not available
   */
  useEffect(() => { 

  if (isLoaded && dataFetched) {

    setDataSets((dataSets) => {

      return dataFetched.data.sessions.map((item) => {

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

/**
 * PropTypes for the Daily component
 * @type {Object}
 * @property {Object} mockDatas - Mock data object containing user activity information
 * @property {Array} mockDatas.USER_ACTIVITY - Array of user activity records
 * @property {number} mockDatas.USER_ACTIVITY[].userId - User ID for the activity record
 */
Daily.propTypes = {
  mockDatas: PropTypes.shape({
    USER_ACTIVITY: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number,
      sessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number
      }))
    }))
  }),
  userId: PropTypes.number
}

export default Daily