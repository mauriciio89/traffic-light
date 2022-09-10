import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [onColor, setOnColor] = useState(2)
  return (
    <div className="traffic-light d-flex justify-content-center">
      <div className="bg-dark p-4">
        <div onClick={()=>setOnColor(1)} className={`light ${onColor === 1 ? "red" : "off"} glow`}></div>
        <div onClick={()=>setOnColor(2)} className={`light ${onColor === 2 ? "yellow" : "off"} glow`}></div>
        <div onClick={()=>setOnColor(3)} className={`light ${onColor === 3 ? "green" : "off"} glow`}></div>
      </div>
    </div>
  );
};

export default Home;
