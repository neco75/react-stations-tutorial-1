import React from "react";
import "../styles/RecentThreads.css";

function RecentThreads(props) {
  return (
    <main id="recent-contents">
      <h2>新着スレッド</h2>
      <ul>
        {props.threads.map((thread) => (
          <li key={thread.id}>
            <a href={`/threads/${thread.id}?title=${thread.title}`}>
              {thread.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default RecentThreads;
