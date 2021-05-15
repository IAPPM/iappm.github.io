import './App.css';
import './Layout/layout.css'
// import "bulma";

//pages
import Header from './Layout/home'
import Metodologia from './Layout/metodologia'
import Contato from './Layout/contato'
import Login from './Layout/login'

 
function App() {
  return (
    <div>
      <Login />
      <Header />
      <Metodologia />
      <Contato />
    </div>
  );
}

export default App;
