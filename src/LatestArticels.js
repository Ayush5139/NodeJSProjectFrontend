import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Datac } from './ContextAPI'
import './Home.css';
import TopPosts from './TopPosts';

function Latest() {
  const blogdetails = useContext(Datac);
  const [permData, setData] = useState([])
    useEffect(() => {
        axios.get("https://blog-app-backend-plr1.onrender.com/latestdata")
            .then((res) => setData(res.data))
    },[])
  const latdata = blogdetails.sort(function(a,b){
      return new Date(b.Date) - new Date(a.Date);
  })
  const [show,setShow] = useState(false)

 
  return (
    <div>
      <h2 className='toph1'>Latest Article</h2>
      <div className='mainnnnn'>
        <div>
          <hr></hr>
          <div className='latmain1'>
            <div >
              <img src={latdata[0].Image} width='280px' height='243px' className='latimage'/>
            </div>
            <div>
            <Link to = {`/Blog/${latdata[0].cat}/${latdata[0].id}`} state={`${latdata[0].id}`} className='linktt' ><p className='mainlatname'>{latdata[0].Name}</p></Link>
              <p className='mainlatsub'>{latdata[0].Des}</p>
              <p className='mainlatyear'>{latdata[0].cat} / {latdata[0].Date}</p>
            </div>
          </div>
          <hr></hr>
          <div>
            {
              permData.slice(1,4).map((item) => (
                <div>
                <div className='latmain1'>
                  <div >
                    <img src={item.Image} width='280px' height='180px' className='latimage'/>
                  </div>
                  <div><Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt'><p  className='mainlatname'>{item.Name}</p></Link>
                    <p className='mainlatsub'>{item.Des}</p>
                    <p className='mainlatyear'>{item.cat} / {item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
                )
                )
            }

            {
              (show &&
              permData.slice(4,6).map((item)=>(
                <div>
                <div className='latmain1'>
                  <div >
                    <img src={item.Image} width='280px' height='180px' className='latimage'/>
                  </div>
                  <div>
                  <Link to = {`/Blog/${item.cat}/${item.id}`} state={`${item.id}`} className='linktt' ><p className='mainlatname'>{item.Name}</p></Link>
                    <p className='mainlatsub'>{item.Des}</p>
                    <p className='mainlatyear'>{item.cat} / {item.Date}</p>
                  </div>
                </div>
                <hr></hr>
                </div>
              )))
            }
          </div>
          {(show?<button onClick={()=>setShow(false)} className = "btn1"> <FaArrowUp/> Show Less</button>:<button onClick={()=>setShow(true)} className = "btn1"><FaArrowDown/> Show More</button>)}
          <div className='neydeiv'>
            <img src={latdata[0].Image} width = '850px' height='450px' className='newdivimg'/>
            <div className='neydeiv1'>
            <Link to = {`/Blog/${latdata[0].cat}/${latdata[0].id}`} state={`${latdata[0].id}`} className='linktt' ><p className='latdataname'>{latdata[0].Name}</p> <br></br></Link>
            <p className='latdatasub'>{latdata[0].cat} / {latdata[0].Date}</p>
            </div>
        </div>
        </div>
        <div className='latmain3'>
        
        <div className='latmain2'>
          <p>Advertisement</p>
        </div>
        <div>
          <TopPosts/>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Latest