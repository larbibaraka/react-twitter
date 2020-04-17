import React from "react";

import baseimage from "../assets/images/baseimage.jfif";
import userprofile from "../assets/images/userprofile.jpg";
export default function RightSideBar() {
  return (
    <div className="w-1/3 border border-gray-200 flex flex-col">
      {/* search bar */}
      <div className="w-full  pl-10 pr-10 mt-5 ">
        <input
          class="rounded-full py-2 px-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      {/* some user's images */}
      <div className="w-full flex flex-col p-4">
        <div className="flex mt-1">
          <div className="mr-1">
            <img
              className="h-24 rounded-l-md border-l-1 border-t-1 border-b-1  border-gray-500"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>

          <div className="mr-1">
            <img
              className="h-24"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>

          <div className="">
            <img
              className="h-24 rounded-r-md  border-l-1 border-t-1 border-b-1 border-gray-500"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
        </div>
        <div className="flex mt-1">
          <div className="mr-1">
            <img
              className="h-24 rounded-l-md border-l-1 border-t-1 border-b-1  border-gray-500"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>

          <div className="mr-1">
            <img
              className="h-24"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>

          <div className="">
            <img
              className="h-24 rounded-r-md  border-l-1 border-t-1 border-b-1 border-gray-500"
              src={baseimage}
              alt="Baraka Larbi user background"
            />
          </div>
        </div>
      </div>
      {/* you might like */}
      <div className="rounded-lg overflow-hidden  bg-gray-100 border border-gray-300 m-4">
        <h1 className="font-sans font-bold text-xl p-4">you might like</h1>
        <hr />

        <div className="flex justify-between hover:bg-gray-300 p-4 cursor-pointer transition duration-200 ease-in border-b-2">
          <div className="flex flex-row">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={userprofile}
              alt="Baraka Larbi"
            />
            <div className="text-sm flex flex-col">
              <a className="text-black font-bold hover:underline" href="/">
                Baraka Larbi{" "}
              </a>
              <span className="text-gray-600">@laridev2016</span>
            </div>
          </div>
          <div>
            <button className="transition duration-300 ease-in  font-bold bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white rounded-full py-2 px-4 border border-blue-500 hover:border-transparent ">
              Follow
            </button>
          </div>
        </div>

        <div className="flex justify-between hover:bg-gray-300 p-4 cursor-pointer transition duration-200 ease-in border-b-2">
          <div className="flex flex-row">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={userprofile}
              alt="Baraka Larbi"
            />
            <div className="text-sm flex flex-col">
              <a className="text-black font-bold hover:underline" href="/">
                Baraka Larbi{" "}
              </a>
              <span className="text-gray-600">@laridev2016</span>
            </div>
          </div>
          <div>
            <button className="transition duration-300 ease-in font-bold bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white rounded-full py-2 px-4 border border-blue-500 hover:border-transparent ">
              Follow
            </button>
          </div>
        </div>

        <div className="flex justify-between hover:bg-gray-300 p-4 cursor-pointer">
          <a href="/" className="font-bold text-blue-500 cursor-pointer ">
            show more
          </a>
        </div>
      </div>
      {/* trends for you */}
      <div className="rounded-lg overflow-hidden  bg-gray-100 border border-gray-300 m-4">
        <h1 className="font-sans font-bold text-xl p-4">Trends for you</h1>
        <hr />

        <div className="flex justify-between hover:bg-gray-200 p-4 cursor-pointer transition duration-200 ease-in border-b-2">
          <div className="flex flex-row">
            <div className="text-sm flex flex-col">
              <span className="text-gray-600">trending in Algeria</span>
              <a className="text-black font-bold hover:underline" href="/">
                #coronavirusalgeria
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between hover:bg-gray-200 p-4 cursor-pointer transition duration-200 ease-in">
          <div className="flex flex-row">
            <div className="text-sm flex flex-col">
              <span className="text-gray-600">Politics . Trending</span>
              <a className="text-black font-bold hover:underline" href="/">
                Chine
              </a>
              <span className="text-gray-600">52.2K Tweets</span>
            </div>
          </div>
        </div>
      </div>
      {/* footer links */}
      <div className="flex flex-col p-4 ">
        <div className="links">
          <a
            href="/"
            className="ml-4 hover:underline text-gray-500 font-sans cursor-pointer"
          >
            Terms
          </a>
          <a
            href="/"
            className="ml-4 hover:underline text-gray-500 font-sans cursor-pointer"
          >
            privacy policy
          </a>
          <a
            href="/"
            className="ml-4 hover:underline text-gray-500 font-sans cursor-pointer"
          >
            cookies
          </a>
          <a
            href="/"
            className="ml-4 hover:underline text-gray-500 font-sans cursor-pointer"
          >
            ads info
          </a>
          <a
            href="/"
            className="ml-4 hover:underline text-gray-500 font-sans cursor-pointer"
          >
            More
          </a>
        </div>
        <div className="copyright mt-2">
          <span className=" ml-4  text-gray-500 font-sans">© {new Date().getFullYear()} ReactTwitter, Inc.</span>
        </div>
      </div>
    </div>
  );
}
