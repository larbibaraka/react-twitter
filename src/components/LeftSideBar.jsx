import React from 'react'

export default function LeftSideBar() {
    return (
        <div className="w-1/6">  
            <ul className="flex flex-col">
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Acceil</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Explore</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Notification</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Messages</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Signets</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Listes</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Profile</a></li>
                <li className="m-4"><a className="text-center  border-white rounded-full hover:bg-blue-400  pt-2 pb-2 pr-8 pl-8" href="/">Plus</a></li>
            </ul>    
        </div>
       )
}
