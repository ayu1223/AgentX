function AgentCard({ agent, onOpen }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #334155",
        borderRadius: "12px",
        background: "#1e293b"
      }}
    >
      <h3>{agent.name}</h3>

      <p>{agent.description}</p>

      <p>
        <strong>Type:</strong>{" "}
        {agent.agent_type}
      </p>

      <button onClick={onOpen}>
        Open Agent
      </button>
    </div>
  );
}

export default AgentCard;