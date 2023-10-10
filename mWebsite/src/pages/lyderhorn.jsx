import React from "react";
import bilde1 from "/assets/mRooms/lyderhorn-1.png";
import bilde2 from "/assets/mRooms/lyderhorn-2.png";
import "./floien.css";

const Lyderhorn = () => {
    return (
      <div>
        <div className="container">
          <h1 className="gok">Lyderhorn</h1>
          <div className="tekst-container">
            <li className="text_li">
              <h4>
                Her ser dere hvordan Lyderhorn ser ut, Lyderhorn er et mellomstort
                møterom.
              </h4>
              <p className="undertekst">Lyderhorn har plass til 9 stk</p>
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



export default Lyderhorn;
