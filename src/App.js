import React from 'react'
import titanic from './componant/titanic';
import './App.css';
import {BrowserRouter , Route} from 'react-dom'
import Gladiator from './componant/Gladiator';
import Lion from './componant/Lion';
import Home from './componant/Home'
function App() {
  return (
      <div className="App">
        <BrowserRouter>
              <Route exact={true} path="/" component={Home}/>
             <Route path="/titanic" component={titanic}> </Route>
            <Route path="/Gladiator" component={Gladiator}> </Route>
           <Route path="/Lion" component={Lion}> </Route>
          </BrowserRouter>
        </div>
  )
}

export default App;
