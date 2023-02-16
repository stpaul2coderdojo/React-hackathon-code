import React, { useState, useEffect } from "react";
import axios from "axios";

/*function PostCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.date}</p>
        <p className="card-text">By {post.author}</p>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}*/

function PostCard({ post }) {
  const [showLink, setShowLink] = useState(false);

  function handleClick() {
    setShowLink(true);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={post.image} alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.date}</p>
        <p className="card-text">By {post.author}</p>
        {showLink && (
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.link}
          </a>
        )}
      </div>
    </div>
  );
}



function PostList({ posts }) {
  return (
    <div className="card-columns">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
    async function fetchPosts() {
      try {
        const response = await axios.get("https://www.medium.com/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <PostList posts={posts} />
    </div>
  );
}

export default App;
