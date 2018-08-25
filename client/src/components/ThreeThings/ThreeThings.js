import React from "react";
import "./ThreeThings.css";

const ThreeThings = props => (
    
    <div className="ui grid container">
  <div className="ui relaxed divided items">
    <div className="item">
      <div className="middle aligned content">
        <h1 className="ui header">
        Always Remember... 
        {/* <span className="disabled">It'll blow your mind.</span> */}
        </h1>
        <div className="description">
          <p className="info-text">
            A revolutionary way to remember loved ones 
          </p>
        </div>
      </div>
      <div className="ui right floated large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </div>
    <div className="item">
      <div className="ui large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div className="middle aligned content">
        <h1 className="ui header">
        Everlasting Memories...
         {/* <span className="disabled">it's that good.</span> */}
        </h1>
        <div className="description">
          <p className="info-text">
          Share precious moments with friends and loved ones
	        through an easy to use interface

          </p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="middle aligned content">
        <h1 className="ui header">
        Build Your Family Tree...
          {/* <span className="disabled">this one.</span> */}
        </h1>
        <div className="description">
          <p className="info-text">
          Through the process of connecting with loved ones and friends you build connections which can expand your circle of memories
          </p>
        </div>
      </div>
      <div className="ui right floated large image">
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </div>
  </div>
</div>

);

export default ThreeThings;