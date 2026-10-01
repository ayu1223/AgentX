import Navbar from "../components/Navbar";
import CatIcon from "../components/CatIcon";

function Home({ onCreateAgent }) {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="home-page">
        <section className="hero-card">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-icon">
            <CatIcon size={62} />
          </div>

          <span className="eyebrow">
            YOUR PERSONAL AI WORKSPACE
          </span>

          <h1>
            Build your own
            <span> AI Agent</span>
          </h1>

          <p>
            Create a focused AI assistant for
            research, documents, calculations,
            Q&amp;A, and everyday tasks — all from
            one simple workspace.
          </p>

          <button
            className="primary-button hero-button"
            onClick={onCreateAgent}
          >
            Create an Agent
            <span aria-hidden="true">
              →
            </span>
          </button>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">
                ✦
              </span>

              <div>
                <strong>
                  Smart routing
                </strong>

                <span>
                  We configure the right agent
                  type for your task.
                </span>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">
                ⌁
              </span>

              <div>
                <strong>
                  Document Q&amp;A
                </strong>

                <span>
                  Upload PDFs or text and chat
                  with your knowledge.
                </span>
              </div>
            </div>

            <div className="feature-card">
              <span className="feature-icon">
                ⌘
              </span>

              <div>
                <strong>
                  Useful tools
                </strong>

                <span>
                  Give your agent access to
                  calculations and web search.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;