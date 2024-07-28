import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../api/useFetch';

const BlogPage = () => {

  const {blogId} = useParams();
  let {loading,error,data} = useFetch(`http://localhost:1337/api/blogs/${blogId}`);
  if (loading) return <p>Loading ...</p>
  if(error) return <p>Error !</p>
  console.log("idddd",data)
  return (
    <div>
      <h1>{data?.data?.attributes?.Description}</h1>
     Single   Blog Page
    </div>
  )
}

export default BlogPage
