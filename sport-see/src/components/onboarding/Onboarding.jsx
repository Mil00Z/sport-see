import '@styles/layout/onboarding.scss'


const Onboarding = () => {

//User Fake Name
const userName = 'Benjamin';


  return (
   
      <section className="onboarding">
        <h1 className="main-title">Bonjour <span className="user-name">{userName}</span></h1>
        <p className="baseline">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
  
  )

}
export default Onboarding