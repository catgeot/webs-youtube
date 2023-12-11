import React from 'react'
import { museumText } from '../data/museum'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Museum = () => {
  return (
    <Main
        title = "뮤지엄 티켓 디자인"
        description = "원주 안도타다오 뮤지엄 티켓 디자인">
        <section id='museumPage'>
            <h2>🥵 원주 안도타다오 뮤지엄 티켓 디자인</h2>
            {museumText.map((museum, key) => (
                <div className="detail_inner">
                    <div className="detail_img">
                        <Link to={museum.page}>
                            <img src={museum.img} alt={museum.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    </Main>
  )
}

export default Museum