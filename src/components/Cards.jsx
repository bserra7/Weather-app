import React from 'react';
import Card from './Card.jsx';
import s from '../styles/Cards.module.css'
import Error from './Error.jsx';

export default function Cards({cities, onClose, error, setError}) {
  const empty = (<div className={s.empty}><span>Aún no hay ciudades cargadas. CONSEJO: Busca una ciudad para conocer su clima.</span></div>);

  return (
  <React.Fragment>
    {error ? <Error setError={setError}/> : false}
    {cities.length <= 0 ? empty : false} 
    <div className={`${s.cardsContainer}`}>
      {
        cities.map(city => (
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
          img={city.img}
          onClose={onClose}/>
        )) 
      }
      </div>
  </React.Fragment>
  )
};