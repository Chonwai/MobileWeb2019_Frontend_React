import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <header className="w-screen h-14 bg-blue-500 text-white flex justify-center items-center fixed top-0 left-0">
                <p className="text-lg">三盞燈之家</p>
            </header>
        )
    }
}

export default Header