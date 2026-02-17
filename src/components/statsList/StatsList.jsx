import {useState,useEffect} from 'react';
import {useOutletContext} from 'react-router-dom'

import PropsTypes from 'prop-types'

import useFetching  from '@root/utils/hooks.jsx'
import Error from '@components/error/Error';

import calo from '@assets/energy.svg'
import prot from '@assets/chicken.svg'
import glu from '@assets/apple.svg'
import lip from '@assets/cheeseburger.svg'


import '@styles/layout/statsList.scss'




/**
 * Composant StatsList : affiche les données calorifiques
 * @componant StatsList 
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
 * @property {array} dataSets => Tableau de données pour le render, modifié suivant les données récupérées
 * 
 */


const StatsList = (props) => {


  const {userId} = props ;

  const {mockDatas} = useOutletContext();

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}`)

  const [dataSets,setDataSets] = useState([]);



  useEffect(() => { 

    if(isLoaded && dataFetched){

      setDataSets((dataSets) => {

        return [
          { 
            label: "Calories",
            value: dataFetched?.keyData?.calorieCount || 'X',
            unit :"Kcal",
            icon: calo
          },
          { 
            label: "Protéines",
            value: dataFetched?.keyData?.proteinCount || 'X',
            unit:"g",
            icon: prot
          },
          { 
            label: "Glucides",
            value: dataFetched?.keyData?.carbohydrateCount || 'X',
            unit:"g",
            icon: glu
          
           },
          { 
            label: "Lipides",
            value: dataFetched?.keyData?.lipidCount || 'X',
            unit:"g",
            icon: lip
          }

        ]

     })

      // console.log('data flow : API');

    } else {

      const userLocalData = mockDatas?.USER_MAIN_DATA?.find((element) => element.id === userId);

      if(userLocalData){

        setDataSets((dataSets) => {

          return [
            { 
              label: "Calories",
              value: userLocalData.keyData?.calorieCount || 'X',
              unit :"Kcal",
              icon: calo
            },
            { 
              label: "Protéines",
              value: userLocalData.keyData?.proteinCount || 'X',
              unit:"g",
              icon: prot
            },
            { 
              label: "Glucides",
              value: userLocalData.keyData?.carbohydrateCount || 'X',
              unit:"g",
              icon: glu
            
             },
            { 
              label: "Lipides",
              value: userLocalData.keyData?.lipidCount || 'X',
              unit:"g",
              icon: lip
            }
          ]

        });

        // console.log('data flow : Mock');

      }
    }

  },[userId,isLoaded])


  return(

    <div className="panel stats">

      { dataSets.length !== 0 ? (

        <ul className="stats-list">

        {dataSets.map((element,index) => {

          return(

            <li key={`vitals-${index}`} className="icon icon-stats">
              <span className={element.label.toLowerCase().substring(0,4)}>
              <img src={element.icon} />
              </span>
              <div className="vitals">
                <span className="unit">{element.value} {element.unit}</span>
                <span className="label">{element.label}</span>
              </div>
            </li>     
          )

        })
        }

        </ul>) : (<Error />)
    }
      
     
  </div>

  )

}

StatsList.propTypes = {
  userId: PropsTypes.number.isRequired
}

export default StatsList