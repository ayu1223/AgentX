import { useState } from "react";


function ChatInput({ onSend, disabled = false }) {

  const [message, setMessage] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    onSend(trimmedMessage);

    setMessage("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "16px"
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "#f8fafc"
        }}
      />

      <button
        type="submit"
        disabled={disabled || !message.trim()}
      >
        Send
      </button>
    </form>
  );
}


export default ChatInput;