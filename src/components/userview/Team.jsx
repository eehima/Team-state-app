 import TeamCard from "./TeamCard"

const Team = ({user}) => {
  return (
    <div>
        <h1>Our Team</h1>

        <div>
            <TeamCard passUser={user} />
        </div>
    </div>
  )
}

export default Team