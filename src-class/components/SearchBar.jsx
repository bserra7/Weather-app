import React, { Component } from "react";
import s from '../styles/SearchBar.module.css';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: ''
        };
    }
    handleState = (event) =>{
        this.setState({city: event.target.value});
    }

    render(){
        return(
            <div className={s.search}>
                <form onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                this.props.onSearch(this.state.city);
                }}>
                    <input id="citySearch" onChange={this.handleState} autocomplete="off" className={`${s.searchInput}`} 
                    type="search" placeholder='Ingresa una ciudad'/> 
                    <button type="submit" className={`${s.searchBtn}`} value="Agregar">Agregar</button>
                </form>
            </div>
        )
    }
}