import CatIcon from "./CatIcon";

function Navbar({ onHome }) {
  return (
    <header className="topbar">
      <button
        className="brand"
        onClick={onHome}
        aria-label="Go to home"
      >
        <span className="brand-mark">
          <CatIcon size={28} />
        </span>

        <span>AskWhat</span>
      </button>

      <div className="topbar-right">
        <span className="topbar-label">
          AI Agent Builder
        </span>
    
      </div>
    </header>
  );
}

export default Navbar;