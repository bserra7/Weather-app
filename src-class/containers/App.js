import React, { Component } from "react";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import './App.css';
import { apiKey } from "./keys";
import { Route, Switch } from 'react-router-dom';
import City from "../components/City";
import V_N from '../img/V_N.png';
import V_E from '../img/V_E.png';
import V_S from '../img/V_S.png';
import V_O from '../img/V_O.png';
import V_NE from '../img/V_NE.png';
import V_SE from '../img/V_SE.png';
import V_SO from '../img/V_SO.png'
import V_NO from '../img/V_NO.png';
import About from "../components/About";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {cities: []};
    }

    metersToKm = (meters) => {
        let number = (meters/1000).toFixed(1);
        return number
    }
    windDirection = (degree) => {
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

    onSearch = (city)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if(data.main){
                const ciudad = {
                    min: Math.round(data.main.temp_min),
                    max: Math.round(data.main.temp_max),
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    feels: (data.main.feels_like).toFixed(1),
                    img: data.weather[0].icon,
                    id: data.id,
                    wind: data.wind.speed,
                    veleta: this.windDirection(data.wind.deg)[1],
                    direction: this.windDirection(data.wind.deg)[0],
                    degree: data.wind.deg,
                    visibility: this.metersToKm(data.visibility),
                    temp: (data.main.temp).toFixed(1),
                    name: data.name,
                    country: data.sys.country,
                    weather: data.weather[0].main,
                    clouds: data.clouds.all,
                    latitud: data.coord.lat,
                    longitud: data.coord.lon
                };
                this.setState({
                    cities: [...this.state.cities,ciudad]
                });
            }else{
                alert("Ciudad no encontrada");
            }
        })
    }

    onClose = (cityId)=>{
        this.setState({
            cities: this.state.cities.filter(city => city.id !== cityId)
        })
    }

    onFilter =(cityId)=>{
        let city = this.state.cities.find(city => city.id === parseInt(cityId));
        return city;
    }

    render(){
        return(
            <div className="App">
                <Nav onSearch={this.onSearch}/>
                <Switch>
                <Route exact path='/'>
                    <Cards cities={this.state.cities} onClose={this.onClose}/>
                </Route>
                <Route exact path='/city/:cityId'
                 render={({match}) => <City city={this.onFilter(match.params.cityId)}/>}></Route>
                <Route path='/about'>
                    <About/>
                </Route>
                </Switch>
            </div>
            
            
        )  
    }
}