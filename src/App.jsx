
import './App.css'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'

function App() {
  const [home, setHome]= useState("Create Post");

  return (
    <div className='app-container'>
    <SideBar home={home} setHome={setHome}></SideBar>
    <div className='content'>
    <Navbar></Navbar>
    {home === "Home" ? <PostList></PostList>:  <CreatePost></CreatePost>}
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App
