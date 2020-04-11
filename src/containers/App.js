import React from "react";
import LeftSideBar from './../components/LeftSideBar';
import MidSection from "../components/MidSection";
import RightSideBar from "../components/RightSideBar";
 
function App() {
  return (
    <div className="container mx-auto">
        <LeftSideBar/>
        <MidSection/>
        <RightSideBar/>
    </div>
  );
}

export default App;
