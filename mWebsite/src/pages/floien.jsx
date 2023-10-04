import React from "react";
import Assets from '/Users/mool21/Documents/github/Gabler/mWebsite/mWebsite/public/assets/mRooms/f2.png'


const Floien = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh'
        }}
        >
            <h1>Floien</h1>

            <div className="container"
            
            style={{
                display: 'flex',
                justifyContent: 'left'
            }}
            >


            <img src={Assets} alt=""
            style={{
                height: '200px',
                width: '200px',
            }}
            />

            </div>
        </div>
    );
};

export default Floien;