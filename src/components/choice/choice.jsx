import {Link, useOutletContext} from 'react-router-dom'
import Error from '@components/error/Error';


import '@styles/layout/choice.scss'


const Choice = () => {

const {mockDatas} = useOutletContext();

let usersId = mockDatas?.USER_MAIN_DATA?.map((item) => item.id);


  return(
    <section className="choices">

      {usersId.length !== 0 ? ( 
        <>
          <h2 className="title">Démo: choisir un profil User</h2>
          <div className="row-choice">

            {usersId.map((id) => {
                return (
                  <Link to={`/profil/${id}`} className="btn profil" key={`profil-${id}`}>{id}</Link>
                )
              })
            }
            <a href="/profil/20" className="btn" data-state="fake">20</a>
          </div>
        </>

      ):(<Error />)}
      
    </section>
  )

}
export default Choice