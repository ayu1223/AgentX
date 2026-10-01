import { useState } from "react";
import { createAgent } from "../services/agentService";
import CatIcon from "./CatIcon";

function AgentCreator({ onAgentCreated }) {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!task.trim()) {
      setError(
        "Please describe what you want your agent to do."
      );
      return;
    }

    setError("");
    setLoading(true);

    try {
      const agent = await createAgent({
        name: name.trim() || "My Agent",
        task: task.trim(),
      });

      onAgentCreated(agent);
    } catch (err) {
      setError(
        err.message || "Failed to create agent."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="agent-form"
      onSubmit={handleSubmit}
    >
      <div className="form-agent-preview">
        <div className="form-agent-icon">
          <CatIcon size={38} />
        </div>

        <div>
          <span className="mini-label">
            NEW AGENT
          </span>

          <strong>
            {name.trim() || "My Agent"}
          </strong>
        </div>
      </div>

      <label className="field">
        <span>Agent name</span>

        <input
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          placeholder="e.g. Study Buddy"
        />
      </label>

      <label className="field">
        <span>
          What should your agent do?
        </span>

        <textarea
          value={task}
          onChange={(event) =>
            setTask(event.target.value)
          }
          placeholder="Example: Calculate mathematical expressions and search the web for current information."
          rows={7}
        />

        <small>
          Be specific about the tasks, knowledge,
          or tools you want it to use.
        </small>
      </label>

      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      <button
        className="primary-button form-submit"
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Creating your agent..."
          : "Create Agent"}

        {!loading && (
          <span aria-hidden="true">→</span>
        )}
      </button>
    </form>
  );
}

export default AgentCreator;