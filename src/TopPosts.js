import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Datac } from './ContextAPI'
import './Home.css'
import { FaBeer } from 'react-icons/fa'
import axios from 'axios'

function TopPosts() {
    const readata = useContext(Datac)
    const NewData = readata.sort((a,b)=> b.Likes -a.Likes)
    const [permData, setData] = useState([])
    useEffect(() => {
        axios.get("https://blog-app-backend-plr1.onrender.com/toppost")
            .then((res) => setData(res.data))
    },[])
    // console.log(NewData)
  return (
    <div><h1 className='toph1'>Top Posts</h1>
      <div>
        <div>
          <img src={NewData[0].Image} width = '300px' className='topimg'/>
          <Link to = {`/Blog/${NewData[0].cat}/${NewData[0].id}`} state={`${NewData[0].id}`} className='linktt' ><p className='mainname'>{NewData[0].Name}</p></Link>
          <p className='topyr1'>{NewData[0].cat} / {NewData[0].Year}</p>
        </div>
        <hr></hr>
        <div>
          {
            permData.slice(0,4).map((item)=>(
              <div>
              <div className='imgdiv'>
                <div>
                <img src={item.Image} className = 'imggg'/>
                </div>
                <div>
                <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt'><p className='topname'>{item.Name}</p></Link>
                  <p className='topyear'>{item.cat} / {item.Year}</p>
                </div>
              </div>
              <hr></hr>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopPosts