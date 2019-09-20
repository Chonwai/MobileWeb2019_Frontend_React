import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class FooterNav extends Component {
    render() {
        return (
            <footer
                className="w-screen h-14 bg-blue-500 flex fixed absolute bottom-0 left-0"
                id="footer">
                <Link className="flex-1 flex justify-center items-center h-full" to="/">
                    Home
                </Link>
                <Link className="flex-1 flex justify-center items-center h-full" to="/post">
                    Post
                </Link>
                <Link className="flex-1 flex justify-center items-center h-full" to="/about">
                    About
                </Link>
            </footer>
        );
    }
}