import SearchBar from './SearchBar';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import s from '../styles/Nav.module.css';

const NavBar = styled.div`
    background-color: #383838;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Mulish';
`;

export default function Nav({onSearch, setError}){
    return(
    <NavBar>
        <NavLink className={s.link} exact to="/">Home</NavLink>
        <NavLink className={s.link} to="/about">About</NavLink>
        <SearchBar onSearch={onSearch} setError={setError}/>
    </NavBar>
    )
}