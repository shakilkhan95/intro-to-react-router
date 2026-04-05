import React from 'react'
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
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
        
      </div>
    </div>
  );
}

export default PostDetails