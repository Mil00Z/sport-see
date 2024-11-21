import mockPerformance from '@datas/mock/mockUser12Performance.json'

import '@styles/layout/graphics.scss'


const Performance = () =>{

  const dataPerf = mockPerformance[0];  
 
  const values = Object.keys(dataPerf.data).map(key => dataPerf.data[key].value);

  const criterias = Object.keys(dataPerf.kind).map(key => dataPerf.kind[key]);
 
  let dataSets = [values,criterias];

  console.log(dataSets)

  return ( 
  
    <div className="block performance">

      <div className="vals">
          { values.map((val,index) => {

                return (
                  <div key={`kind-${index}`} className="kind">
                    <span>{val}</span>
                    
                  </div>
                )

            }
    
          )}    
      </div> 
      <div className="crits">


          { criterias.map((crit,index) => { 

              return (
                <div key={`criteria-${index}`} className="criteria">
                  <span>{crit}</span>
                  
                </div>
              )

            }

          )} 
        
        
      </div>     

    </div>
  
)  


}

export default Performance