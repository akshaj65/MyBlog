import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/home/Home';
import About from './components/About';
import Footer from './components/Footer';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/details/:id' exact component={DetailView} />
            <Route path='/create' exact component={CreateView} />
            <Route path='/update/:id' exact component={UpdateView} />
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
