import Header from "./components/Header";
import RecentThreads from "./routes/RecentThreads";
import CreateThreads from "./routes/CreateThreads";
import DetailThreds from "./routes/DetailThreads";
import { Routes, Route } from "react-router-dom";
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
      <Header />
      <Routes>
        <Route path="/" element={<RecentThreads threads={threads} />} />
        <Route path="/create" element={<CreateThreads />} />
        <Route
          path="/threads/:thread_id"
          element={<DetailThreds threads={threads} />}
        />
      </Routes>
    </>
  );
}

export default App;
