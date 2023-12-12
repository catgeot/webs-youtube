import React from 'react'
import Main from '../components/section/Main'
import { bbumText } from '../data/bbum'
import { Link } from 'react-router-dom'

const Bbum = () => {
  return (
    <Main
        title = "이모티콘 디자인"
        description = "이모티콘 디자인 뿜뿌">
        <section id='bbumPage'>
            <h2>🥵 SNS이모티콘 디자인 뿜뿌</h2>
            {bbumText.map((bbum, key) => (
                <div className="detail_inner" key={key}>
                    <div className="detail_img">
                        <Link to={bbum.page}>
                            <img src={bbum.img} alt={bbum.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    </Main>
  )
}

export default Bbum