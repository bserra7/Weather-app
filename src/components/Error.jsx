import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { setError } from "../redux/actions";

const ShowError = styled.div`
    border: 2px solid #a20000;
    border-bottom: 2px solid a20000;
    background-color: #cc000088;
    font-family: Mulish;
    font-weight: 500;
    color: #720000;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

const Button = styled.button`
    background-color: transparent;
    display: flex;
    border: none;
    font-weight: 700;
    color: #720000;
    float: right;
    right: 10px;
    &:focus{
        outline: none;
    }
`

export default function Error(){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleClose = () => {
        dispatch(setError(false))
        history.push('/');
    }

    return(
        <ShowError><span>ERROR: La ciudad requerida no se encontró</span> <Button onClick={handleClose}>[CERRAR]</Button></ShowError>
    )
}