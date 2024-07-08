import React, { useState, useEffect } from "react";
import "./Blog.css";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fecthData = () => {
    fetch("http://localhost:5173/data/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <section id="blogs" className="blogs">
      <div className="contain-fluid">
        <div className="row">
          <h4 className="section-title">Nosso blog</h4>
        </div>
        <div className="row mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blog;
