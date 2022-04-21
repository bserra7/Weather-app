import React from 'react';
import Card from './Card.jsx';
import s from '../styles/Cards.module.css'
import Error from './Error.jsx';
import { useSelector } from 'react-redux';

export default function Cards() {
  const empty = (<div className={s.empty}><span>Aún no hay ciudades cargadas. CONSEJO: Busca una ciudad para conocer su clima.</span></div>);
  const error = useSelector(state => state.error);
  
  const cities = useSelector(state => state.cities)

  return (
  <>
    {error && <Error />}
    {cities?.length <= 0 ? empty : false} 
    <div className={`${s.cardsContainer}`}>
      {
        cities?.map(city => (
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
        )) 
      }
      </div>
  </>
  )
};