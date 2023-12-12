import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { catText } from '../data/cat'

const Cat = () => {
    return (
        <Main
            title = "상세페이지 디자인"
            description = "고양이모래 상세페이지 디자인">
            <section id='catPage'>
                <h2>🥵 고양이모래 상세페이지 디자인</h2>
                {catText.map((cat, key) => (
                    <div className="detail_inner" key={key}>
                        <div className="detail_img">
                            <Link to={cat.page}>
                                <img src={cat.img} alt={cat.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Cat