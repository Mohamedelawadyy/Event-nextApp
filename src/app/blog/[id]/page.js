"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "../blog.module.css";

export default function Post() {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div className={classes.container}>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}
