import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bollywood from './Bollywood'
import Fitness from './Fitness'
import Food from './Food'
import Hollywood from './Hollywood'
import Home from './Home'
import Technology from './Technology'
import ContextAPI from './ContextAPI'
import BlogPage from './BlogPage'

function Routing() {
  return (
    <div>
        <div>
          
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/Bollywood' element = {<Bollywood/>}/>\
                <Route path='/Hollywood' element = {<Hollywood/>}/>
                <Route path='/Technology' element ={<Technology/>}/>
                <Route path='/Fitness' element = {<Fitness/>}/>
                <Route path='/Food' element = {<Food/>}/>
                <Route path='/Blog/:cat/:id' element = {<BlogPage/>}/>
             </Routes>
          
        </div>
    </div>
  )
}

export default Routing