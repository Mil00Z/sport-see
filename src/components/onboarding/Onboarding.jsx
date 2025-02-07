import { useState, useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'
import PropsTypes from 'prop-types'

import useFetching  from '@root/utils/hooks.jsx'

import '@styles/layout/onboarding.scss'


const Onboarding = (props) => {

  const {userId} = props;


  const {mockDatas} = useOutletContext();

  const {dataFetched,isLoaded} = useFetching(`http://localhost:3000/user/${userId}`);

  const [dataSets,setDataSets] = useState([]);

  const [userNameColor, setUserNameColor] = useState('var(--primary-color)');


  let userBaseline = 'Félicitation ! Vous avez explosé vos objectifs hier 👏';



//Timing Function
let now = new Date();
let evening = now.getHours() >= 17 || now.getHours() < 7 ;
let userTiming = evening ? 'Bonsoir' : 'Bonjour';


useEffect(() => {

  if (isLoaded && dataFetched) {

    setDataSets((dataSets) => {

      return  [
        {
        firstname: dataFetched.userInfos.firstName,
        lastname: dataFetched.userInfos.lastName
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
          firstname: userLocalData.userInfos.firstName,
          lastname: userLocalData.userInfos.lastName
          }
        ]

      })

      // console.log('data flow : Mock');
    }
 
  }

},[userId,isLoaded]);



useEffect(() => {

  if (evening) {
    document.documentElement.style.setProperty('--timer-color', 'var(--cool-color)');
    setUserNameColor('var(--cool-color)');
  } 

}, [evening]);




  return (

      <section className="onboarding">

        <h1 className="main-title">{userTiming} <span className="user-name" data-user-lastname={ (dataSets.length !== 0) ?dataSets[0].lastname : 'No Name'} style={{color:userNameColor}}>{(dataSets.length !== 0) ? dataSets[0].firstname : 'User Error Name'} </span> !</h1>
        <p className="baseline">{(dataSets.length !== 0) ? userBaseline : 'Bravo champion ! Vous avez planté le Dashboard 😱👌' }</p>

      </section>
    
  
)
}

Onboarding.propTypes = {
  userId: PropsTypes.number.isRequired
}

export default Onboarding