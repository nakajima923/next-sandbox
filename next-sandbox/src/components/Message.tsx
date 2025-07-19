"use client";

import { useState } from "react";

type MessageProps = {
  title: string;
  content: string;
};

export default function Message({ title, content }: MessageProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#eee",
        borderRadius: "8px",
        transition: "all 0.3s",
      }}
    >
      <h3>{title}</h3>
      <p>{showDetail ? "🎉 ボタンを押したので詳細表示！" : content}</p>
      <button
        onClick={() => setShowDetail((prev) => !prev)}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
          background: "#fff",
        }}
      >
        {showDetail ? "隠す" : "詳細を表示"}
      </button>
    </div>
  );
}
