import React from "react";
import bilde1 from "/assets/mRooms/hardangerjøkulen-1.png";
import bilde2 from "/assets/mRooms/hardangerjøkulen-2.png";
import "./floien.css";

const Hardangerjokulen = () => {
    return (
      <div>
        <div className="container">
          <h1 className="gok">Hardangerjøkulen</h1>
          <div className="tekst-container">
            <li className="text_li">
              <h4>
                Her ser dere hvordan Hardangerjøkulen ser ut, Hardangerjøkulen er et av de større
                møterommene og er bra for møter.
              </h4>
              <p className="undertekst">Hardangerjøkulen har plass til 9 stk</p>
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

export default Hardangerjokulen;
