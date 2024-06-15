import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailThreads() {
  const { thread_id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`
      );
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchData();
  }, []);

  function handleClick() {
    try {
      const new_post = document.getElementById("new_post").value;
      async function createPost() {
        await fetch(
          `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ post: new_post }),
          }
        ).then(() => {
          window.location.reload();
        });
      }
      createPost();
      document.getElementById("new_post").value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h2>{window.location.search.split("=")[1]}</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.post}</p>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <h2>投稿</h2>
        <div style={{ display: "flex" }}>
          <textarea name="new_post" id="new_post" required></textarea>
          <button onClick={handleClick}>投稿</button>
        </div>
      </div>
    </div>
  );
}

export default DetailThreads;
