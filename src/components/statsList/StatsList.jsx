import {useOutletContext} from 'react-router-dom'
import calo from '@assets/energy.svg'
import prot from '@assets/chicken.svg'
import glu from '@assets/apple.svg'
import lip from '@assets/cheeseburger.svg'


import '@styles/layout/statsList.scss'

const StatsList = () => {

  const {mockUser} = useOutletContext();

  const {keyData} = mockUser[0];


  //Create UI to display Datas
    let vitals = [
      { 
        label: "Calories",
        value: keyData?.calorieCount || 'X',
        unit :"Kcal",
        icon: calo
      },
      { 
        label: "Protéines",
        value: keyData?.proteinCount || 'X',
        unit:"g",
        icon: prot
      },
      { 
        label: "Glucides",
        value: keyData?.carbohydrateCount || 'X',
        unit:"g",
        icon: glu
      
       },
      { 
        label: "Lipides",
        value: keyData?.lipidCount || 'X',
        unit:"g",
        icon: lip
      }
    ]


    
  return(

    <div className="panel stats">
      
      <ul className="stats-list">

        {vitals.map((element,index) => {

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

      </ul>
  </div>

  )



}
export default StatsList