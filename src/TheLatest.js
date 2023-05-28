import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datac } from './ContextAPI'
import './Home.css'
import Latest from './LatestArticels'

function TheLatest() {
    let readata = useContext(Datac)
    let newdata = readata.sort(function(a,b){
        return new Date(b.Date) - new Date(a.Date);
    })
  return (
   <div>
    <h2 className='toph1'>The Latest</h2>
    <div className='latestmain'>
        <div className='childdiv'>
            <img src={newdata[0].Image} className='childimg' height='215px'/> 
        
            <Link to = {`/Blog/${newdata[0].cat}/${newdata[0].id}`} state={`${newdata[0].id}`} className='linktt' > <p className='titlelat'>{newdata[0].Name}</p></Link>
            <p className='deslat'>{newdata[0].Des}</p>
            <p className='latdate'>{newdata[0].cat} / {newdata[0].Date}</p>

        </div>
        <div className='childdiv'>
            <img src={newdata[1].Image} className = 'childimg'/>
            <Link to = {`/Blog/${newdata[1].cat}/${newdata[1].id}`} state={`${newdata[1].id}`} className='linktt'> <p className='titlelat'>{newdata[1].Name}</p></Link>
            <p className='deslat'>{newdata[1].Des}</p>
            <p className='latdate'>{newdata[1].cat} / {newdata[1].Date}</p>
        </div>
        <div className='childdiv'>
            <img src={newdata[2].Image} className = 'childimg'/>
            <Link to = {`/Blog/${newdata[0].cat}/${newdata[2].id}`} state={`${newdata[2].id}`} className='linktt' > <p className='titlelat' >{newdata[2].Name}</p></Link>
            <p className='deslat'>{newdata[2].Des}</p>
            <p className='latdate'>{newdata[2].cat} / {newdata[2].Date}</p>
        </div>
    </div>
   </div>
  )
}

export default TheLatest