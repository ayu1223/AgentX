import Navbar from "../components/Navbar";


function Home({ onCreateAgent }) {

  return (
    <div>

      <Navbar />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center"
        }}
      >

        <h1>
          Build Your Own AI Agent
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            margin: "20px auto 32px",
            maxWidth: "650px"
          }}
        >
          Describe what you want your AI agent to do.
          The Agent Factory will configure the right type
          of agent for your task.
        </p>

        <button
          onClick={onCreateAgent}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none"
          }}
        >
          Create Agent
        </button>

      </main>

    </div>
  );
}


export default Home;