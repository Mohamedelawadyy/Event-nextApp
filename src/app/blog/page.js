import Link from "next/link";

import classes from "./blog.module.css";

async function Blog() {
  const data = await getData();
  return (
    <div className={classes.container}>
      <h1 className="text-center">Blog</h1>
      {data.map((post) => (
        <div key={post._id} className={classes.postItem}>
          <Link className=" green_gradient" href={`blog/${post.id}`}>
            <h6>{post.title}</h6>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default Blog;
