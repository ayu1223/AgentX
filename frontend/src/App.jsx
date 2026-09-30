import { useState } from "react";

import Home from "./pages/Home";
import CreateAgent from "./pages/CreateAgent";
import AgentChat from "./pages/AgentChat";


function App() {

  const [page, setPage] = useState("home");
  const [agent, setAgent] = useState(null);


  const handleAgentCreated = (createdAgent) => {
    setAgent(createdAgent);
    setPage("chat");
  };


  if (page === "create") {
    return (
      <CreateAgent
        onAgentCreated={handleAgentCreated}
        onBack={() => setPage("home")}
      />
    );
  }


  if (page === "chat") {
    return (
      <AgentChat
        agent={agent}
        onBack={() => setPage("home")}
      />
    );
  }


  return (
    <Home
      onCreateAgent={() => setPage("create")}
    />
  );
}


export default App;