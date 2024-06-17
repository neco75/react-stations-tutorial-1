import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/DetailThreads.css";

function DetailThreads(props) {
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
  }, [posts]);

  async function createPost(new_post) {
    try {
      await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post: new_post }),
        }
      );
      setPosts([]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleClick() {
    const new_post = document.getElementById("new_post").value;
    if (new_post === "") {
      alert("テキストを入力してください");
    } else {
      createPost(new_post);
      document.getElementById("new_post").value = "";
    }
  }

  return (
    <div id="detail-contents">
      <div id="comments-area">
        <h2>
          Title :{" "}
          {props.threads.find((thread) => thread.id == thread_id)?.title}
        </h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.post}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="submit-area">
        <h2>投稿</h2>
        <div id="submit-form">
          <textarea
            name="new_post"
            id="new_post"
            placeholder="テキストを入力してください"
            required
          ></textarea>
          <button onClick={handleClick}>投稿</button>
        </div>
      </div>
    </div>
  );
}

export default DetailThreads;
