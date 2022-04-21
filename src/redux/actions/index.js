import { metersToKm, windDirection } from '../../utils';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const SEARCH_CITY = 'SEARCH_CITY';
export const SET_ERROR = 'SET_ERROR';
export const FILTER_CITY = 'FILTER_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export const setError = (boolean) => {
    return {
        type: SET_ERROR,
        payload: boolean
    }
}

export const filterCity = (id) => {
    return {
        type: FILTER_CITY,
        payload: id
    }
}

export const deleteCity = (id) => {
    return {
        type: DELETE_CITY,
        payload: id
    }
}

export const searchCity = (city) => {
    return (dispatch) => {
        return axios.get(`?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.data)
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
            dispatch({
                type: SEARCH_CITY,
                payload: city
            })
          } else {
            dispatch({
                type: SET_ERROR,
                payload: true
            })
          }
        });
    }
}