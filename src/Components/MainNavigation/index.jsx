import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import ChatIcon from '../../Images/chat.png';
import AddIcon from '../../Images/pencil.png';
import placeholderIcon from '../../Images/placeholder.png';

export class MainNavigation extends Component {
    render() {
        return (
            <nav
                className="home-nav-container w-screen h-32 justify-center items-center flex flex-row">
                <Link
                    className="flex w-1/3 h-24 justify-center items-center m-2 flex-col"
                    to="/forum">
                    <img className="p-2 w-16 h-12 object-center object-contain" src={ChatIcon} alt="論壇"/>
                    <p className="mt-2 font-bold text-gray-800">論壇</p>
                </Link>
                <Link
                    className="flex w-1/3 h-24 justify-center items-center m-2 flex-col"
                    to="/post">
                    <img className="p-2 w-16 h-12 object-center object-contain" src={AddIcon} alt="論壇"/>
                    <p className="mt-2 font-bold text-gray-800">發表</p>
                </Link>
                <Link
                    className="flex w-1/3 h-24 justify-center items-center m-2 flex-col"
                    to="/shop">
                    <img className="p-2 w-16 h-12 object-center object-contain" src={placeholderIcon} alt="論壇"/>
                    <p className="mt-2 font-bold text-gray-800">店鋪</p>
                </Link>
            </nav>
        )
    }
}

export default MainNavigation
