import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/home/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
