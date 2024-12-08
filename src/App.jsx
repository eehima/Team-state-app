import RegistrationForm from "./components/RegistrationForm"
import Team from "./components/userview/Team";
import { useState } from "react";


const App = () => {
  const [newObject, setNewObject] = useState({});
  return (
    <>
      <div className="App">
        <div className="view">
          <RegistrationForm setNewObject={setNewObject} />

          <Team user={newObject} />
          

        </div>

      </div>

    </>
  )
}

export default App