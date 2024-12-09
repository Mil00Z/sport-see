import {useState,useEffect} from 'react';
import {useOutletContext} from 'react-router-dom'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import { AreaChart, Area, XAxis,Tooltip, ResponsiveContainer, YAxis } from 'recharts'

import '@styles/layout/graphics.scss'


/**
 * Composant Average : affiche le graphique des temps d'activités sur 7 jours
 * @componant Average
 * @returns {JSX.Element}
 */


/**
 * Outlet Context
 * @returns {Object} => Objet de données retourné par OutletContext
 */


/**
 * Import de Hooks + States
 * @property {Object} dataFetched => Objet de données retourné par UseFetching
 * @property {boolean} isLoaded => State de chargement
 * @property {Object} mockDatas => Objet de données retourné par OutletContext
 * @property {number} userId => Identifiant de l'utilisateur
 * @property {array} dataSets => Tableau de données pour le render, modifié suivant les données récupérées
 * 
 */


const Average = () =>{

  const {mockDatas,userId} = useOutletContext()

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}/average-sessions`)

  const [dataSets,setDataSets] = useState([]);

  useEffect(() => { 

    console.log('is loaded',isLoaded);

    if (isLoaded) {

      setDataSets((dataSets) => {

        return dataFetched.sessions.map((item) => {
  
          return {
            "name": item.day,
            "value": item.sessionLength,
          }
    
        })

      });

      console.log('data flow : API');
  
    } else {

      
      const userLocalData = mockDatas?.USER_AVERAGE_SESSIONS?.find((element) => element.userId === userId)
  
      if(userLocalData){

        setDataSets((dataSets) => {

          return userLocalData.sessions.map((item) => {
    
            return {
              "name": item.day,
              "value": item.sessionLength,
            }
      
          })
  
        });

        console.log('data flow : Mock');

      } else {
        console.log('Finally Datas Error')
      }

    }

  },[userId]);


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

const CustomCursor = (props) => {

  const {x,y,width,height} = props;

  console.log(x,y,width,height);

  return (<rect fill="yellow" opacity="0.2" x={x} y={y} width={width} height={height} />)

}


  return ( 
  
    <div className="block average">

      {dataSets.length != 0 ? (
      <>
        <h2 className='graph-title'>Durée moyenne des sessions</h2>

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={dataSets} margin={{ top: 15, right: 15, bottom: 0, left: 15 }} >
  
            <XAxis dataKey="name" stroke="var(--white-color)" tickLine={false} axisLine={false} tickFormatter={(tick) => {
               const days = ["L", "M", "M", "J", "V", "S", "D"];
               return days[tick - 1];
               }}/>

            <YAxis datakey="value" domain={[0,90]} hide={true}/>

            <Tooltip content={<CustomTooltip />} />  

            <Area type="monotone" dataKey="value" stroke="var(--white-color)" strokeWidth={2} fillOpacity={1} fill="var(--data-color)" activeDot={{r:6, fill: "#fff",stroke:'rgba(255, 255, 255, 0.25)',strokeWidth: 8 }} />

          </AreaChart>
        </ResponsiveContainer>
      </>
        ) : (<Error />)


      }

    </div>
  
)  


}

export default Average