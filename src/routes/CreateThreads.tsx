import React from "react";
import "../styles/CreateThreads.css";

function CreateThreads() {
  const handleClick = () => {
    try {
      const element = document.getElementById("title");
      async function createThread() {
        await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: element.value,
          }),
        });
      }
      createThread();
      element.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <main>
        <h2>スレッド新規作成</h2>
        <div>
          <input id="title" type="text" defaultValue={"text"} />
          <div>
            <a href="/">Topに戻る</a>
            <button type="button" onClick={handleClick}>
              作成
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateThreads;
