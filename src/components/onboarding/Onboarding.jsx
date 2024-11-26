import { useState, useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'

import '@styles/layout/onboarding.scss'


const Onboarding = () => {

const {mockUser} = useOutletContext();


//User Fake Name
let now = new Date();
let evening = now.getHours() >= 17 || now.getHours() < 7 ;
let userTiming = evening ? 'Bonsoir' : 'Bonjour';

let userName = mockUser[0]?.userInfos?.firstName || 'Random Guy';

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
        <h1 className="main-title">{userTiming} <span className="user-name">{userName}</span> !</h1>
        <p className="baseline">{userBaseline}</p>
      </section>
  
  )

}
export default Onboarding