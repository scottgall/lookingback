import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Search from "../Search/Search";
import ThreeThings from "../ThreeThings/ThreeThings";
import Steps from "../Steps/Steps";

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const img1 = "https://image.ibb.co/kGkDyK/pablo_1.png";
const img2 = "https://image.ibb.co/exp6JK/pablo_2.png";
const img3 = "https://image.ibb.co/gYmaCe/pablo_3.png";

const ParallaxComponent = () => (
<div>
    <Parallax bgImage={img1}
      strength={-300}>
      <div style={{height: 500}}></div>
      <div className="search-div">
      <Search/>
      </div>
      <div className="steps-div">
          <Steps/>
          </div>
    </Parallax>
    <Parallax bgImage={img2} blur={{min: -1,max:3}}>
      <div style={{height: 400}}>
        {/* <div style={insideStyles}>Dynamic Blur</div> */}
      </div>
    </Parallax>
    <div className="ThreeThings-div">
          <ThreeThings/>
          </div>
    <Parallax bgImage={img3} strength={-300}>
      <div style={{height: 500}}>
        {/* <div style={insideStyles}>Reverse direction</div> */}
      </div>
    </Parallax>
  </div>
);
export default ParallaxComponent;
