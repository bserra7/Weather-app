import React from "react";
import s from '../styles/About.module.css';

export default function About(){
    return(
        <div className={s.container}>
            <h2>Front-end development - Weather App</h2>
            <p>Desarrollo de una Weather App donde consume datos de una API externa, utilizando React creé la web para aplicar los conocimientos aprendidos durante el Bootcamp referidos a Front-end para mostrar los datos traidos y brindarle al usuario una experiencia amigable para buscar ciudades y conocer su clima.</p>
            <p>Realicé una mejora al original eliminando el uso de los estados locales de los componentes para guardar la información de la API, ahora se hace a través de Redux.</p>
            <p>Funcionalidades:
                <ul>
                    <li>Posibilidad de buscar una ciudad por nombre para conocer el pronóstico del clima, nos permite mantener guardadas las ciudades buscadas y en el momento que desearamos poder eliminarlas de nuestra lista de ciudades.</li>
                    <li>Ver los detalles del clima de la ciudad, donde podemos ver una información más especifica del pronóstico para la ciudad seleccionada.</li>
                </ul>          
            </p>
            <p>Tecnologias:
                <ul>
                    <li>ReactJS</li>
                    <li>ReduxJS</li>
                    <li>CSS Module</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>Fetch - External API consuming data</li>
                </ul>          
            </p>   
            <p>Created by Braian Serra</p>
            <p>Portfolio: <a href="https://braian-serra.webflow.io/">Visit my porfolio ❤️</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/braianserra/">braianserra 🤓</a></p>
            <p>Github: <a href="https://github.com/bserra7">bserra7 💻</a></p>              
        </div>
    )
}