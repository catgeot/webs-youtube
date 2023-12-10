import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { catgeotText } from '../data/catgeot'
import { Link } from 'react-router-dom'

const Catgeot = () => {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const catgeotPageClass = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main
        title = "🙀 Catgeot의 포트폴리오"
        description = "🙀Catgeot의 포트폴리오 작업물입니다."        
    >

        <section id='catgeotPage' className={catgeotPageClass}>
            <h2>🙀Catgeot의 포트폴리오 작업물입니다.</h2>
            {catgeotText.map((catgeot, key) => (
                <div className="catgeot_inner" key={key}>
                    <div className="catgeot_thumb play_icon">
                        <Link to={catgeot.page}>
                            <img src={catgeot.img} alt={catgeot.title} />
                        </Link>
                    </div>
                    <div className="catgeot_text">
                        <span className='catgeot'>Catgeot!</span>
                        <h3 className='title'>
                            <Link to={catgeot.page}>
                                {catgeot.title}
                            </Link>
                        </h3>
                        <p className='desc'>{catgeot.desc}</p>
                        <div className="info">
                            <span className='author'>
                                <Link to={catgeot.page}>
                                    {catgeot.author}
                                </Link>
                            </span>
                            <span className='date'>{catgeot.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </Main>
  )
}

export default Catgeot
