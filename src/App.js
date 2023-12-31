import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Catgeot = lazy(() => import('./pages/Catgeot'));
const Smart = lazy(() => import('./pages/Smart'));
const Mud = lazy(() => import('./pages/Mud'));
const Incheon = lazy(() => import('./pages/Incheon'));
const Yecheon = lazy(() => import('./pages/Yecheon'));
const Cat = lazy(() => import('./pages/Cat'));
const Plants = lazy(() => import('./pages/Plants'));
const Museum = lazy(() => import('./pages/Museum'));
const Bbum = lazy(() => import('./pages/Bbum'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/catgeot' element={<Catgeot/>} />
          <Route path='/smart' element={<Smart/>} />
          <Route path='/mud' element={<Mud/>} />
          <Route path='/incheon' element={<Incheon/>} />
          <Route path='/yecheon' element={<Yecheon/>} />
          <Route path='/cat' element={<Cat/>} />
          <Route path='/plants' element={<Plants/>} />
          <Route path='/museum' element={<Museum/>} />
          <Route path='/bbum' element={<Bbum/>} />
          <Route path='/today' element={<Today/>} />
          <Route path='/developer' element={<Developer/>} />
          <Route path='/webd' element={<Webd/>} />
          <Route path='/website' element={<Website/>} />
          <Route path='/gsap' element={<Gsap/>} />
          <Route path='/port' element={<Port/>} />
          <Route path='/youtube' element={<Youtube/>} />
          <Route path='/channel/:channelID' element={<Channel/>} />
          <Route path='/video/:videoID' element={<Video/>} />
          <Route path='/search/:searchID' element={<Search/>} />
          <Route path='/*' element={<Not/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App