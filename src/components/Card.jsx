import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/Card.module.css';
import { useLocation } from 'react-router-dom';

export default function Card(props) {
  const location = useLocation();
  return (
    <NavLink className={`${s.link} ${s.card}`} to={`city/${props.id}`}>
      <div>
        <div className={`${s.weatherHeader}`}>    
        <div className={`${s.city}`}>{props.name}, {props.country}</div>
        <div className={`${s.Btn}`}><button className={`${s.closeBtn}`} onClick={(e)=>{e.preventDefault(); props.onClose(props.id); location.pathname="/"}}>X</button></div>
        </div>
        <div className={s.actualTemp}>
        <div className={`${s.temp}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Actual</span><span>{props.temp}°C</span></div>
        <div className={`${s.temp}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Sens. T</span><span>{props.feels}°C</span></div>
        <div className={`${s.temp}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Humedad</span><span>{props.humidity}%</span></div>
        </div>
        <div className={`${s.weatherData}`}>
        <div className={`${s.min}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Min</span><span>{props.min}°C</span></div>
        <div className={`${s.max}`}><span className={`${s.spanBolder} ${s.spnTemp}`}>Max</span><span>{props.max}°C</span></div>
        <div className={`${s.weather}`}><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='clima'/></div>
        </div>
      </div>
    </NavLink>     
  )
};