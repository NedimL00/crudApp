import React from 'react'

function Card({blog, handleDelete, handleEdit}) {


  return (
    <div className='card glass-look'>
      <h1 className='card-title'>{blog.title}</h1>
      <p className='card-content'>{blog.content}</p>
      <p className='card-author'>- {blog.author}</p>
      <div className='card-btn-wrapper'>
        <button className='card-btn card-btn-edit' onClick={()=>handleEdit(blog)}>Edit</button>
        <button className='card-btn card-btn-delete' onClick={()=>handleDelete(blog.id)} >Delete</button>     
      </div>
    </div>
  )
}

export default Card