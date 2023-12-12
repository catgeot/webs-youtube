import React, { useEffect, useState } from 'react'

import { catgeotText } from '../../data/catgeot'

import { Link } from 'react-router-dom'

const Catgeot = ({video, id}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    const catgeotClass = loading ? 'isLoading' : 'isLoaded'
    return (
        <section id='catgeot' className={catgeotClass}>
            <h2>👁‍🗨 Catgeot 포트폴리오 유튜브입니다.</h2>
            <div className="video_inner">
                {catgeotText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video_thumb play_icon">
                            <Link to={video.page}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}               
            </div>
        </section>
    )
}

export default Catgeot