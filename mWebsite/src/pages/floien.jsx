import React from "react";
import bilde1 from "/assets/mRooms/f2.png";
import bilde2 from "/assets/mRooms/fløien-1.png";
import "./floien.css";

const Floien = () => {
  return (
    <div>
      <div className="container">
        <h1 className="gok">Fløien</h1>
        <div className="tekst-container">
          <li className="text_li">
            <h4>
              Her ser dere hvordan Fløien ser ut, Fløien er et av de større
              møterommene og blir blant annet brukt til onboardingsdager og
              allmøter
            </h4>
            <p className="undertekst">Fløien har plass til 16 stk</p>
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

export default Floien;
