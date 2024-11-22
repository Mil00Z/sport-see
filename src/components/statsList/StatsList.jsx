import {useOutletContext} from 'react-router-dom'


import '@styles/layout/statsList.scss'

const StatsList = () => {

  const {mockUser} = useOutletContext();

  const {keyData} = mockUser[0];


  //Create UI to display Datas
    let vitals = [
      { 
        label: "Calories",
        value: keyData?.calorieCount || 'X',
        unit :"Kcal"
      },
      { 
        label: "Protéines",
        value: keyData?.proteinCount || 'X',
        unit:"g"
      },
      { 
        label: "Glucides",
        value: keyData?.carbohydrateCount || 'X',
        unit:"g"
      
       },
      { 
        label: "Lipides",
        value: keyData?.lipidCount || 'X',
        unit:"g"
        
      }
    ]


  
  return(

    <div className="panel stats">
      
      <ul className="stats-list">

        {vitals.map((element,index) => {

          return(

            <li key={`vitals-${index}`} className="icon icon-stats">
              <span className={element.label.toLowerCase().substring(0,4)}>Icone</span>
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