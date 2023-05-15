import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Datac } from './ContextAPI'

function Latest1() {
    const newdata = useContext(Datac)
    const [permData, setData] = useState([])
    useEffect(() => {
        axios.get("https://blog-app-backend-plr1.onrender.com/latestdata")
            .then((res) => setData(res.data))
    },[])
    const newdata2 = newdata.sort(function (a, b) {
        return new Date(b.Date) - new Date(a.Date);
    })
    console.log("sorted",newdata2)
    
    return (
        <div>
            <div className='blogdiv2' >
                <p className='moresiren'>Latest Articels</p>
                <hr></hr>
                {
                    <div className='test1'>
                        <div className='newdiv'>
                            <Link to={`/Blog/${newdata2[0].cat}/${newdata2[0].id}`} state={`${newdata2[0].id}`} className='linktt'>
                                <p className='morename'> {newdata2[0].Name}</p>
                                <p className='moredes'>{newdata2[0].Des}</p>
                            </Link>
                            <div className='testchild'>
                                <p className='testp'>{newdata2[0].cat}<br></br>{newdata2[0].dater}  {newdata2[0].lastread}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='newdiv'>
                            <Link to={`/Blog/${newdata2[1].cat}/${newdata2[1].id}`} state={`${newdata2[1].id}`} className='linktt'>
                                <p className='morename'> {newdata2[1].Name}</p>
                                <p className='moredes'>{newdata2[1].Des}</p>
                            </Link>
                            <div className='testchild'>
                                <p className='testp'>{newdata2[1].cat}<br></br>{newdata2[1].dater}  {newdata2[1].lastread}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='newdiv'>
                            <Link to={`/Blog/${newdata2[2].cat}/${newdata2[2].id}`} state={`${newdata2[2].id}`} className='linktt'>
                                <p className='morename'> {newdata2[2].Name}</p>
                                <p className='moredes'>{newdata2[2].Des}</p>
                            </Link>
                            <div className='testchild'>
                                <p className='testp'>{newdata2[2].cat}<br></br>{newdata2[2].dater}  {newdata2[2].lastread}</p>
                            </div>
                        </div>

                    </div>

                }

            </div>
        </div>
    )
}

export default Latest1