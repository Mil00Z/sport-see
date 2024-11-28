import mockActivity from '@datas/mock/mockUser12Activity.json'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

import '@styles/layout/graphics.scss'

const Daily = () =>{

  const dataActivity = mockActivity[0];

  const dataSets = Object.keys(dataActivity.sessions).map(key => dataActivity.sessions[key]);

  console.log(dataSets);

  let minWeight = Math.min(...dataSets.map((item) => item.kilogram));

  let maxKilCal = Math.max(...dataSets.map((item) => item.calories))


  
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

      <ResponsiveContainer width="100%" height="100%">
      
          <BarChart data={dataSets} margin={{ top: 25, right: 30, left: 30, bottom:5}} barGap={12} barSize={8}  >
            

            <CartesianGrid strokeDasharray="8" vertical={false} />
            <XAxis dataKey="day" />

            <Bar yAxisId="right" dataKey="kilogram" fill="var(--black-color)" barSize={15} radius={[20,20,0,0]} />
            <YAxis yAxisId="right" type="number" dataKey="kilogram" orientation="right" domain={[minWeight - 10, 100]} hide={false} />


            <Bar yAxisId="left" dataKey="calories" fill="var(--timer-color)" barSize={15} radius={[20,20,0,0]} />
            <YAxis yAxisId ="left" type="number" dataKey="calories" orientation="left" domain={[0, maxKilCal + 50]} hide={true}  />

            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba( 196 , 196 , 196,.5)'}}/>

            <Legend />
            
          </BarChart>

      </ResponsiveContainer>
     
    </div>
  
)  


}

export default Daily