import React from 'react'
import { useState } from 'react'
import BlogForm from './BlogForm'
import Card from './Card'
import { v4 } from 'uuid'
import { useEffect } from 'react'

 


function Blogs() {

  const [data, setData] = useState([]);
  const [blogEdit, setBlogEdit] = useState({
    blog: {},
    edit: false,
  });

  //get blogs from local storage on component load
  useEffect(()=>{
    const fetchTasks = JSON.parse(localStorage.getItem("blogs"));
    
    if (fetchTasks === null) {
      setData([]);
    }
    else {
      setData(fetchTasks);
    }
  },[])

  //function that adds a new blog to the array
  const addNewBlog = (newBlog) => {
    const blogs = [...data, {id: v4(), ...newBlog}]
    setData(blogs);
    localStorage.setItem("blogs", JSON.stringify(blogs))
  }

  //function that deletes blog from array
  const deleteBlog = (id) => {
    const remainingTasks = data.filter((item) => item.id !== id);
    setData(remainingTasks);
    localStorage.setItem("blogs", JSON.stringify(remainingTasks))
  }

  //function that toggles edit mode and stores data from the selected blog
  const editBlog = (blog) => {
    setBlogEdit({
      blog: {...blog},
      edit: true,
    })
  }

  //function that updates the blog in the array
  const updateBlog = (id,item)=> {
    const editedArray = data.map((x) => (x.id === id ? {...x, ...item} : x))
    setData(editedArray);
    localStorage.setItem("blogs", JSON.stringify(editedArray));
  }

  return (
    <section className='blogs-section'>
      <BlogForm handleAdd={addNewBlog} blogEdit={blogEdit} setBlogEdit={setBlogEdit} handleUpdate={updateBlog} />


     {data.length === 0 && <h2 className='empty-blogs'>No blogs yet...</h2>}

      <div className='card-wrapper'>
        {data.map((item)=>{
          return <Card key={item.id} blog={item} handleDelete={deleteBlog} handleEdit={editBlog} />
        })}      
      </div>
    </section>
  )
}

export default Blogs