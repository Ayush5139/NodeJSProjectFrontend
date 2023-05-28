import React, { useContext } from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Datac } from './ContextAPI'
import './BlogPage.css'
import { AiOutlineLike } from "react-icons/ai";


function BlogPage() {
    let data = useLocation()
    // console.log(data.state)
    let dataid = data.state
    const readata = useContext(Datac)
    // console.log(readata)
    const newdata = readata.filter(item=>item.id==data.state)
    // console.log(newdata)
    const datacat = newdata[0].cat
    const newdata2 = readata.filter(item=>item.cat==datacat && item.id!=dataid)
    // console.log(datacat)
    // let urlll = useParams()
    // console.log(urlll.cat)

  return (
    <div>
        <div className='margin'>
        <div className='blogdiv1'>
           <Link to='/' className='linktt'> <p className='p12'><span className='s12'>The</span>Siren</p> </Link>
        </div>
        <p className='blogh1'>{dataid}      {newdata[0].Name}</p>
        <div className='autdiv1'>
        <div className='autdiv'>
            <img src={newdata[0].AImage} height='100px' width='100px'/>   
            <p className='bogp11'>{newdata[0].author}</p>
            <div className='datdiv'><p>{newdata[0].dater} <br></br> {newdata[0].lastread}</p></div>
        </div>
        <div className='imgtest1'>
            <img src={newdata[0].imginsta} className='logo'/> 
            <img src={newdata[0].imgface} className='logo'/> 
            <img src={newdata[0].imgtwi} className='logo'/> 
            <img src={newdata[0].imgyou} className='logo'/> 
        </div>
        </div>
        <div>
            <img src={newdata[0].Image} className = 'image'/>
            <p className='pblog'>
                {newdata[0].Des}
            </p>
        </div>
        <div>
        <img src={newdata[0].image2} className = 'image2'/>
        </div>
        <div className='likediv'>
            <p className='plike'>{newdata[0].tags}</p>
            <p className='plike'><AiOutlineLike/>        {newdata[0].Likes} Likes</p>
        </div>
        <div className='autdiv2'>
            <img src={newdata[0].AImage} height='100px' width='100px'/>
            <div className='datdiv1'>
            <p className='bogp1'><b>Written By :-  {newdata[0].author}</b></p>
                <p className='blogdate'>{newdata[0].dater}<br></br>{newdata[0].lastread}</p></div>
        </div>
        <div  className = "iiiiiii">
            <p className='moresiren'>More From Siren</p>
            <hr></hr>
            {
                    <div className='test1'>
                        <div className='newdiv'>
                            <p className='related'><b>Related To {newdata[0].cat} </b></p>
                        <img src={newdata2[0].Image} width='300px' height='180px'/>
                        <Link to = {`/Blog/${newdata2[0].cat}/${newdata2[0].id}`} state={`${newdata2[0].id}`} className='linktt'>
                        <p className='morename'> {newdata2[0].Name}</p>
                        </Link>
                        <div className='testchild'>
                            <img src={newdata2[0].AImage} height='80px' />
                            <p className='testp'>{newdata2[0].author}<br></br>{newdata2[0].dater}  {newdata2[0].lastread}</p>
                        </div>
                        </div>
                        <div className='newdiv'>
                        <p className='related'><b>Related Reads</b></p>
                        <img src={newdata2[1].Image} width='300px' height='180px'/>
                        <Link to = {`/Blog/${newdata2[1].cat}/${newdata2[1].id}`} state={`${newdata2[1].id}`} className='linktt'>
                        <p className='morename'> {newdata2[1].Name}</p>
                        </Link>
                        <div className='testchild'>
                            <img src={newdata2[1].AImage} height='80px' />
                            <p className='testp'>{newdata2[1].author}<br></br>{newdata2[1].dater}  {newdata2[1].lastread}</p>
                        </div>
                        </div>  
                        <div className='newdiv'>
                        <p className='related'><b>Related Reads</b></p>
                        <img src={newdata2[2].Image} width='300px' height='180px'/>
                        <Link to = {`/Blog/${newdata2[2].cat}/${newdata2[2].id}`} state={`${newdata2[2].id}`} className='linktt'>
                        <p className='morename'> {newdata2[2].Name}</p>
                        </Link>
                        <div className='testchild'>
                            <img src={newdata2[2].AImage} height='80px' />
                            <p className='testp'>{newdata2[2].author}<br></br>{newdata2[2].dater}  {newdata2[2].lastread}</p>
                        </div>
                        </div>

                    </div>
                
            }
      
        </div>
        </div>
    </div>
  )
}

export default BlogPage