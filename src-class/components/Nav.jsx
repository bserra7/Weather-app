import React, { Component } from "react";
import SearchBar from "./SearchBar";
import s from '../styles/Nav.module.css';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.div`
    background-color: #383838;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Mulish';
`;

export default class Nav extends Component{
    render(){
        return(
            <NavBar>
                <NavLink className={s.link} to='/'>Home</NavLink>
                <NavLink className={s.link} to='/about'>About</NavLink>
                <SearchBar onSearch={this.props.onSearch}/>
            </NavBar>     
        )
    }
}