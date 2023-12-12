import React from 'react'
import Main from '../components/section/Main'
import { plantsText } from '../data/plants'
import { Link } from 'react-router-dom'

const Plants = () => {
    return (
        <Main 
            title = "상세페이지 디자인"
            description = "반려식물키우기 상세페이지 디자인">
                <section id='plantsPage'>
                    <h2>🌷 반려식물키우기 상세페이지 디자인</h2>
                    {plantsText.map((Plants, key) => (
                        <div className="detail_inner" key={key}>
                            <div className="detail_img">
                                <Link to={Plants.page}>
                                    <img src={Plants.img} alt={Plants.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
        </Main>
    )
}

export default Plants