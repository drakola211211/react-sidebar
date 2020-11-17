import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/reports" exact component={Reports}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
