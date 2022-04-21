import React, { useEffect } from "react";
import Card from "./Card";
import s from '../styles/City.module.css';
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { filterCity } from "../redux/actions";

export default function City({id}){
    const dispatch = useDispatch();
    const city = useSelector(state => state?.city);

    useEffect(()=>{
        dispatch(filterCity(id))
    },[])

    return(
        <> { typeof city === 'object' && Object.keys(city)?.length ?
        <div className={s.cityContainer}>
            <div className={s.cityWrapper}>
                <h2>{city.name}, {city.country}</h2>
                <div className={s.cityData}>
                    <div className={s.data}>Temperatura: {city.temp} ºC</div>
                    <div className={s.data}>Humedad: {city.humidity} %</div>
                    <div className={s.data}>Sensación Térmica: {city.feels} ºC</div>
                    <div className={s.data}>Clima: {city.weather}</div>
                    <div className={s.data}>Viento: {city.wind} m/s - {city.degree}° <img src={city.veleta} alt="" /> {city.direction}</div>
                    <div className={s.data}>Visibilidad: {city.visibility} km</div>
                    <div className={s.data}>Nubosidad: {city.clouds}%</div>
                    <div className={s.data}>Presión: {city.pressure} hPa</div>
                    <div className={s.data}>Latitud: {city.latitud}º</div>
                    <div className={s.data}>Longitud: {city.longitud}º</div>
                </div>
            </div>
            <Card 
            key={city.id}
            id={city.id}
            name={city.name} 
            country={city.country}
            min={city.min} 
            max={city.max} 
            temp={city.temp}
            humidity={city.humidity}
            feels={city.feels}
            weather={city.weather}
            img={city.img}/>
        </div> : <Error/>}
        </>        
    )
}