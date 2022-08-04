import React, { useState } from 'react';
import bg1 from "../assets/image/bg1.png"
import bg2 from "../assets/image/bg2.png"
import bg3 from "../assets/image/bg3.png"
import bg4 from "../assets/image/bg4.png"
import MainBg from "../assets/image/background-main.png"
import "../assets/css/Main.css"

const Background = () => {
    return (
        <>
            <div className="container">
                <div className="img-1st">
                    <img src={bg1} />
                </div>
                <div className="img-2nd">
                    <img src={bg2}/>
                </div>
                <div className="img-3rd">
                    <img src={bg3}/>
                </div>
                <div className="img-4th">
                    <img src={bg4}/>
                </div>
            </div>
        </>
    )
}

export default Background