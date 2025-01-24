import React, {useState} from "react";




//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	
	return (
		<div>
		<div className="tubo"></div>
	 <div className="traffic-signal">
		<div className={`light red  ${color === "red" ? "glow" : ""}`} onClick={()=>setColor("red")}></div>
		<div className={`light yellow  ${color === "yellow" ? "glow" : ""}`} onClick={()=>setColor("yellow")}></div>
		<div className={`light green  ${color === "green" ? "glow" : ""}`} onClick={()=>setColor("green")}> </div>

	  </div>
	  </div>
	); 
};              

export default Home;
