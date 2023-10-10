import React from "react";
import bilde1 from "/assets/mRooms/ulriken-1.png";
import bilde2 from "/assets/mRooms/ulriken-2.png";
import "./floien.css";

const Ulrikken = () => {
  return (
    <div>
      <div className="container">
        <h1 className="gok">Ulrikken</h1>
        <div className="tekst-container">
          <li className="text_li">
            <h4>
              Her ser dere hvordan Ulrikken ser ut, Ulrikken er et av de større
              møterommene og blir flittig brukt til møter
            </h4>
            <p className="undertekst">Ulrikken har plass til 12 stk</p>
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

export default Ulrikken;
