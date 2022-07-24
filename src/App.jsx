import { useEffect, useState } from 'react'
// import api from "./services/api"
// import { Dashboard } from './pages/Dashboard';
// import { Authenticate } from "./pages/Authenticate"
import {AppRoutes} from "./routes";
import "./App.css"
import './index.css'

function App() {

  const [user, setUser] = useState(undefined)


  function handleUserLogin(user) {

    setUser(user);

  }


  // useEffect(() => {
  //   api
  //     .get("/")
  //     .then((response) => {console.log(response.data)})
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []); 

  return (
    <AppRoutes/>
  )
}

export default App
