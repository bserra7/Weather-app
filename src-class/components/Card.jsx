import React, { Component } from "react";
import s from '../styles/Card.module.css'
import { Link } from "react-router-dom";

export default class Card extends Component{
    render(){
        return(
        <div className={`${s.card}`}>
            <div className={`${s.weatherHeader}`}>    
            <div className={`${s.city}`}><Link to={`city/${this.props.id}`}>{this.props.name}, {this.props.country}</Link></div>
            <div className={`${s.Btn}`}><button className={`${s.closeBtn}`} onClick={this.props.onClose}>X</button></div>
            </div>
            <div className={`${s.weatherData}`}>
            <div className={`${s.min}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Min</span><span>{this.props.min}°C</span></div>
            <div className={`${s.max}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Max</span><span>{this.props.max}°C</span></div>
            <div className={`${s.weather}`}><img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt='clima'/></div>
            </div>
        </div>
        )
    }
}