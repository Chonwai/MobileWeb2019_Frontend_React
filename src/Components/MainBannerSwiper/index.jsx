import React, {Component} from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'

export class MainBannerSwiper extends Component {
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination'
            }
        });
    }
    render() {
        return (
            <section className="swiper-component">
                <div className="swiper-container w-screen h-72">
                    <div className="swiper-wrapper w-screen h-72 opacity-90">
                        <div className="swiper-slide">
                            <img
                                className="w-full h-full object-center object-cover opacity-90"
                                src="https://img1.qunarzz.com/travel/poi/1507/91/745bf2de1c7817.jpg_480x360x95_5a1a27a2.jpg"
                                alt="三𦾟燈"/>
                        </div>
                        <div className="swiper-slide">
                            <img
                                className="w-full h-full object-center object-cover opacity-90"
                                src="https://travel.ulifestyle.com.hk/cms/spots_photo/original/20131206143324_0_1.jpg"
                                alt="三𦾟燈"/>
                        </div>
                        <div className="swiper-slide">
                            <img
                                className="w-full h-full object-center object-cover opacity-90"
                                src="https://www.iam.gov.mo/showFile.ashx?w=210&h=0&p=cityguide/Photos/634853933638115.jpg"
                                alt="三𦾟燈"/>
                        </div>
                        <div className="swiper-slide">
                            <img
                                className="w-full h-full object-center object-cover opacity-90"
                                src="https://imgs.gotrip.hk/wp-content/uploads/2016/07/macau_food28.jpg"
                                alt="三𦾟燈"/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }
}

export default MainBannerSwiper
