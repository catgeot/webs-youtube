import React from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { mudText } from '../data/mud'

const Mud = () => {
    return (
        <Main
            title = "😍 보령머드축제 디자인"
            description = "🤬 보령머드축제 타이포 그래픽, 현수막, 배너 디자인입니다.">
            <section id='mudPage'>
                <h2>🤬 보령머드축제 타이포 그래픽, 현수막, 배너 디자인입니다.</h2>
                {mudText.map((mud, key) => (
                    <div className="detail_inner">
                        <div className="detail_img">
                            <Link to={mud.page}>
                                <img src={mud.img} alt={mud.title} />                        
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Mud