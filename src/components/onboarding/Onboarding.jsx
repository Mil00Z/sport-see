import { useState, useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'

import '@styles/layout/onboarding.scss'


const Onboarding = () => {

const {mockDatas,userId} = useOutletContext();


//User
let now = new Date();
let evening = now.getHours() >= 17 || now.getHours() < 7 ;
let userTiming = evening ? 'Bonsoir' : 'Bonjour';


const userLocalData = mockDatas?.USER_MAIN_DATA?.find((element) => element.id === userId)

let userName = userLocalData?.userInfos?.firstName || 'BenJ';
let lastName = userLocalData?.userInfos?.lastName;


let userBaseline = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

const [userNameColor, setUserNameColor] = useState('var(--primary-color)');


useEffect(() => {

  if (evening) {
    document.documentElement.style.setProperty('--timer-color', 'var(--cool-color)');
    setUserNameColor('var(--cool-color)');
  } 

}, [evening]);


  return (
   
      <section className="onboarding">
        <h1 className="main-title">{userTiming} <span className="user-name" data-user-lastname={lastName}>{userName}</span> !</h1>
        <p className="baseline">{userBaseline}</p>
      </section>
  
  )

}
export default Onboarding