import React, {useState} from 'react';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import About from '../components/About';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import City from '../components/City';
import Logo from '../img/w-logo.png';
import V_N from '../img/V_N.png';
import V_E from '../img/V_E.png';
import V_S from '../img/V_S.png';
import V_O from '../img/V_O.png';
import V_NE from '../img/V_NE.png';
import V_SE from '../img/V_SE.png';
import V_SO from '../img/V_SO.png'
import V_NO from '../img/V_NO.png';

export default function App() {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const apiKey = '915b5bd57127ee2070ba3eca463390d3';
  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }
  function metersToKm(meters){
    let number = (meters/1000).toFixed(1);
    return number
  }
  function windDirection(degree){
    let direction = []
    if(degree === 0 || degree === 360 || degree < 5 || degree > 355) return direction = ["Norte",V_N] ;
    if(degree > 85 && degree < 95) return direction = ["Este", V_E];
    if(degree > 175 && degree < 185) return direction = ["Sur", V_S] ;
    if(degree > 265 && degree < 275) return direction = ["Oeste", V_O] ;
    if(degree > 5 && degree < 85) return direction = ["Noreste", V_NE] ;
    if(degree > 95 && degree < 175) return direction = ["Sudeste", V_SE] ;
    if(degree > 185 && degree < 265) return direction = ["Sudoeste", V_SO] 
    if(degree > 275 && degree < 355) return direction = ["Noroeste",V_NO] ;
  }
  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then((data) => {
        if(data.main !== undefined){
          const city = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            feels: (data.main.feels_like).toFixed(1),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            veleta: windDirection(data.wind.deg)[1],
            direction: windDirection(data.wind.deg)[0],
            degree: data.wind.deg,
            visibility: metersToKm(data.visibility),
            temp: (data.main.temp).toFixed(1),
            name: data.name,
            country: data.sys.country,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };
          setError((state) => state = false);
          setCities(oldCities => [...oldCities, city]);
        } else {
          setError((state) => state = true);
        }
      });
    }
    function onFilter(cityId){
      let ciudad = cities.filter(c => c.id === parseInt(cityId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }
  return (
    <div className="App">
      <Link className='links' to="/">
      <img className='logoApp' src={Logo} alt="logo"/>
      <h1>Weather App</h1>
      </Link>   
      <Nav onSearch={onSearch} setError={setError}/>
      <hr/>
      <Switch>
        <Route path="/about"><About/></Route>
        <Route exact path="/city/:cityId"
        render={({match}) => <City city={onFilter(match.params.cityId)} onClose={onClose}/>}></Route>
        <Route path="/"><Cards cities={cities} onClose={onClose} error={error} setError={setError}/></Route>    
       </Switch>
      <hr/>   
    </div>
  );
}
