import {useParams,useOutletContext} from 'react-router-dom';

import useFetching  from '@root/utils/hooks.jsx'

import Choice from '@components/choice/choice';
import Onboarding from '@components/onboarding/Onboarding'
import CoreData from '@components/coreData/coreData'


const Home = () => {

  const {mockDatas} = useOutletContext();
 
  const {id} = useParams();

  //Get ALl datas and dispatch good url Product
  // let details = mockDatas.find((data)=> {

  //   return data.id === getParams.id

  // })


  console.log('id params', id);

  return (
    <>
      <Choice />
    </>
  )

}

export default Home