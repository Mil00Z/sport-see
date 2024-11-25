import mockPerformance from '@datas/mock/mockUser12Performance.json'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import '@styles/layout/graphics.scss'


const Performance = () => {

  const dataPerf = mockPerformance[0];  
 
  const values = Object.keys(dataPerf.data).map(key => dataPerf.data[key].value);

  const criterias = Object.keys(dataPerf.kind).map(key => dataPerf.kind[key]).reverse();


  let dataSets;

  if (dataPerf.length !== 0) {

    dataSets = dataPerf.data.map((item,index) => {

      return {
        "subject": dataPerf.kind[item.kind],
        "value": item.value,
        "fullMark":450
       }
    });

    dataSets.reverse();

  } else {

    dataSets = [];
  }
 

  console.log(dataSets, values);

  
  return ( 
  
    <div className="block performance">

    {/* <div className="vals">
    //       { values.map((val,index) => {

    //             return (
    //               <div key={`kind-${index}`} className="kind">
    //                 <span>{val}</span>
                    
    //               </div>
    //             )

    //         }
    //       )}    

       </div> 
      <div className="crits">


    //       { criterias.map((crit,index) => { 

    //           return (
    //             <div key={`criteria-${index}`} className="criteria">
    //               <span>{crit}</span>
                  
    //             </div>
    //           )

    //         }

    //       )} 
        
        
      </div>    */}

    
        <ResponsiveContainer width="100%" height="100%">
           <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataSets}>
            <PolarGrid />
           <PolarAngleAxis dataKey="subject" />
            <Radar name="Benjamin" dataKey="value" stroke="var(--perf-color)" fill="var(--perf-color)" fillOpacity={0.76} />
            
           </RadarChart>
        </ResponsiveContainer>
        
      </div>  


)  


}

export default Performance