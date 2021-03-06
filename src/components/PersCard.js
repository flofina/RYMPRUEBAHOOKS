import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import styled from "styled-components";

import ModalCard from "./PersCardModal";

const CardInfo = styled.div`
  background-color: #000;
  color: #33ffc4;
  font-family: "Share Tech", sans-serif;
  width: 270px;
  height: 440px;
  margin: 25px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  .card-content {
    width: 100%;
    .card-img {
      img {
        width: 100%;
        height: 200px;
      }
    }
    .card-title h1 {
      font-family: "Share Tech", sans-serif;
      font-weight: lighter;
      font-size: 20px;
      text-align: center;
      height: 46px;
      margin: 10px 5px;
    }
    .card-info {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0px 10px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #766764;
      }
    }
  }
`;

const Modal = styled.div`
  background-color: #11111140;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
`;

const PersCard = (props) => {
  //   const [cardElegida, setCardElegida] = useState([]);
  //   const [modal, setModal] = useState(false);

  //   useEffect(() => {
  //     fetch(`https://rickandmortyapi.com/api/character/`)
  //       .then(res => res.json())
  //       .then(data => setCardElegida(props.info));
  //   }, []);

  //   const handleClick = () => {
  //     handleClickModal();
  //   };

  //   const handleClickModal = () => {
  //     setModal(!modal);
  //   };

  // const busquedaPersonajes = useFetch(`character/${props.searchDelUser}`);
 
  return (
    // <>
    //   <CardInfo onClick={() => handleClick(props)}>
    //     <div className="card-content">
    //       <div className="card-img">
    //         <img src={props.info.image} alt={props.info.name} />
    //       </div>
    //       <div className="card-title">
    //         <h1>{props.info.name}</h1>
    //       </div>
    //       <div className="card-info">
    //         <div>
    //           <p>GENERO</p>
    //           <p>{props.info.gender}</p>
    //         </div>
    //         <div>
    //           <p>ESTADO</p>
    //           <p>{props.info.status}</p>
    //         </div>
    //         <div>
    //           <p>ORIGEN</p>
    //           <p>{props.info.origin.name}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </CardInfo>

    //   {modal && (
    //     <Modal onClick={() => handleClick(props)}>
    //       <ModalCard info={cardElegida} />
    //     </Modal>
    //   )}
    // </>
    <>
      <CardInfo>
        <div className="card-content">
          <div className="card-img">
            <img src={props.info.image} alt={props.info.name} />
          </div>
          <div className="card-title">
            <h1>{props.info.name}</h1>
          </div>
          <div className="card-info">
            <div>
              <p>GENERO</p>
              <p>{props.info.gender}</p>
            </div>
            <div>
              <p>ESTADO</p>
              <p>{props.info.status}</p>
            </div>
            <div>
              <p>ORIGEN</p>
              {/* <p>{props.info.origin.name}</p> */}
            </div>
          </div>
         
        </div>
      </CardInfo>
    </>
  );
};

export default PersCard;
