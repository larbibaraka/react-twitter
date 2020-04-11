import React from "react";

export default function RightSideBar() {
  return (
    <div className="w-1/3 border border-gray-200 flex flex-col">
   
        <div class="w-full  pl-10 pr-10 mt-5 ">
          <input
            class="rounded-full py-2 px-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="search"
          />
        </div>
  
    </div>
  );
}
