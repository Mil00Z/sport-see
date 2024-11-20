import { Link } from 'react-router-dom'

import '@styles/layout/navigation.scss'


const Navigation = () => { 

  return ( 
    <nav className='main-nav'>
      <ul>
        <li><Link to="/" className="link">Accueil</Link></li>
        <li><Link to="/profil" className="link">Profil</Link></li>
        <li><Link to="/settings" className="link">Réglage</Link></li>
        <li><Link to="/community" className="link">Communauté</Link></li>
      </ul>
    </nav>
  )

 }

 export default Navigation