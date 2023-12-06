import React from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/videos/VideoCard'

import { webdText } from '../data/webd'

const Webd = () => {
    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다.">
            
            <section id='webdPage'>
                <h2>😄 웹디자인기능사 한번에 따자!</h2>
                <div className="video_inner">
                    <VideoCard videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd