import React from "react";
import bilde1 from "/assets/mRooms/kikut-2.png";
import bilde2 from "/assets/mRooms/kikut-1.png";
import "./floien.css";

const Kikut = () => {
    return (
      <div>
        <div className="container">
          <h1 className="gok">Kikut</h1>
          <div className="tekst-container">
            <li className="text_li">
              <h4>
                Her ser dere hvordan Kikut ser ut, Kikut er et av de mindre rommene og er bra dersom du har et lite møte eller for samtaler.
              </h4>
              <p className="undertekst">Kikut har plass til 8 stk</p>
            </li>
          </div>
          <div className="img-container">
            <img className="img-1" src={bilde1} alt="" />
            <img className="img-1" src={bilde2} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Kikut;
