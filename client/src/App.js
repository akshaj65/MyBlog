import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
