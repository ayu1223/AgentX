import { useState } from "react";

import { createAgent } from "../services/agentService";


function AgentCreator({ onAgentCreated }) {

  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!task.trim()) {
      setError("Please describe what you want your agent to do.");
      return;
    }

    setError("");
    setLoading(true);

    try {

      const agent = await createAgent({
        name: name.trim() || "My Agent",
        task: task.trim()
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
    <form onSubmit={handleSubmit}>

      <div>
        <label style={{color:"red"}}>Agent Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="My Agent"
        />
      </div>


      <div>
        <label>What should your agent do?</label>

        <textarea
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Example: Calculate mathematical expressions and search the web for current information."
          rows={6}
        />
      </div>


      {error && (
        <p>{error}</p>
      )}


      <button
        type="submit"
        
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Agent"}
      </button>

    </form>
  );
}


export default AgentCreator;