import React from 'react'
import Main from '../components/section/Main'
import { incheonText } from '../data/incheon'
import { Link } from 'react-router-dom'

const Incheon = () => {
    return (
        <Main
            title = "🤑 인천세계축전 디자인"
            description = "🤑 인천세계축전 리플렛 디자인">
            <section id='incheonPage'>
                <h2>🤑 인천세계축전 리플렛 디자인</h2>
                {incheonText.map((incheon, key) => (
                    <div className="detail_inner">
                        <div className="detail_img">
                            <Link to={incheon.page}>
                                <img src={incheon.img} alt={incheon.title} />
                            </Link>
                        </div>                        
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Incheon