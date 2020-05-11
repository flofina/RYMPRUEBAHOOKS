import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

import rick from "../assets/mini-rick.png";
import Personajes from './Personajes';
import Card from "./Card";

const SearchBar = styled.section`
  background: #000;
  color: #33ffc4;
  width: 80%;
  height: 60px;
  margin: 20px 20px;
  padding: 5px 0px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  form {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    input {
      width: 300px;
    }
  }
  .img-rick {
    height: 60px;
    width: auto;
    img {
      height: 100%;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 40px;
    margin: 10px 10px;
    padding: 5px 0px;
    font-size: 18px;
    form {
      label {
        width: 150px;
        margin-left: 15px;
      }
      input {
        width: 240px;
      }
      .img-rick {
        height: 40px;
        width: auto;
        margin: 0px 15px;
      }
    }
  }
`;

const Search = (props) => {
  
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(busqueda);

  return (
    <>
      <SearchBar >
        <form onSubmit={(busqueda) => handleSubmit(busqueda)}>
          <label>INICIAR BUSQUEDA</label>
          <input
            value={busqueda}
            placeholder={props.placeholderContent}
            onChange={handleChange}
          />
          <div className="img-rick">
            <img src={rick} alt="Rick observa mientras buscas" />
          </div>
        </form>
      </SearchBar>

      <Card busqueda={busqueda}/>
    </>
  );
};

export default Search;
