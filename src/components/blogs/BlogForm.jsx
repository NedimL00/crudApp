import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function BlogForm({handleAdd, blogEdit, setBlogEdit, handleUpdate}) {

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: '',
  })
  const [message, setMessage] = useState('');

  //check if blog is being edited
  useEffect(()=>{
    if(blogEdit.edit === true){
      setBlogData(blogEdit.blog);
    }
    return
  },[blogEdit])


  //store the values from inputs
  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    })
  }

  //handle form submit

  const handleSubmit = (e) => {
    e.preventDefault();

    //check if the input is empty, and set error message to display below form if the input is empty
    if(blogData.title.trim() === "") {
      setMessage('Please enter blog title!');
      setBlogData({...blogData, title:''})
    } 
    else if (blogData.content.trim() === "") {
      setMessage('Please enter blog content!');
      setBlogData({...blogData, content:''})
    } 
    else if (blogData.author.trim() === "") {
      setMessage('Please enter author of the blog!');
      setBlogData({...blogData, author:''})
    } 
    else {

      //check if edit mode is ON 

      if(blogEdit.edit === true) {
        handleUpdate(blogData.id, blogData);
      } 
      //edit mode is OFF, add new blog to the array
      else {
        handleAdd(blogData);        
      }
      setMessage('');
      setBlogEdit({
        blog: {},
        edit: false,
      })

      //refresh input fields after submiting
      setBlogData({
        title:'',
        content:'',
        author:'',
      })
    }
  }



  return (
    <div className='form-wrapper'>
      <form className='blog-form' onSubmit={handleSubmit}>
        <h1>Blog App</h1>

        <div className='input-holder'>
        <input name='title' type='text' value={blogData.title || ''} onChange={handleChange} placeholder="Write your title" />
        <input name='author' type='text' value={blogData.author || ''} onChange={handleChange} placeholder="Author" />
        </div>
        <textarea name='content' type='text' value={blogData.content || ''} onChange={handleChange} placeholder="Write your content" />
        <button className="card-btn btn-submit" type="submit">Add</button>

        {message && <p className='warning-message'>{message}</p>}
      </form>      
    </div>

  )
}

export default BlogForm