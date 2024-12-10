import {useParams} from 'react-router-dom';

import Onboarding from '@components/onboarding/Onboarding'
import CoreData from '@components/coreData/coreData'


const Profil = () => {

  // {string} => Récupération de l'id de l'utilisateur
  const {id} = useParams();

  // {number} => transtypage en number
  let userId = parseInt(id);

  return (
    <>
      <Onboarding userId={userId} />
      <CoreData userId={userId} />
    </>
  )

}

export default Profil