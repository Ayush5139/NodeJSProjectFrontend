import React, { useState } from 'react'
import { FaAngleDoubleRight, FaArrowDown, FaArrowUp, FaBackward } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './Home.css'

function NAV() {
  const [click,setclick]=useState(true)
  const [display,setdisplay] = useState("none")
  
  function setfalse(){
    setdisplay("none")
    setclick(true)
  }

  function settrue(){
    setclick(false)
    setdisplay("block")
  }
  return (
    <div className='navdiv'>
         <div>
          <div className='linkdiv'>
            <Link to='/' className='linktt'><p className='p1'><span className = 's1'>The</span>Siren</p></Link>
            {
              (click?<button onClick={settrue} className='hidebut'><FaArrowDown/></button>:<button onClick={setfalse} className='hidebut'><FaArrowUp/></button>)
            }
            </div>
            <div className='div3'> 
            <Link to='/' className='linktt'>Home</Link>
            <Link to='/Bollywood' className='linktt'>Bollywood</Link>
            <Link to='/Technology' className='linktt'>Technology</Link>
            <Link to='/Hollywood' className='linktt'>Hollywood</Link>
            <Link to='/Fitness' className='linktt'>Fitness</Link>
            <Link to='/Food' className='linktt'>Food</Link>
            <hr className='linkh1'></hr>
        </div>
          <div className='div2' style={{display: display}}> 
            <Link to='/' className='linktt'>Home</Link>
            <Link to='/Bollywood' className='linktt'>Bollywood</Link>
            <Link to='/Technology' className='linktt'>Technology</Link>
            <Link to='/Hollywood' className='linktt'>Hollywood</Link>
            <Link to='/Fitness' className='linktt'>Fitness</Link>
            <Link to='/Food' className='linktt'>Food</Link>
            <hr className='linkh1'></hr>
        </div>
        <div></div>

            <hr className='linkh2'></hr>
        </div>
    </div>
  )
}

export default NAV