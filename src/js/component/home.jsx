import React, {useState} from "react";




//create your first component
const Home = () => {
	const [color, setcolor] = useState("red")
	return (
	  <div className="traffic-signal">
		<div className="light red glow" onClick={setcolor(color)}></div>
		<div className="light yellow" onClick={}></div>
		<div className="light green"></div>
	  </div>
	  
	);
};

export default Home;
