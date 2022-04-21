import React, {useState} from 'react';
import s from '../styles/SearchBar.module.css'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchCity, setError } from '../redux/actions';

export default function SearchBar() {
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  const location = useLocation();
  function insertCity(event){
    setCity(state => state = event.target.value);
  }
  return (
  <div className={s.search}>
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(searchCity(city));
      e.target.reset();
      location.pathname = '/';
      setCity('');
    }}>
    <input id="citySearch" onChange={insertCity} onFocus={()=>dispatch(setError(false))} autocomplete="off" className={`${s.searchInput}`} type="search" placeholder='Ingresa una ciudad'/> 
    <button type="submit" className={`${s.searchBtn}`} value="Agregar">Agregar</button>
    </form>
    </div>
  )
};