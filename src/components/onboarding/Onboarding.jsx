import { useState, useEffect } from 'react';
import '@styles/layout/onboarding.scss'


const Onboarding = () => {

//User Fake Name
let now = new Date();
let evening = now.getHours() >= 17 || now.getHours() < 5 ;
let userTiming = evening ? 'Bonsoir' : 'Bonjour';
let userName = 'Benjamin';

let userBaseline = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

const [userNameColor, setUserNameColor] = useState('var(--primary-color)');


console.log(evening);

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