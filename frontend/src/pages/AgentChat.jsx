import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import FileUpload from "../components/FileUpload";
import Loading from "../components/Loading";

import { sendMessage } from "../services/agentService";


function AgentChat({ agent, onBack }) {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSend = async (message) => {

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: message
      }
    ]);

    setLoading(true);

    try {

      const result = await sendMessage(
        agent,
        message
      );

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: result.response
        }
      ]);

    } catch (error) {

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            error.message || "Something went wrong."
        }
      ]);

    } finally {

      setLoading(false);

    }
  };


  if (!agent) {
    return (
      <div>
        <Navbar onHome={onBack} />

        <main
          style={{
            padding: "50px",
            textAlign: "center"
          }}
        >
          <p>No agent selected.</p>

          <button onClick={onBack}>
            Go Home
          </button>
        </main>
      </div>
    );
  }


  return (
    <div>

      <Navbar onHome={onBack} />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px"
        }}
      >

        <button
          onClick={onBack}
          style={{
            marginBottom: "20px"
          }}
        >
          ← Back
        </button>


        <h1>{agent.name}</h1>

        <p
          style={{
            color: "#94a3b8"
          }}
        >
          Type: {agent.agent_type}
        </p>


        {agent.agent_type === "rag" && (
          <div
            style={{
              margin: "25px 0"
            }}
          >
            <FileUpload />
          </div>
        )}


        <ChatWindow
          messages={messages}
        />


        {loading && (
          <Loading text="Agent is thinking..." />
        )}


        <ChatInput
          onSend={handleSend}
          disabled={loading}
        />

      </main>

    </div>
  );
}


export default AgentChat;