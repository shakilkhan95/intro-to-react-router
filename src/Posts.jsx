import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router'

const Posts = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();

    const handleShowDetails = (id) => {
      navigate(`/posts/${id}`);
    }
  return (
    <div>
      <h2>My posts are appears here</h2>
      {posts.map((post) => (
        <div
          style={{
            width: "240px",
            border: "2px solid gray",
            borderRadius: "8px",
            backgroundColor: "#fefeac",
            padding: "10px",
            margin: "10px auto",
          }}
          key={post.id}
        >
          <h3>{post.title}</h3>
          <Link to={`/posts/${post.id}`}>
            <button>See Details</button>
          </Link>

          <button onClick={() => handleShowDetails(post.id)}>Show Details: {post.id}</button>
        </div>
      ))}
    </div>
  );
}

export default Posts