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
      if (element.value == "") {
        alert("テキストを入力してください");
        return;
      } else {
        createThread();
        element.value = "";
        alert("スレッドを作成しました");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <main id="create-contents">
        <h2>スレッド新規作成</h2>
        <div id="create-area">
          <input
            id="title"
            type="text"
            placeholder="テキストを入力してください"
          />
          <div id="create-button-area">
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
