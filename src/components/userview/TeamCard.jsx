import PropTypes from "prop-types"

const TeamCard = ({passUser}) => {
  return (
    <div>
        <h3>Name: {`${passUser.firstname} ${passUser.lastname}`}</h3>
        <h4>Email: {passUser.email}</h4>
        <h4>Age: {passUser.age}</h4>
        <h4>Address: {passUser.address}</h4>
    </div>
  )
}

TeamCard.propTypes = {
  passUser: PropTypes.shape({
    address: PropTypes.any,
    age: PropTypes.any,
    email: PropTypes.any,
    firstname: PropTypes.any,
    lastname: PropTypes.any
  })
}

export default TeamCard