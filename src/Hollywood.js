import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Datac } from './ContextAPI'
import Nav from './Nav'
import TopPosts from './TopPosts'

function Hollywood() {
  const [permData,setpermData] = useState([])
  let category = "Hollywood"
  useEffect( ()=>  {
    axios.get(`https://blog-app-backend-plr1.onrender.com/${category}`)
    .then((res)=>setpermData(res.data))
  },[])
  


  return (
    <div>
      <Nav />
      <div>
        <h1 className='toph1'>Hollywood</h1>
        <div className='bomain3'>
          <div>
            {
              permData.map((item) => (
                <div className='bolmain1'>
                  <div key={item.id} className='bolmain'>
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

export default Hollywood