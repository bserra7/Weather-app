import React from 'react';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import About from '../components/About';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import City from '../components/City';
import Logo from '../img/w-logo.png';

export default function App() {

  return (
    <div className="App">
      <Link className='links' to="/">
      <img className='logoApp' src={Logo} alt="logo"/>
      <h1>Weather App</h1>
      </Link>   
      <Nav/>
      <hr/>
      <Switch>
        <Route path="/about"><About/></Route>
        <Route exact path="/city/:cityId"
        render={({match}) => <City id={match.params.cityId} />}></Route>
        <Route path="/"><Cards /></Route>    
      </Switch>
      <hr/>   
    </div>
  );
}
