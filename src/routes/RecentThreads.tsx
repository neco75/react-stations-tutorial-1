import React from "react";

function RecentThreads(props) {
  return (
    <main>
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
