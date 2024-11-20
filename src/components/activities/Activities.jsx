import yoga from '@assets/yoga.svg'
import swim from '@assets/swim.svg'
import bike from '@assets/bike.svg'
import dumbell from '@assets/dumbell.svg'

import '@styles/layout/activities.scss'

const Activities = () => {

  const icons = [yoga, swim, bike, dumbell ]

  let dateTime = new Date();
  let months =  dateTime.toLocaleString('default', { month: 'long' });
  let years = dateTime.getFullYear();

  return (
    <aside className='activities'>
      <nav className='second-nav'>
        <ul className="activities-list">

          {icons.map((icon, index) => {
              return ( 
              <li key={`icon-${index}`}>
                <a className="item-icon" href="/" aria-label="Lien vers l'activité">
                  <img className="" src={icon} alt={`Icone de l'activité ${index}`} aria-label="" />
                  </a>
              </li>
              )

          })
        }

        </ul>
      </nav>
      <p className="copyright">Copyright, <a href="https://github.com/Mil00Z/sport-see" target='_blank'data-realase={months}>Mil00Z</a> {years}</p>
    </aside>
  )

}

export default Activities