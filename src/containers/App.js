import React from "react";
import LeftSideBar from './../components/LeftSideBar';
import MidSection from "../components/MidSection";
import RightSideBar from "../components/RightSideBar";
 
function App() {
  return (
    
      <div className=" container mx-auto flex mb-4 items-center">
        <LeftSideBar/>
        <MidSection/>
        <RightSideBar/>
      </div>
    
 
  );
}

export default App;
