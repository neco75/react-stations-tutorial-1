import { useState, useEffect } from "react";

import "./App.css";
import "./reset.css";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads"
      );
      const data = await res.json();
      setThreads(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>
          <a href="#">掲示板</a>
        </h1>
        <nav>
          <div id="create-thread">
            <a href="#">スレッドを立てる</a>
          </div>
        </nav>
      </header>
      <main>
        <h2>新着スレッド</h2>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>
              <a href={`/threads/${thread.id}`}>{thread.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
