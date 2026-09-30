import AgentCard from "./AgentCard";


function AgentList({ agents, onOpenAgent }) {

  if (!agents || agents.length === 0) {
    return (
      <p>
        No agents created yet.
      </p>
    );
  }


  return (
    <div
      style={{
        display: "grid",
        gap: "16px"
      }}
    >
      {agents.map((agent, index) => (
        <AgentCard
          key={agent.id || index}
          agent={agent}
          onOpen={() => onOpenAgent(agent)}
        />
      ))}
    </div>
  );
}


export default AgentList;