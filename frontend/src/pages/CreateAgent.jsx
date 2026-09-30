import Navbar from "../components/Navbar";
import AgentCreator from "../components/AgentCreator";


function CreateAgent({ onAgentCreated, onBack }) {

  return (
    <div>

      <Navbar onHome={onBack} />

      <main
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "50px 24px"
        }}
      >

        <button
          onClick={onBack}
          style={{
            marginBottom: "30px"
          }}
        >
          ← Back
        </button>

        <h1>Create an Agent</h1>

        <p
          style={{
            color: "#040c16",
            marginBottom: "30px"
          }}
        >
          Describe the task you want your agent to handle.
        </p>

        <AgentCreator
          onAgentCreated={onAgentCreated}
        />

      </main>

    </div>
  );
}


export default CreateAgent;