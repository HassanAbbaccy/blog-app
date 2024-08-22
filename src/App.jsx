
import './App.css'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CreatePost from './components/CreatePost'

function App() {
  

  return (
    <div className='app-container'>
    <SideBar></SideBar>
    <div className='content'>
    <Navbar></Navbar>
    <CreatePost></CreatePost>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App
