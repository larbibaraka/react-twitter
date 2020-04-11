import React from "react";
import LeftSideBar from './../components/LeftSideBar';
import MidSection from "../components/MidSection";
import RightSideBar from "../components/RightSideBar";
 
function App() {
  return (
    <div className="container">
      <div className="">
        <LeftSideBar/>
        <MidSection/>
        <RightSideBar/>
      </div>
    
    </div>
  );
}

export default App;
