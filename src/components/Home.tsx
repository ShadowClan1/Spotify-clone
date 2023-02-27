import React , {useContext, useEffect, useState} from 'react'
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom'
import context1 from '../context/Context1'
import disc from '../media/disc.png'
import sing from '../media/nav1.png'
import {AiFillHome, AiFillHeart, AiOutlineSearch, } from 'react-icons/ai'
import {RiPlayListFill} from 'react-icons/ri'
import Content from './Content'
import Search from './Search'

import Fav from './Fav'
import PlayList from './PlayList'
type Props = {}

type fun = {
  fetchFunction() : any
}

function Home({}: Props) {
    const navigate = useNavigate();
  const context = useContext(context1);


const {loadFav, data, setData, fetchFunction} = context;


  // const {fetchFunction : fun } = context;
 
    useEffect(() => {
     
      loadFav();
fetchFunction();



    }, [])
    
  return (
    <div className='home-container'>

<div className="sidebar">
<div className="profile">
                <img src={disc} alt="disc"/>
                <h3>Welcome user</h3>
                <p>Music</p>
            </div>


            <ul>
                <li>
                    <NavLink to='/' >
                        <span className="icon"><AiFillHome/></span>
                        <span className="item">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink end to='/search'>
                        <span className="icon"><AiOutlineSearch/></span>
                        <span className="item">search</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fav'>
                        <span className="icon">

<AiFillHeart/>

                        </span>
                        <span className="item">Fav</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/playlist'>
                        <span className="icon"><RiPlayListFill/></span>
                        <span className="item">playlist</span>
                    </NavLink>
                </li>
               
            </ul>
        </div>


        <div className="section">
                    <div className="top_navbar">
                  <img src={sing} alt='sing' />
                    </div>
        




                </div>

                <div className='content-container'>

                    <Routes>

<Route path='/' element={<Content  data={data} />} />

<Route  path='/search' element={<Search/>}/>
<Route  path='/fav' element={<Fav />}/>
<Route  path='/playlist' element={<PlayList />}/>

                    </Routes>



                </div>
        </div>


   
  )
}

export default Home