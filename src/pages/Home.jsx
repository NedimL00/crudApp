import React from 'react'
import Blogs from '../components/blogs/Blogs'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Blogs />        
      </div>

    </>
  )
}

export default Home