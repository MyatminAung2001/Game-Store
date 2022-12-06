import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper';

import TopRatedGameOne from '../assets/Top-Img.jpg'
import TopRatedGameTwo from '../assets/Top-Img-2.jpg'
import TopRatedGameThree from '../assets/Top-Img-3.jpg'
import TopRatedGameFour from '../assets/Top-Img-4.jpg'

const TopRated = () => {
    return (
        <section className="mb-10">
            <header className="text-white mb-5">
                <h3 className="font-bold text-lg mb-1 md:text-2xl">
                    Top Rated & Trending in 2k21
                </h3>
                <p className="text-sm font-light">
                    Based on players count and rating!
                </p>
            </header>
            <div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[ Autoplay ]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={TopRatedGameOne} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={TopRatedGameTwo} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={TopRatedGameThree} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={TopRatedGameFour} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};

export default TopRated;