import { useState } from "react";

import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import FileUpload from "../components/FileUpload";
import Loading from "../components/Loading";
import CatIcon from "../components/CatIcon";

import { sendMessage } from "../services/agentService";

function AgentChat({ agent, onBack }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (message) => {
    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: message,
      },
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
          content: result.response,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            error.message ||
            "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!agent) {
    return (
      <div className="app-shell">
        <Navbar onHome={onBack} />

        <main className="empty-state">
          <div className="empty-icon">
            <CatIcon size={52} />
          </div>

          <h2>No agent selected</h2>

          <p>
            Return to the workspace and create
            an agent first.
          </p>

          <button
            className="primary-button"
            onClick={onBack}
          >
            Go Home →
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar onHome={onBack} />

      <main className="chat-page">
        <div className="chat-header">
          <button
            className="back-button"
            onClick={onBack}
          >
            ← Workspace
          </button>

          <div className="agent-heading">
            <div className="agent-avatar">
              <CatIcon size={42} />
            </div>

            <div>
              <div className="agent-title-row">
                <h1>{agent.name}</h1>

                <span className="agent-status">
                  ONLINE
                </span>
              </div>

              <p>
                {agent.agent_type} agent · Ready
                to help
              </p>
            </div>
          </div>
        </div>

        {agent.agent_type === "rag" && (
          <div className="upload-panel">
            <div>
              <strong>
                Knowledge base
              </strong>

              <span>
                Upload a PDF or TXT file to give
                your agent context.
              </span>
            </div>

            <FileUpload />
          </div>
        )}

        <section className="chat-card">
          <ChatWindow
            messages={messages}
          />

          {loading && (
            <Loading text="Your agent is thinking..." />
          )}

          <ChatInput
            onSend={handleSend}
            disabled={loading}
          />
        </section>
      </main>
    </div>
  );
}

export default AgentChat;