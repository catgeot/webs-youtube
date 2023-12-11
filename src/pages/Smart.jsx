import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { smartText } from '../data/smart'

const Smart = () => {
  return (
    <Main 
        title = "😎스마트폰 111캠페인"
        description = "😁 스마트폰 111캠페인 디자인입니다.">
        <section id='smartPage'>
            <h2>😁 스마트폰 111캠페인 디자인입니다.</h2>
            {smartText.map((smart, key) => (
                <div className="detail_inner" key={key}>
                    <div className="detail_img">
                        <Link to={smart.page}>
                            <img src={smart.img} alt={smart.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>

    </Main>
  )
}

export default Smart