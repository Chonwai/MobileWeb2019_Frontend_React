import React, { Component } from 'react'
import MainBannerSwiper from '../../Components/MainBannerSwiper/index'
import MainNavigation from '../../Components/MainNavigation/index'

class Home extends Component {
    render () {
        return (
            <div className="w-screen">
                <MainBannerSwiper />
                <MainNavigation />
            </div>
        )
    }
}

export default Home