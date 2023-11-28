import React, { useEffect, useState } from 'react'

import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const Developer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    const developerClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <section id='developer' className={developerClass}>
        <h2>추천개발자를 소개합니다.</h2>
        <div className="developer_inner">
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 15 
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 15 
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 15 
                    },
                    1240: {
                        slidesPerView: 8,
                        spaceBetween: 15 
                    },
                    1640: {
                        slidesPerView: 9,
                        spaceBetween: 15 
                    },
                    2000: {
                        slidesPerView: 10,
                        spaceBetween: 15 
                    }
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >                 
                {developerText.map((developer, key) =>(
                    <SwiperSlide key={key}>
                        <div className="developer">
                            <div className="developer_img play_icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer_info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div> 
                    </SwiperSlide>            
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Developer