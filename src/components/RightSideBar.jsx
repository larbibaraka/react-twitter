import React from "react";
import baseimage from "../assets/images/baseimage.jfif";
export default function RightSideBar() {
  return (
    <div className="w-1/3 border border-gray-200 flex flex-col">
      <div className="w-full  pl-10 pr-10 mt-5 ">
        <input
          class="rounded-full py-2 px-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <div className="m-4">
        <div className="row flex flex-row">
          <div className="element h-10 w-1/3 m-1">
            <img
              className="h-12"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>

          <div className="element h-10 w-1/3 m-1">
            <img
              className=""
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
         
          <div className="element h-10 w-1/3 m-1">
            <img
              className=""
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
        </div>
        <div className="row flex flex-row">
          <div className="element w-1/3 m-1">
            <img
              className=""
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
          <div className="element w-1/3 m-1">
            <img
              className=""
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
          <div className="element w-1/3 m-1">
            <img
              className=""
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
