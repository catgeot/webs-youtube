import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'

const Home = () => {
     return (
        <Main 
            title="포트폴리오" 
            description="포트폴리오에 오신것을 환영합니다."
        >
            <Today />
            <Developer />     
            <VideoSlider videos={webdText} title='웹디자인 기능사 준비는 이걸로 끝!' id='webd' /> 
            <VideoSlider videos={websiteText} title='웹표준 사이트 튜토리얼 강의입니다.' id='website' /> 
            <VideoSlider videos={gsapText} title='GSAP 사이트 튜토리얼 강의입니다.' id='gsap' /> 
            <VideoSlider videos={portfolioText} title='포트폴리오 사이트 튜토리얼 강의입니다.' id='portfolio' /> 
            <VideoSlider videos={youtubeText} title='유튜브 사이트 튜토리얼 강의입니다.' id='youtube' />             
        </Main>  
    )
}

export default Home