import {useOutletContext} from 'react-router-dom'


import '@styles/layout/choice.scss'


const Choice = () => {

const {mockDatas} = useOutletContext();

let usersId = mockDatas?.USER_MAIN_DATA?.map((item) => item.id);





  return(
    <section className="choices">
      <h2 className="title">Démo: choisir un profil User</h2>
        <div className="row-choice">

          {usersId.map((item) => {
              return (
                <button className="btn profil" key={`profil-${item}`}>{item}</button>
              )
            })
          }
        <button className="btn" data-state="fake">20</button>
        </div>
    </section>
  )
}

export default Choice