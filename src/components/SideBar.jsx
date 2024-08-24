import React from 'react'

const SideBar = ({ home, setHome }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "180px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">Blog App</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className={`nav-link text-white ${home === 'Home' && 'active'}`} aria-current="page" onClick={() =>{setHome('Home')}}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className={`nav-link text-white ${home === 'Create Post' && 'active'}`} aria-current="page" onClick={() =>{setHome('Create Post')}}>
          Create Post
        </a>
      </li>
      
    </ul>
    <hr/>
  </div>
  ) 
}

export default SideBar