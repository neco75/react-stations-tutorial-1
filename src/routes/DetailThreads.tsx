import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
      if (new_post == "") {
        alert("テキストを入力してください");
      } else {
        createPost();
        document.getElementById("new_post").value = "";
        alert("投稿しました");
      }
    } catch (error) {
      console.error("Error:", error);
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
