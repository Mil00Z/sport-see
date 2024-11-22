import mockAverage from '@datas/mock/mockUser12Average.json'


import '@styles/layout/graphics.scss'

const Average = () =>{

  let averageDatas = mockAverage[0];

  // let averageDatas = mockAverage.data

  console.log(averageDatas);


  return ( 
  
    <div className="block average" data-user={averageDatas.userId}>

      {averageDatas.sessions.map((item, index) => {

      return(
            <div key={`date-${index}`} className="dates">
              <span>Day : {item.day}</span>
              <span>Durée : {item.sessionLength}</span>
            </div>

          )


        })} 



          


    </div>
  
)  


}

export default Average