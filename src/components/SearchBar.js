import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 728px;
    height: 40px;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 1px solid #c6c6c6;
    border-right: none;
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 2px #eee;
    color: black;
    padding: 2px 0 2px 6px;
    flex: 0 1 728px;
    flex-basis: 0.000000001px;
    display: flex;
    flex-direction: row;
    input[type='text']{
        width: 90%;
        border: none;
        &:focus{
           outline: none;
        }
      }
    button{
        display: inline-block;
        text-align: center;
        justify-self: flex-end;
        align-items: flex-start;
        border: 1px solid #c6c6c6;
        border-radius: 0 2px 2px 0;
        cursor: pointer;
        height: 40px;
        width: 64px;
        margin: 0;
        box-sizing: border-box;
    }
`;

const SearchBar = ({getSearchInputValue}) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (e) => {
       e.preventDefault();
       setInputValue(e.target.value);
    }

    return (
        <Container>
            <input 
            type='text' 
            onChange={onChangeHandler} 
            value={inputValue}
            placeholder='Search'
            />
            <button onClick={()=>getSearchInputValue(inputValue)}>
               <FontAwesomeIcon icon={faSearch} color='#a8a8a8' size="2x"/>
            </button>
        </Container>
    )
}

export default SearchBar
