import React, { useEffect, useState } from 'react'

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async()=>{
    setBlogs(blogs_data)
  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>

    </div>
  )
}

export default ListBlog