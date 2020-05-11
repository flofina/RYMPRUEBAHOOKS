import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.png";
import menu from "../assets/icons/menu-icon.png";

const NavBar = styled.nav`
  background: #000;
  color: #33ffc4;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  width: 80%;
  height: 60px;
  margin: 20px 0px;
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  .img-logo {
    width: 150px;
    height: 100%;
    img {
      width: 100%;
      height: auto;
      padding: 5px 15px;
    }
  }
  .menu-nav {
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .menu-options {
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    #menu-icon {
      display: none;
      position: fixed;
      top: 40px;
      right: 8%;
      img {
        width: 30px;
        height: 30px;
      }
      a:visited {
      }
    }
    #menu-icon:target #menu-overlay {
      display: none;
    }
    #menu-overlay {
      width: 120px;
      height: 120px;
      background-color: #000;
      border-radius: 10px;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 60px;
      right: 5%;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s;
      a {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        font-size: 20px;
        height: 30px;
        margin: 5px;
      }
    }
    #menu-overlay:target {
      display: none;
      visibility: visible;
      opacity: 1;
    }
  }
  a {
    text-decoration: none;
    color: #33ffc4;
  }
  a:visited {
    text-decoration: none;
    color: #33ffc4;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 40px;
    margin: 10px 0px;
    padding: 5px 0px;
    font-size: 22px;
    .img-logo {
      width: 120px;
      height: 100%;
    }
    .menu-nav {
      .menu-options {
        display: none;
      }
      #menu-icon {
        display: inline-block;
        position: fixed;
        top: 25px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      #menu-overlay:target {
        display: block;
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <Link to="/App">
        <div className="img-logo">
          <img src={logo} alt="Rick and Morty logo" />
        </div>
      </Link>
      <div className="menu-nav">
        <div className="menu-options">
          <Link to="/personajes">
            <h5>PERSONAJES</h5>
          </Link>
          <Link to="/ubicaciones">
            <h5>UBICACIONES</h5>
          </Link>
          <Link to="/episodios">
            <h5>EPISODIOS</h5>
          </Link>
        </div>
        <div id="menu-icon">
          <a href="#menu-overlay">
            <img src={menu} alt="menu icon" />
          </a>
        </div>
        <div id="menu-overlay">
          <Link to="/personajes">
            <h5>PERSONAJES</h5>
          </Link>
          <Link to="/ubicaciones">
            <h5>UBICACIONES</h5>
          </Link>
          <Link to="/episodios">
            <h5>EPISODIOS</h5>
          </Link>
        </div>
      </div>
    </NavBar>
  );
};

export default Nav;
