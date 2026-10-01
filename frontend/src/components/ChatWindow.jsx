import MessageBubble from "./MessageBubble";
import CatIcon from "./CatIcon";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <div className="chat-empty">
          <div className="chat-empty-icon">
            <CatIcon size={50} />
          </div>

          <h3>How can I help?</h3>

          <p>
            Ask your agent anything. Your
            conversation will appear here.
          </p>

          <div className="suggestion-row">
            <span>Explain a concept</span>
            <span>Analyze a document</span>
            <span>Calculate something</span>
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
          />
        ))
      )}
    </div>
  );
}

export default ChatWindow;