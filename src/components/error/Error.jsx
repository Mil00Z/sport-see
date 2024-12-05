import PropTypes from 'prop-types'

const Error = (props) => {

  return (

    <div className="error"> Oups! les données demandées ne sont pas disponibles.</div>
  )

}

Error.propTypes = {
  props: PropTypes.object
}

export default Error