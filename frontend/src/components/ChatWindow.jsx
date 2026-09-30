import MessageBubble from "./MessageBubble";


function ChatWindow({ messages }) {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
        minHeight: "400px",
        overflowY: "auto",
        background: "#020617",
        border: "1px solid #1e293b",
        borderRadius: "12px"
      }}
    >
      {messages.length === 0 ? (
        <p
          style={{
            color: "#94a3b8",
            textAlign: "center"
          }}
        >
          Start a conversation with your agent.
        </p>
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