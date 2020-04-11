import React from 'react'

export default function LeftSideBar() {
    return (
    
            <ul className="flex flex-col">
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Acceil</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Explore</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Notification</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Messages</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Signets</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Listes</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Profile</a></li>
                <li className=""><a className="text-center block border rounded-full hover:border-red-600  py-2" href="/">Plus</a></li>
            </ul>    
   
    )
}
