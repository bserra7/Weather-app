import React, { Component } from "react";
import Card from "./Card";
import s from '../styles/Cards.module.css';

export default class Cards extends Component{
    render(){
        return(
            <div className={`${s.cardsContainer}`}>
                {this.props.cities.map(city => 
                <Card
                key={city.id}
                id={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                country={city.country}
                img={city.img}
                onClose={()=>this.props.onClose(city.id)}
                />)}
            </div>
        )
    }
}