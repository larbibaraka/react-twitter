import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot} from '@fortawesome/free-solid-svg-icons';
import { faHashtag} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faList} from '@fortawesome/free-solid-svg-icons';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

export default function LeftSideBar() {
    return (
        <div className="w-1/5 flex flex-col">  
        <div className="w-16 ml-12 mt-10">
        <span className="transition duration-300 ease-in border-white h-16 w-16 flex items-center justify-center rounded-full hover:bg-blue-500 cursor-pointer text-blue-500 text-4xl  hover:text-white">
            <FontAwesomeIcon icon={faRobot} />
        </span>
        </div>
            <ul className="flex flex-col">
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faHome} /></span>Acceil</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faHashtag} /></span>Explore</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faBell} /></span>Notification</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faEnvelope} /></span>Messages</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faBookmark} /></span>Signets</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faList} /></span>Listes</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span></span>Profile</a></li>
                <li className="m-4"><a className="text-center font-bold transition duration-100 ease-in border-white rounded-full hover:bg-blue-100 hover:text-blue-500 pt-4 pb-4 pr-8 pl-8" href="/"><span className="text-black mr-4 text-xl"><FontAwesomeIcon icon={faEllipsisH} /></span>Plus</a></li>
            </ul>    
        </div>
       )
}
