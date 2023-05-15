import React, { useContext } from 'react'
import Bollywood from './Bollywood'
import HomePage from './HomePage'
import Latest1 from './Latest1'
import LatestArticels from './LatestArticels'
import Nav from './Nav'
import TheLatest from './TheLatest'
import TopPosts from './TopPosts'

function Home() {
  return (
    <div className='homeee'>
      <Nav/>
      <HomePage/>
      <TheLatest/>
      <LatestArticels/>
      <Latest1/>

    </div>
  )
}

export default Home 