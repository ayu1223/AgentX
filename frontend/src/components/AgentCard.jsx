import CatIcon from "./CatIcon";

function AgentCard({ agent, onOpen }) {
  return (
    <article className="agent-card">
      <div className="agent-card-top">
        <div className="agent-avatar">
          <CatIcon size={34} />
        </div>

        <span className="agent-type">
          {agent.agent_type}
        </span>
      </div>

      <h3>{agent.name}</h3>

      <p>{agent.description}</p>

      <button
        className="secondary-button"
        onClick={onOpen}
      >
        Open Agent →
      </button>
    </article>
  );
}

export default AgentCard;