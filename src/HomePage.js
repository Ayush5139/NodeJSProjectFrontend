import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Datac } from './ContextAPI';
import './Home.css'
import TheLatest from './TheLatest';

function HomePage() {
  let readata2 = useContext(Datac);
  let readata1 = readata2.sort((a, b) => a.id - b.id)
  console.log("Unsorted:", readata1);
  return (
    <div>
      <div className='mainhome'>
        <div className='homediv1'>
          
        <Link to = {`/Blog/${readata1[0].cat}/${readata1[0].id}`} state={`${readata1[0].id}`} className ='linktt' >
          <p className='title'>{readata1[0].Name}</p> <br></br>
          <p className='sub'>{readata1[0].cat}/{readata1[0].Date}</p>
          </Link>
        </div>
        <div >
          <div className='homediv2'>
          <Link to = {`/Blog/${readata1[3].cat}/${readata1[3].id}`} state={`${readata1[3].id}`} className ='linktt' >
            <p className='title'>{readata1[3].Name}</p>
            <p className='sub'>{readata1[3].cat} / {readata1[3].Date}</p>
            </Link>
          </div>
          <div className='homediv3'>
          <Link to = {`/Blog/${readata1[4].cat}/${readata1[4].id}`} state={`${readata1[4].id}`}  className ='linktt'>
            <p className='title'>{readata1[4].Name}</p>
            <p className='sub'>{readata1[4].cat} / {readata1[4].Date}</p>
            </Link>
          </div>
        </div>
      </div>
      <hr></hr>

    </div>
  )
}

export default HomePage