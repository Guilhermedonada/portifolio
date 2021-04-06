import Home from './components/Home'
import Help from './components/help/Help'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/help" component={Help}/>
      </Switch>  
    </Router>
  );
}

export default App;
