import React, { useState } from 'react'

function Navbar() {

  const [open, setOpen] = useState(false);

  const container = document.getElementsByClassName("container");

  const handleSidebar = () => {
    setOpen(!open);

    container[0].classList.toggle('container-shrink')

  }

  return (
    <>
      <span className='sidebar-toggle' onClick={handleSidebar}>{open ? ">" : "<"}</span>
      
      <nav style={{transform:`${open? 'translateX(0%)' : 'translateX(140%)'}`}} className='sidebar'>



        <div className='sidebar-wrapper'>
          <div className="sidebar-logo">
            <span>Blogs App</span>
          </div>
          <ul>
            <li>Home</li>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Report</li>
          </ul>
        </div>
      </nav>
    </>
    
  )
}

export default Navbar