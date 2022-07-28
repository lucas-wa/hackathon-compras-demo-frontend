import { useEffect, useState } from 'react'
// import api from "./services/api"
// import { Dashboard } from './pages/Dashboard';
// import { Authenticate } from "./pages/Authenticate"
import { AppRoutes } from "./routes";
import "./App.css"
import './index.css'
import { Context } from './context/Context';

function App() {

  const [rootHeight, setRootHeight] = useState(
    document
    .querySelector("#root")
    .getBoundingClientRect()
    .height
  )


  // useEffect(() => {
  //   const root = document.querySelector("#root");

  //   const rootHeight = root.getBoundingClientRect().height;

  //   if (rootHeight < window.screen.height) {
  //     root.style.height = "100vh";
  //   }



  //   console.log(rootHeight)



  // }, [])

  function handleRootHeight(height) {
    setRootHeight(height)
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
    <Context.Provider value={{handleRootHeight}}>
      <AppRoutes />
    </Context.Provider>
  )
}

export default App
