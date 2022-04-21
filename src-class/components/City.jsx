import React, { Component } from "react";
import s from '../styles/City.module.css';
import { Link } from "react-router-dom";

export default class City extends Component{
    render(){
        return(
            <div className={s.cityContainer}>
                <div className={s.cityWrapper}>
                    <h2>{this.props.city.name}, {this.props.city.country}</h2>
                    <div className={s.cityData}>
                        <div className={s.data}>Temperatura: {this.props.city.temp} ºC</div>
                        <div className={s.data}>Humedad: {this.props.city.humidity} %</div>
                        <div className={s.data}>Sensación Térmica: {this.props.city.feels} ºC</div>
                        <div className={s.data}>Clima: {this.props.city.weather}</div>
                        <div className={s.data}>Viento: {this.props.city.wind} m/s - {this.props.city.degree}° <img src={this.props.city.veleta} alt="" /> {this.props.city.direction}</div>
                        <div className={s.data}>Visibilidad: {this.props.city.visibility} km</div>
                        <div className={s.data}>Nubosidad: {this.props.city.clouds}%</div>
                        <div className={s.data}>Presión: {this.props.city.pressure} hPa</div>
                        <div className={s.data}>Latitud: {this.props.city.latitud}º</div>
                        <div className={s.data}>Longitud: {this.props.city.longitud}º</div>
                    </div>
                </div>
                <Link className={s.btnLink} to='/'>Volver al Home</Link>
            </div>
        )
    }
}