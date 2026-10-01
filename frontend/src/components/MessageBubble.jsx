import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import CatIcon from "./CatIcon";

import "katex/dist/katex.min.css";

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`message-row ${
        isUser
          ? "user-message"
          : "assistant-message"
      }`}
    >
      {!isUser && (
        <div className="message-avatar">
          <CatIcon size={27} />
        </div>
      )}

      <div
        className={`message-bubble ${
          isUser
            ? "user-bubble"
            : "assistant-bubble"
        }`}
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