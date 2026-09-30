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
          maxWidth: "75%",
          padding: "12px 16px",
          borderRadius: "12px",
          background: isUser ? "#2563eb" : "#1e293b",
          color: "#f8fafc",
          whiteSpace: "pre-wrap"
        }}
      >
        {message.content}
      </div>
    </div>
  );
}


export default MessageBubble;