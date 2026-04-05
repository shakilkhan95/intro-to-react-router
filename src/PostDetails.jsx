import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
  return (
    <div>
      <h2>The Details of the Post is</h2>
      <div
        style={{
          width: "240px",
          border: "2px solid gray",
          borderRadius: "8px",
          backgroundColor: "#fefeac",
          padding: "10px",
          margin: "10px auto",
        }}>
        <h3>{postDetails.body}</h3>
        
        <button onClick={()=> navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default PostDetails