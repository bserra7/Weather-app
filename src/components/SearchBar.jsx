import React, {useState} from 'react';
import s from '../styles/SearchBar.module.css'
import { useLocation } from 'react-router-dom';

export default function SearchBar({onSearch, setError}) {
  const [city, setCity] = useState();
  const location = useLocation();
  function insertCity(event){
    setCity(state => state = event.target.value);
  }
  return (
  <div className={s.search}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target.reset();
      location.pathname = '/';
      setCity('');
    }}>
    <input id="citySearch" onChange={insertCity} onFocus={()=>setError(false)} autocomplete="off" className={`${s.searchInput}`} type="search" placeholder='Ingresa una ciudad'/> 
    <button type="submit" className={`${s.searchBtn}`} value="Agregar">Agregar</button>
    </form>
    </div>
  )
};