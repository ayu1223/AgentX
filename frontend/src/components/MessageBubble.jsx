import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";


function MessageBubble({ message }) {

  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start"
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          padding: "14px 18px",
          borderRadius: "14px",
          background: isUser ? "#232629" : "#232629",
          color: "#f7f8f9",
          lineHeight: "1.6",
          overflowX: "auto"
        }}
      >
        {isUser ? (
          message.content
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}


export default MessageBubble;