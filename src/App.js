import './App.css';
import './Layout/layout.css'
// import "bulma";

//pages
import Home from './Views/Home'
import Login from './Layout/login'
import {Route} from 'react-router-dom'
import { useState } from 'react';

 
function App() {
  
  const [logged, setlogger] = useState(false)

  const HandleClick = () =>{
    setlogger(true)
  }

  return (
    <div>
      <Route exact path="/Login"> <Login click={HandleClick} /> </Route>
      <Route exact path="/"> <Home logged={logged}  /> </Route>
    </div>
  );
}

export default App;
