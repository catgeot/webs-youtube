import React from 'react'
import Main from '../components/section/Main'

const Smart111 = () => {
  return (
    <Main
        title = "스마트111"
        description = "스마트폰 111 홍보 디자인입니다.">
        
        <section id='smart111Page'>
            <h2>😍 스마트폰 111 홍보 디자인입니다.</h2>
            {smart111Text.map((smart111, key) => (
                <div className="smart111_inner">
                    <div className="smart111_Img">
                        <img src="../assets/img/catgeot/smart111/smart111.jpg" alt="smart111" />
                    </div>
                </div>
            ))}
            
        </section>
    </Main>
  )
}

export default Smart111
