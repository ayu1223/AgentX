import Navbar from "../components/Navbar";
import AgentCreator from "../components/AgentCreator";
import CatIcon from "../components/CatIcon";

function CreateAgent({
  onAgentCreated,
  onBack,
}) {
  return (
    <div className="app-shell">
      <Navbar onHome={onBack} />

      <main className="create-page">
        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to workspace
        </button>

        <section className="create-layout">
          <div className="create-intro">
            <div className="section-icon">
              <CatIcon size={50} />
            </div>

            <span className="eyebrow">
              AGENT FACTORY
            </span>

            <h1>
              Create an <span>AI Agent</span>
            </h1>

            <p>
              Tell us what you want your assistant
              to accomplish. AskWhat will configure
              the appropriate agent for the job.
            </p>

            <div className="tip-card">
              <span>✦</span>

              <div>
                <strong>Tip</strong>

                <p>
                  Try: “Help me answer questions
                  from uploaded lecture notes.”
                </p>
              </div>
            </div>
          </div>

          <div className="panel-card create-form-card">
            <AgentCreator
              onAgentCreated={onAgentCreated}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreateAgent;