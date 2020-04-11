import React from "react";
import baseimage from "../assets/images/baseimage.jfif";
import userprofile from "../assets/images/userprofile.jpg";
export default function MidSection() {
  return (
    <div className="w-1/2 border border-gray-300 flex flex-col">
      <div className="flex bg-gray-200 p-2">
        <span className="border-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-200 cursor-pointer text-blue-300 text-2xl hover:text-blue-400 ml-2 mr-2 mt-2">
          &#8592;
        </span>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mt-2">Baraka Larbi</h1>
          <span className="text-gray-600 text-sm">180 Tweets</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0">
            <img
          className="w-full"
          src={baseimage}
          alt="Baraka Larbi user background"
        />
        </div>
        <div className="absolute userpic">  
             <img
          className=" w-32 h-32 border-white border-solid border-4 rounded-full"
          src={userprofile}
          alt="Baraka Larbi user background"
        /> 
         </div>
       
      </div>
    </div>
  );
}
