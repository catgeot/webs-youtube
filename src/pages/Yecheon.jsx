import React from 'react'
import Main from '../components/section/Main'
import { yecheonText } from '../data/yecheon'
import { Link } from 'react-router-dom'

const Yecheon = () => {
    return (
        <Main 
            title = "예천활축제 디자인"
            description = "예천활축제 리플렛 디자인">
            <section id='yecheonPage'>
                <h2>😂 예천활축제 리플렛 디자인</h2>
                {yecheonText.map((yecheon, key) => (
                    <div className="detail_inner" key={key}>
                        <div className="detail_img">
                            <Link to={yecheon.page}>
                                <img src={yecheon.img} alt={yecheon.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Yecheon