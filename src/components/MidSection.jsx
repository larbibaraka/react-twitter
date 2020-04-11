import React from "react";
import baseimage from "../assets/images/baseimage.jfif";
import userprofile from "../assets/images/userprofile.jpg";
export default function MidSection() {
  return (
    <div className="w-1/2 border border-gray-300 flex flex-col">
      <div className="flex p-1 ">
        <span className="border-white h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-200 cursor-pointer text-blue-300 text-2xl hover:text-blue-400 ml-2 mr-2 mt-2">
          &#8592;
        </span>
        <div className="flex flex-col">
          <h1 className="text-1xl font-bold mt-2">Baraka Larbi</h1>
          <span className="text-gray-600 text-sm">180 Tweets</span>
        </div>
      </div>
      <div className="background-pic">
        <img
          className="w-full"
          src={baseimage}
          alt="Baraka Larbi user background"
        />

        <img
          className="userpic w-32 h-32 border-white border-solid border-4 rounded-full"
          src={userprofile}
          alt="Baraka Larbi user background"
        />
      </div>
      <div className="flex justify-end -mt-10 mr-2">
        <button className="bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white rounded-full py-2 px-4 border border-blue-500 hover:border-transparent ">
          Editer le profile
        </button>
      </div>
      <div className="userinfo container m-2 p-2">
        <div className="mt-2">
          <p className="text-gray-900 leading-none text-xl font-bold">
            Baraka Larbi
          </p>
          <p className="text-gray-600">@laridev2016</p>
        </div>
        <div className=" mt-2 w-8/12">
          <p className="font-sans font-normal">
            <a className="text-blue-700 font-medium" href="/">
              #BarakaLarbi
            </a>{" "}
            A coffe Lover , React js Developer ,😋😋😋😋😋 i love Panda, green
            color, Martial arts (Aikido)
          </p>
        </div>
        <div className="mt-3 w-8/12">
          <p className="font-sans text-gray-600 mr-2 font-medium">
            <span className="mr-4">Bougara</span>
            <span className="mr-4">Born October 7, 1992</span>
            <span className="mr-4">Joined April 2017</span>
          </p>
        </div>
        <div className="mt-3 w-8/12 ">
            <a className="font-sans text-gray-600 mr-2 hover:underline " href="/"><span className="font-bold mr-1 text-black">68</span>Following</a>
            <a className="font-sans text-gray-600  hover:underline " href="/"><span className="font-bold mr-1 text-black">25</span>Followers</a>
        </div>
      </div>
      <ul className="navigation flex ">
        <li className="cursor-pointer w-full hover:bg-blue-200 border-b-2 border-blue-500 p-4 text-center text-blue-500"><a href="/">Tweets</a></li>
        <li className="cursor-pointer w-full hover:bg-blue-200  p-4 text-center text-blue-500"><a href="/">Tweets & replies</a></li>
        <li className="cursor-pointer w-full hover:bg-blue-200  p-4 text-center text-blue-500"><a href="/">Media</a></li>
        <li className="cursor-pointer w-full hover:bg-blue-200  p-4 text-center text-blue-500"><a href="/">Likes</a></li>
      </ul>  
    </div>
  );
}
