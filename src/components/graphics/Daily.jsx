import mockActivity from '@datas/mock/mockUser12Activity.json'

import '@styles/layout/graphics.scss'

const Daily = () =>{

  const dataActivity = mockActivity[0];

  const sessions = Object.keys(dataActivity.sessions).map(key => dataActivity.sessions[key]);

  // console.log(sessions);


  return ( 
  
    <div className="block daily">

        { sessions.map((item,index) => {

        return (
          <div key={`session-${index}`} className="session">
            <span className="day">Jour : {item.day}</span>
            <span className="weight">Poids : {item.kilogram}</span>
            <span className="calories">Calories : {item.calories}</span>
            
          </div>
        )

        }

    )} 
          
    </div>
  
)  


}

export default Daily