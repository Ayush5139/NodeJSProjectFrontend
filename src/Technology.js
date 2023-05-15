import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import './Home.css'
import './Bollywood.css'
import TopPosts from './TopPosts'
import { Datac } from './ContextAPI'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Technology() {
  const [permData,setData] = useState([])
 let category = "Technology"
   useEffect(()=>  {
    axios.get(`https://blog-app-backend-plr1.onrender.com/${category}`)
    .then((res)=>setData(res.data))
  },[])
  return (
    <div>
      <Nav/>
      <div>
      <h1 className='toph1'>Technology</h1>
        <div className='bomain3'>
          <div>
            {
              permData.map((item)=>(
                <div className='bolmain1'>
                <div key={item.id} className= 'bolmain'>
                  <div>
                  <img src={item.Image} height='180px' width='310px' className='boimage' />
                  </div>
                  <div>
                  <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt'><p className='boname'>{item.Name}</p></Link>
                  <p className='bodes'>{item.Des}</p>
                  <p className='boyear'>{item.cat}/{item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
              ))
            }
          </div>
          <div>
            <TopPosts/>
            <div className='bolad'>
              Advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology